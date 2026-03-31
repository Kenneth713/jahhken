import { BlogCard } from "./blog-card"
import type { BlogPost } from "@/lib/data/blog"

interface BlogListProps {
  posts: BlogPost[]
  title?: string
  description?: string
}

export function BlogList({ posts, title, description }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No blog posts found.</p>
      </div>
    )
  }

  return (
    <section>
      {(title || description) && (
        <div className="mb-8">
          {title && <h2 className="text-2xl font-bold">{title}</h2>}
          {description && (
            <p className="mt-2 text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
