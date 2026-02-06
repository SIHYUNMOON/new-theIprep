import { NextRequest, NextResponse } from 'next/server'
import { incrementViews } from '@/lib/db'

export const runtime = 'nodejs'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    const result = await incrementViews(id)

    if (!result.ok) {
      // Silently fail - view tracking is non-critical
      return NextResponse.json({ success: false })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    // Silently fail - view tracking is non-critical
    return NextResponse.json({ success: false })
  }
}
