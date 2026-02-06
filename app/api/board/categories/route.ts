import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // Check if DATABASE_URL is defined
    if (!process.env.DATABASE_URL) {
      console.log('[v0] DATABASE_URL not defined, returning default categories')
      return NextResponse.json({ categories: [] })
    }

    const sql = getDb()

    const result = await sql`
      SELECT DISTINCT category 
      FROM posts 
      WHERE category IS NOT NULL 
      ORDER BY category
    `

    const categories = result.map((row: { category: string }) => row.category)

    console.log('[v0] Fetched categories:', categories.length)

    return NextResponse.json({ categories })
  } catch (error) {
    console.error('[v0] Categories API error:', error)
    // Return empty array on error so the client can use defaults
    return NextResponse.json({ categories: [] })
  }
}
