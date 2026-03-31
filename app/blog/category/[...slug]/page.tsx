import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/common/navbar"
import { Footer } from "@/components/common/footer"
import { BlogList } from "@/components/features/blog/blog-list"
import { Button } from "@/components/ui/button"
import { getBlogPostsByCategory, categories } from "@/lib/data/blog"

interface CategoryPageProps {
  params: Promise<{
    slug: string[]
  }>
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: [category.toLowerCase()],
  }))
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params
  const categoryName = slug[0]
  const formattedCategory = categoryName.charAt(0).toUpperCase() + categoryName.slice(1)

  return {
    title: `${formattedCategory} Articles | Portfolio`,
    description: `Browse all articles in the ${formattedCategory} category.`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  
  // slug is an array - use the first segment as category
  const categoryName = slug[0]
  const posts = getBlogPostsByCategory(categoryName)
  
  // Format category name for display
  const formattedCategory = categoryName.charAt(0).toUpperCase() + categoryName.slice(1)

  // If category doesn't exist, show 404
  const categoryExists = categories.some(
    (c) => c.toLowerCase() === categoryName.toLowerCase()
  )

  if (!categoryExists) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            {/* Back Link */}
            <Button asChild variant="ghost" className="mb-8 -ml-4">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            {/* Header */}
            <div className="mb-12">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Category
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                {formattedCategory}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {posts.length} article{posts.length !== 1 ? "s" : ""} in this category
              </p>
            </div>

            {/* Blog Posts */}
            <BlogList posts={posts} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
