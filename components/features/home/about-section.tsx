import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "HTML/CSS",
  "Git",
]

export function AboutSection() {
  return (
    <section className="border-t border-border/40 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Section Header */}
          <div className="lg:w-1/3">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              About Me
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Background
            </h2>
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I&apos;m a web developer with a passion for creating beautiful, functional, 
                and user-centered digital experiences. With a background in computer science 
                and years of hands-on experience, I bring ideas to life through code.
              </p>
              <p className="leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with 
                the latest technologies and best practices. When I&apos;m not coding, you can 
                find me exploring new technologies, contributing to open source, or learning 
                something new.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-foreground">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Link to full about page */}
            <Link
              href="/about"
              className="mt-8 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Learn more about me
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
