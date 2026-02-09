import { NextRequest, NextResponse } from 'next/server'
import { incrementPostViews } from '@/lib/db'
import { getSessionFromRequest } from '@/lib/auth'

export const runtime = 'nodejs'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    console.log('[v0] View tracking - Post ID:', id)

    // Skip if admin is authenticated
    const isAdmin = getSessionFromRequest(request)
    if (isAdmin) {
      console.log('[v0] View tracking - Skipping for admin user')
      return NextResponse.json({ ok: true, incremented: false, skipped: 'admin' })
    }

    // Check 24-hour cookie-based unique view
    const cookieName = `viewed_post_${id}`
    const alreadyViewed = request.cookies.get(cookieName)?.value === '1'

    console.log('[v0] View tracking - Cookie name:', cookieName, 'Already viewed:', alreadyViewed)

    const res = NextResponse.json({ ok: true, incremented: !alreadyViewed })

    // If not viewed before, increment views and set cookie
    if (!alreadyViewed) {
      console.log('[v0] View tracking - Incrementing view count for post:', id)
      await incrementPostViews(id)

      res.cookies.set({
        name: cookieName,
        value: '1',
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 24, // 24 hours
      })
      console.log('[v0] View tracking - Set cookie for 24 hours')
    } else {
      console.log('[v0] View tracking - Skipping increment, already viewed within 24 hours')
    }

    return res
  } catch (error) {
    console.error('[v0] View tracking error:', error)
    return NextResponse.json(
      { ok: false, error: 'Failed to track view' },
      { status: 500 }
    )
  }
}
