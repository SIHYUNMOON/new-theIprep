'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import type { Post } from '@/lib/db'

interface BoardClientProps {
  initialPosts: Post[]
  initialTotalCount: number
  initialTotalPages: number
}

export function BoardClient({
  initialPosts,
  initialTotalCount,
  initialTotalPages,
}: BoardClientProps) {
  const [posts, setPosts] = useState(initialPosts)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(initialTotalPages)
  const { isAdmin, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (page === 1) return
    
    fetch(`/api/posts?sort=latest&page=${page}&pageSize=10`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.items)
        setTotalPages(data.totalPages)
      })
  }, [page])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/40">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/images/image.png"
                alt="The-I Prep Logo"
                className="h-10 w-auto"
              />
            </a>
            <div className="flex items-center gap-4">
              <a href="/" className="text-sm hover:text-primary transition-colors">
                홈으로
              </a>
              {isAdmin && (
                <button
                  onClick={() => logout()}
                  className="text-sm hover:text-primary transition-colors"
                >
                  로그아웃
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">정보게시판</h1>
            {isAdmin && (
              <button
                onClick={() => router.push('/board/write')}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                글쓰기
              </button>
            )}
          </div>

          {/* Posts List */}
          <div className="space-y-2">
            {posts.map((post) => (
              <a
                key={post.id}
                href={`/board/${post.id}`}
                className="block p-4 border border-border rounded-lg hover:border-primary transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{new Date(post.created_at).toLocaleDateString('ko-KR')}</span>
                      <span>조회 {post.views}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`px-4 py-2 rounded ${
                    p === page
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
