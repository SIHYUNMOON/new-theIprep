import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getPosts, createPost } from '@/lib/db'

const SESSION_SECRET = process.env.SESSION_SECRET || 'the-i-prep-session-secret-2024'

async function isAdmin(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin-session')
  return session?.value === SESSION_SECRET
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const sort = (searchParams.get('sort') as 'latest' | 'popular') || 'latest'
    const page = Number.parseInt(searchParams.get('page') || '1', 10)
    const pageSize = Number.parseInt(searchParams.get('pageSize') || '10', 10)

    const result = getPosts(sort, page, pageSize)
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { items: [], totalCount: 0, totalPages: 0 },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    // Check admin auth
    if (!(await isAdmin())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()
    const { title, contentHtml, customDate, category } = data

    const post = createPost({
      title,
      content_html: contentHtml,
      category: category || '공지사항',
      author: 'Admin',
      created_at: customDate || undefined,
    })

    return NextResponse.json({ id: post.id, ...post })
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
