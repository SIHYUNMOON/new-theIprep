import { NextRequest, NextResponse } from 'next/server'
import { incrementPostViews } from '@/lib/db'

export const runtime = 'nodejs'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Check if this user has viewed this post within the last 24 hours
    const viewedPostsCookie = request.cookies.get('viewed_posts')?.value || '{}'
    let viewedPosts: Record<string, number> = {}
    
    try {
      viewedPosts = JSON.parse(viewedPostsCookie)
    } catch {
      viewedPosts = {}
    }

    const now = Date.now()
    const lastViewed = viewedPosts[id]
    const twentyFourHours = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

    // Check if viewed within last 24 hours
    if (lastViewed && (now - lastViewed) < twentyFourHours) {
      console.log('[v0] Post already viewed within 24 hours:', id)
      return NextResponse.json({ success: true, alreadyViewed: true })
    }

    // Increment view count
    const result = await incrementPostViews(id)

    if (!result.ok) {
      // Silently fail - view tracking is non-critical
      return NextResponse.json({ success: false })
    }

    // Update viewed posts with current timestamp
    viewedPosts[id] = now
    
    // Clean up old entries (older than 30 days)
    const thirtyDays = 30 * 24 * 60 * 60 * 1000
    Object.keys(viewedPosts).forEach(postId => {
      if (now - viewedPosts[postId] > thirtyDays) {
        delete viewedPosts[postId]
      }
    })
    
    const response = NextResponse.json({ success: true, alreadyViewed: false })
    
    // Set cookie with timestamp data for 30 days
    response.cookies.set('viewed_posts', JSON.stringify(viewedPosts), {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
    })

    console.log('[v0] View count incremented for post:', id)

    return response
  } catch (error) {
    console.error('[v0] View tracking error:', error)
    // Silently fail - view tracking is non-critical
    return NextResponse.json({ success: false })
  }
}
