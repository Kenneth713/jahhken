import { Navbar } from "@/components/common/navbar"
import { Footer } from "@/components/common/footer"
import { BlogList } from "@/components/features/blog/blog-list"
import { blogPosts, categories } from "@/lib/data/blog"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Blog | Portfolio",
  description: "Read my latest thoughts on web development, design, and technology.",
}

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            {/* Header */}
            <div className="mb-12">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Blog
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                Latest Articles
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Thoughts, tutorials, and insights on web development, design, and technology.
              </p>
            </div>

            {/* Categories */}
            <div className="mb-12">
              <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Browse by Category
              </h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Link key={category} href={`/blog/category/${encodeURIComponent(category.toLowerCase())}`}>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors">
                      {category}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>

            {/* Blog Posts */}
            <BlogList posts={blogPosts} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
