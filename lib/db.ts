// Simple in-memory database for posts
// In production, replace with actual database

export interface Post {
  id: string
  title: string
  content_html: string
  category: string
  author: string
  created_at: string
  views: number
  likes: number
}

// In-memory store
let posts: Post[] = []
let nextId = 1

export function getPosts(
  sort: 'latest' | 'popular' = 'latest',
  page = 1,
  pageSize = 10
): { items: Post[]; totalCount: number; totalPages: number } {
  const sorted = [...posts].sort((a, b) => {
    if (sort === 'latest') {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    }
    return b.views - a.views
  })

  const start = (page - 1) * pageSize
  const items = sorted.slice(start, start + pageSize)
  const totalCount = posts.length
  const totalPages = Math.ceil(totalCount / pageSize)

  return { items, totalCount, totalPages }
}

export function getPostById(id: string): Post | null {
  return posts.find((p) => p.id === id) || null
}

export function createPost(data: {
  title: string
  content_html: string
  category: string
  author: string
  created_at?: string
}): Post {
  const post: Post = {
    id: String(nextId++),
    title: data.title,
    content_html: data.content_html,
    category: data.category,
    author: data.author,
    created_at: data.created_at || new Date().toISOString(),
    views: 0,
    likes: 0,
  }
  posts.push(post)
  return post
}

export function incrementViews(id: string): void {
  const post = posts.find((p) => p.id === id)
  if (post) {
    post.views += 1
  }
}

export const DEFAULT_CATEGORIES = [
  '공지사항',
  '입학정보',
  '컨설팅 후기',
  '자유게시판',
]

export function getCategories(): string[] {
  return DEFAULT_CATEGORIES
}
