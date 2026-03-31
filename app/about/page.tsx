import Image from "next/image"
import { Navbar } from "@/components/common/navbar"
import { Footer } from "@/components/common/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "About | Portfolio",
  description: "Learn more about me, my background, and my experience.",
}

const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  "Backend": ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  "Tools": ["Git", "VS Code", "Figma", "Vercel", "Docker"],
}

const experience = [
  {
    title: "Web Developer",
    company: "Freelance",
    period: "2024 - Present",
    description: "Building custom web applications for clients using modern technologies.",
  },
  {
    title: "Frontend Developer Intern",
    company: "Tech Company",
    period: "2023 - 2024",
    description: "Developed user interfaces and contributed to design system improvements.",
  },
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University",
    period: "2020 - 2024",
    description: "Focused on web development, software engineering, and user experience design.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            {/* Header with Profile */}
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
              <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-2xl border-4 border-primary/20 shadow-xl">
                <Image
                  src="/images/profile.png"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-sm font-medium uppercase tracking-widest text-primary">
                  About Me
                </p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                  Hello, I&apos;m a Web Developer
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  I&apos;m passionate about creating beautiful, functional, and user-centered 
                  digital experiences. With a background in computer science and a love for 
                  design, I bring ideas to life through clean, efficient code.
                </p>
              </div>
            </div>

            {/* Bio Section */}
            <div className="mt-16 space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                My journey in web development started during my university years when I 
                discovered the power of turning ideas into interactive experiences. Since then, 
                I&apos;ve been continuously learning and improving my skills to stay current with 
                the ever-evolving web landscape.
              </p>
              <p className="leading-relaxed">
                I believe in writing clean, maintainable code and creating interfaces that are 
                both aesthetically pleasing and highly functional. I&apos;m particularly interested 
                in performance optimization, accessibility, and creating seamless user experiences.
              </p>
              <p className="leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing 
                to open source projects, or learning about design systems and user experience best 
                practices.
              </p>
            </div>

            {/* Skills Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold tracking-tight">Skills & Technologies</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {Object.entries(skills).map(([category, items]) => (
                  <Card key={category}>
                    <CardHeader>
                      <CardTitle className="text-lg">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
              <div className="mt-8 space-y-6">
                {experience.map((job, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <Badge variant="outline">{job.period}</Badge>
                      </div>
                      <p className="text-sm text-primary">{job.company}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{job.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold tracking-tight">Education</h2>
              <div className="mt-8 space-y-6">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <CardTitle className="text-lg">{edu.degree}</CardTitle>
                        <Badge variant="outline">{edu.period}</Badge>
                      </div>
                      <p className="text-sm text-primary">{edu.school}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
