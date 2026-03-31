import { Navbar } from "@/components/common/navbar"
import { Footer } from "@/components/common/footer"
import { ContactForm } from "@/components/features/contact/contact-form"
import { Mail, MapPin, Github, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch with me for projects, collaborations, or just to say hello.",
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Philippines",
    href: null,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/username",
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/username",
    href: "https://linkedin.com",
  },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            {/* Header */}
            <div className="mb-12 text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Contact
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                Get in Touch
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Have a project in mind or want to collaborate? I&apos;d love to hear from you. 
                Fill out the form below or reach out through any of the channels listed.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <Card>
                  <CardContent className="p-6 sm:p-8">
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Contact Information</h2>
                  <p className="text-muted-foreground">
                    Feel free to reach out through any of these channels. I typically 
                    respond within 24-48 hours.
                  </p>
                  
                  <div className="mt-6 space-y-4">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-start gap-4">
                        <div className="rounded-lg bg-accent/10 p-3">
                          <info.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground transition-colors hover:text-accent"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
