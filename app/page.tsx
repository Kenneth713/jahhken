import { Navbar } from "@/components/common/navbar"
import { Footer } from "@/components/common/footer"
import { HeroSection } from "@/components/features/home/hero-section"
import { AboutSection } from "@/components/features/home/about-section"
import { ProjectsSection } from "@/components/features/home/projects-section"
import { ContactSection } from "@/components/features/home/contact-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
