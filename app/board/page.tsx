import { getPosts } from '@/lib/db'
import { BoardClient } from './board-client'

export const metadata = {
  title: '정보게시판 | The-I Prep',
  description: 'The-I Prep 정보게시판',
}

export const revalidate = 60

export default async function BoardPage() {
  const { items, totalCount, totalPages } = getPosts('latest', 1, 10)

  return (
    <>
      <noscript>
        <div className="min-h-screen bg-background py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">정보게시판</h1>
            <div className="space-y-4">
              {items.map((post) => (
                <div key={post.id} className="p-4 border border-border rounded-lg">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-sm text-muted-foreground mt-2">
                    {post.category} · {new Date(post.created_at).toLocaleDateString('ko-KR')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </noscript>
      <BoardClient 
        initialPosts={items}
        initialTotalCount={totalCount}
        initialTotalPages={totalPages}
      />
    </>
  )
}
