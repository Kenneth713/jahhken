import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { href: "https://github.com", label: "GitHub", icon: Github },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:hello@example.com", label: "Email", icon: Mail },
]

export function HeroSection() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl sm:h-56 sm:w-56 lg:h-64 lg:w-64">
              <Image
                src="/images/profile.png"
                alt="Profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-primary" />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Welcome to my portfolio
            </p>
            <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Web Developer
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              I&apos;m a passionate developer who builds accessible, pixel-perfect digital 
              experiences for the web. My focus lies at the intersection of design and 
              development, creating solutions that not only look great but are built for 
              performance and usability.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button asChild size="lg">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
