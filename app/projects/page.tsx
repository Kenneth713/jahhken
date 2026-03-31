import { Navbar } from "@/components/common/navbar"
import { Footer } from "@/components/common/footer"
import { ProjectFilter } from "@/components/features/projects/project-filter"
import { projects, projectCategories } from "@/lib/data/projects"

export const metadata = {
  title: "Projects | Portfolio",
  description: "Explore my portfolio of web development projects.",
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            {/* Header */}
            <div className="mb-12">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Portfolio
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                My Projects
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                A collection of projects I&apos;ve worked on, from full-stack applications to 
                frontend experiments and everything in between.
              </p>
            </div>

            {/* Projects with Filter */}
            <ProjectFilter projects={projects} categories={projectCategories} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
