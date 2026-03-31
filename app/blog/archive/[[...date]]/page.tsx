import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { Navbar } from "@/components/common/navbar"
import { Footer } from "@/components/common/footer"
import { BlogList } from "@/components/features/blog/blog-list"
import { Button } from "@/components/ui/button"
import { getBlogPostsByDate, blogPosts } from "@/lib/data/blog"

interface ArchivePageProps {
  params: Promise<{
    date?: string[]
  }>
}

export async function generateMetadata({ params }: ArchivePageProps) {
  const { date } = await params
  
  if (!date || date.length === 0) {
    return {
      title: "Blog Archive | Portfolio",
      description: "Browse all blog posts by date.",
    }
  }

  const [year, month, day] = date
  let title = "Archive"
  
  if (year && month && day) {
    title = `Posts from ${month}/${day}/${year}`
  } else if (year && month) {
    title = `Posts from ${month}/${year}`
  } else if (year) {
    title = `Posts from ${year}`
  }

  return {
    title: `${title} | Portfolio`,
    description: `Browse blog posts from ${title.replace("Posts from ", "")}.`,
  }
}

export default async function ArchivePage({ params }: ArchivePageProps) {
  const { date } = await params
  
  // date is optional - if not provided, show all posts
  const year = date?.[0]
  const month = date?.[1]
  const day = date?.[2]
  
  const posts = getBlogPostsByDate(year, month, day)
  
  // Build title based on date parameters
  let pageTitle = "All Posts"
  let dateDescription = "all time"
  
  if (year && month && day) {
    const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
    pageTitle = dateObj.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    dateDescription = pageTitle
  } else if (year && month) {
    const dateObj = new Date(parseInt(year), parseInt(month) - 1, 1)
    pageTitle = dateObj.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })
    dateDescription = pageTitle
  } else if (year) {
    pageTitle = year
    dateDescription = year
  }

  // Get unique years for archive navigation
  const years = [...new Set(blogPosts.map((post) => new Date(post.date).getFullYear()))]
    .sort((a, b) => b - a)

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
                Archive
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                {pageTitle}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {posts.length} article{posts.length !== 1 ? "s" : ""} from {dateDescription}
              </p>
            </div>

            {/* Year Navigation */}
            <div className="mb-8">
              <h2 className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                <Calendar className="h-4 w-4" />
                Browse by Year
              </h2>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog/archive">
                  <Button
                    variant={!year ? "default" : "outline"}
                    size="sm"
                  >
                    All
                  </Button>
                </Link>
                {years.map((y) => (
                  <Link key={y} href={`/blog/archive/${y}`}>
                    <Button
                      variant={year === String(y) && !month ? "default" : "outline"}
                      size="sm"
                    >
                      {y}
                    </Button>
                  </Link>
                ))}
              </div>
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
