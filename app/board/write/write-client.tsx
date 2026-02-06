'use client'

import React from "react"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { DEFAULT_CATEGORIES } from '@/lib/db'

export function WriteClient() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('공지사항')
  const [customDate, setCustomDate] = useState('')
  const [categories, setCategories] = useState<string[]>(DEFAULT_CATEGORIES)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => {
        if (data.categories && data.categories.length > 0) {
          const merged = [...new Set([...DEFAULT_CATEGORIES, ...data.categories])]
          setCategories(merged)
        }
      })
      .catch(() => {
        // Use defaults
      })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const contentHtml = content.replace(/\n/g, '<br>')
      
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          contentHtml,
          category,
          customDate: customDate || undefined,
        }),
      })

      const data = await res.json()

      if (res.ok && data.id) {
        router.push(`/board/${data.id}`)
      } else {
        alert('게시글 작성에 실패했습니다.')
      }
    } catch (error) {
      alert('게시글 작성 중 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

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
              <a href="/board" className="text-sm hover:text-primary transition-colors">
                목록으로
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">글쓰기</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium mb-2">
                카테고리
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                제목 *
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* Custom Date */}
            <div>
              <label htmlFor="customDate" className="block text-sm font-medium mb-2">
                작성 날짜 (선택)
              </label>
              <input
                id="customDate"
                type="datetime-local"
                value={customDate}
                onChange={(e) => setCustomDate(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium mb-2">
                내용 *
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={15}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => router.push('/board')}
                className="px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors"
              >
                취소
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {loading ? '게시 중...' : '게시하기'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
