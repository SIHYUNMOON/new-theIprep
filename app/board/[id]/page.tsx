import { getPostById } from '@/lib/db'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const revalidate = 60

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const post = getPostById(resolvedParams.id)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  
  return {
    title: `${post.title} | The-I Prep`,
    description: post.title,
  }
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params
  const post = getPostById(resolvedParams.id)
  
  if (!post) {
    notFound()
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
              <a href="/" className="text-sm hover:text-primary transition-colors">
                홈으로
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <article className="bg-card rounded-lg shadow-lg p-8">
            {/* Post Header */}
            <div className="border-b border-border pb-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{post.author}</span>
                <span>·</span>
                <span>{new Date(post.created_at).toLocaleDateString('ko-KR')}</span>
                <span>·</span>
                <span>조회 {post.views}</span>
              </div>
            </div>

            {/* Post Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content_html }}
            />
          </article>

          {/* Actions */}
          <div className="mt-6 flex justify-center">
            <a
              href="/board"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              목록으로
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
