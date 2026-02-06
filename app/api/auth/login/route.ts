import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// Admin credentials - stored server-side only
const ADMIN_ID = process.env.ADMIN_ID || 'adminThePrep2013'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'TheIP!Web26#Ops@'
const SESSION_SECRET = process.env.SESSION_SECRET || 'the-i-prep-session-secret-2024'

export async function POST(request: Request) {
  try {
    const { id, password } = await request.json()

    // Server-side credential verification
    if (id === ADMIN_ID && password === ADMIN_PASSWORD) {
      // Set httpOnly session cookie
      const cookieStore = await cookies()
      cookieStore.set('admin-session', SESSION_SECRET, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })

      return NextResponse.json({ ok: true })
    }

    return NextResponse.json({ ok: false, error: 'Invalid credentials' }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}
