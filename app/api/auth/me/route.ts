import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const SESSION_SECRET = process.env.SESSION_SECRET || 'the-i-prep-session-secret-2024'

export async function GET() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin-session')
  
  const isAdmin = session?.value === SESSION_SECRET
  
  return NextResponse.json({ isAdmin })
}
