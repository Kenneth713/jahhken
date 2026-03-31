export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  category: string
  github: string
  demo: string
  featured: boolean
  image: string
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with cart management, payment integration, and admin dashboard.",
    longDescription: "Built a comprehensive e-commerce platform featuring user authentication, product catalog management, shopping cart functionality, Stripe payment integration, and a full admin dashboard for managing orders and inventory.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    category: "Full Stack",
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    image: "/images/projects/ecommerce.jpg",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    longDescription: "Developed a real-time task management application enabling teams to collaborate efficiently. Features include drag-and-drop task organization, real-time updates via WebSockets, team workspaces, and detailed analytics.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    category: "Full Stack",
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    image: "/images/projects/task-manager.jpg",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    longDescription: "Created a personal portfolio website showcasing projects and blog posts. Built with Next.js App Router, featuring dynamic routing, dark mode support, and optimized performance.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    image: "/images/projects/portfolio.jpg",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts and interactive maps.",
    longDescription: "Built an interactive weather dashboard that provides real-time weather data, 7-day forecasts, and interactive maps. Features include location search, favorite locations, and weather alerts.",
    tags: ["React", "TypeScript", "OpenWeather API", "Mapbox"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
    image: "/images/projects/weather-app.jpg",
  },
  {
    id: "blog-cms",
    title: "Blog CMS",
    description: "A headless content management system for managing blog posts and media.",
    longDescription: "Developed a headless CMS specifically designed for bloggers. Features include a rich text editor, media management, SEO optimization tools, and a GraphQL API for content delivery.",
    tags: ["Node.js", "GraphQL", "PostgreSQL", "AWS S3"],
    category: "Backend",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
    image: "/images/projects/chat-app.jpg",
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description: "A mobile-first fitness tracking app with workout plans and progress analytics.",
    longDescription: "Created a comprehensive fitness tracking application with features including workout logging, custom exercise plans, progress charts, and integration with health APIs for automatic data sync.",
    tags: ["React Native", "TypeScript", "Firebase", "Health APIs"],
    category: "Mobile",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
    image: "/images/projects/fitness-tracker.jpg",
  },
]

export const projectCategories = [...new Set(projects.map((p) => p.category))]

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(
    (project) => project.category.toLowerCase() === category.toLowerCase()
  )
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}
