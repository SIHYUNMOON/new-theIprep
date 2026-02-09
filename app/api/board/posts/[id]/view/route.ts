import { NextRequest, NextResponse } from 'next/server'
import { incrementPostViews } from '@/lib/db'

export const runtime = 'nodejs'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Check if this user has already viewed this post
    const viewedPosts = request.cookies.get('viewed_posts')?.value || ''
    const viewedPostIds = viewedPosts.split(',').filter(Boolean)

    if (viewedPostIds.includes(id)) {
      console.log('[v0] Post already viewed by this user:', id)
      return NextResponse.json({ success: true, alreadyViewed: true })
    }

    // Increment view count
    const result = await incrementPostViews(id)

    if (!result.ok) {
      // Silently fail - view tracking is non-critical
      return NextResponse.json({ success: false })
    }

    // Add this post to the viewed list
    const newViewedPosts = [...viewedPostIds, id].join(',')
    
    const response = NextResponse.json({ success: true, alreadyViewed: false })
    
    // Set cookie for 30 days
    response.cookies.set('viewed_posts', newViewedPosts, {
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
