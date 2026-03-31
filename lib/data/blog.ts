export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  tags: string[]
  readTime: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 16",
    excerpt: "Learn how to build modern web applications with Next.js 16 and its new features.",
    content: `
Next.js 16 brings exciting new features to the table. In this post, we'll explore the key improvements and how to get started.

## What's New in Next.js 16

Next.js 16 introduces several improvements including:

- **Turbopack as default bundler** - Faster builds and hot module replacement
- **React Compiler Support** - Stable support for the React Compiler
- **Improved Caching APIs** - New revalidateTag, updateTag, and refresh APIs
- **Cache Components** - New "use cache" directive for explicit caching

## Getting Started

To create a new Next.js 16 project, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

This will set up a new project with all the latest features enabled by default.

## Conclusion

Next.js 16 represents a significant step forward in web development. The improvements to caching and bundling make it even easier to build fast, scalable applications.
    `,
    date: "2026-03-15",
    category: "Web Development",
    tags: ["Next.js", "React", "JavaScript"],
    readTime: "5 min read",
    image: "/images/blog/nextjs.jpg",
  },
  {
    slug: "mastering-typescript",
    title: "Mastering TypeScript for React Developers",
    excerpt: "A comprehensive guide to using TypeScript effectively in your React projects.",
    content: `
TypeScript has become an essential tool for React developers. Let's dive into best practices and patterns.

## Why TypeScript?

TypeScript provides:

- **Type Safety** - Catch errors at compile time
- **Better IDE Support** - Improved autocomplete and refactoring
- **Self-Documenting Code** - Types serve as documentation

## Essential Patterns

### Component Props

\`\`\`typescript
interface ButtonProps {
  variant: 'primary' | 'secondary'
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ variant, children, onClick }: ButtonProps) {
  return (
    <button className={variant} onClick={onClick}>
      {children}
    </button>
  )
}
\`\`\`

### Generic Components

\`\`\`typescript
interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

export function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map(renderItem)}</ul>
}
\`\`\`

## Conclusion

Mastering TypeScript will make you a more effective React developer. Start with these patterns and build from there.
    `,
    date: "2026-03-10",
    category: "TypeScript",
    tags: ["TypeScript", "React", "Programming"],
    readTime: "8 min read",
    image: "/images/blog/typescript.jpg",
  },
  {
    slug: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices in 2026",
    excerpt: "Discover the best practices for using Tailwind CSS in modern web projects.",
    content: `
Tailwind CSS has revolutionized how we style web applications. Here are the best practices for 2026.

## Organization Strategies

### Component-Based Styling

Keep your Tailwind classes organized by grouping related utilities:

\`\`\`html
<button class="
  /* Layout */
  flex items-center justify-center
  /* Sizing */
  px-4 py-2
  /* Colors */
  bg-primary text-primary-foreground
  /* Effects */
  rounded-md shadow-sm
  /* Interactions */
  hover:bg-primary/90 transition-colors
">
  Click me
</button>
\`\`\`

### Custom Design Tokens

Use CSS variables for consistent theming:

\`\`\`css
:root {
  --primary: oklch(0.45 0.03 250);
  --primary-foreground: oklch(0.98 0 0);
}
\`\`\`

## Performance Tips

- Use JIT mode (default in Tailwind v4)
- Purge unused styles automatically
- Avoid arbitrary values when possible

## Conclusion

Following these practices will help you write maintainable and performant Tailwind CSS.
    `,
    date: "2026-03-05",
    category: "CSS",
    tags: ["Tailwind CSS", "CSS", "Design"],
    readTime: "6 min read",
    image: "/images/blog/css-grid.jpg",
  },
  {
    slug: "building-accessible-websites",
    title: "Building Accessible Websites: A Complete Guide",
    excerpt: "Learn how to create websites that are accessible to everyone.",
    content: `
Web accessibility is not just a nice-to-have; it's essential for reaching all users.

## Why Accessibility Matters

- **Inclusivity** - Everyone deserves access to the web
- **Legal Requirements** - Many regions have accessibility laws
- **Better UX** - Accessible sites are often better for everyone

## Key Principles

### Semantic HTML

Use the right HTML elements for the job:

\`\`\`html
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
\`\`\`

### ARIA Labels

When semantic HTML isn't enough, use ARIA:

\`\`\`html
<button aria-label="Close dialog">
  <svg>...</svg>
</button>
\`\`\`

### Focus Management

Ensure keyboard users can navigate your site:

\`\`\`css
:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
\`\`\`

## Testing

Use tools like:

- axe DevTools
- WAVE
- Screen readers (NVDA, VoiceOver)

## Conclusion

Building accessible websites is everyone's responsibility. Start with these fundamentals and continue learning.
    `,
    date: "2026-02-28",
    category: "Accessibility",
    tags: ["Accessibility", "HTML", "UX"],
    readTime: "7 min read",
    image: "/images/blog/git.jpg",
  },
  {
    slug: "react-server-components",
    title: "Understanding React Server Components",
    excerpt: "Dive deep into React Server Components and how they change web development.",
    content: `
React Server Components represent a paradigm shift in how we build React applications.

## What Are Server Components?

Server Components run only on the server, allowing you to:

- Access databases directly
- Keep sensitive logic on the server
- Reduce client-side JavaScript

## How They Work

\`\`\`tsx
// This runs on the server
async function BlogPosts() {
  const posts = await db.posts.findMany()
  
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
\`\`\`

## Client vs Server

Use "use client" when you need:

- Event handlers
- useState, useEffect
- Browser APIs

Keep on server when you need:

- Data fetching
- Database access
- Sensitive operations

## Conclusion

Server Components offer a powerful new way to build React apps. Embrace the mental model shift for better performance.
    `,
    date: "2026-02-20",
    category: "React",
    tags: ["React", "Server Components", "Next.js"],
    readTime: "6 min read",
    image: "/images/blog/react-hooks.jpg",
  },
]

export const categories = [...new Set(blogPosts.map((post) => post.category))]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  )
}

export function getBlogPostsByDate(year?: string, month?: string, day?: string): BlogPost[] {
  return blogPosts.filter((post) => {
    const postDate = new Date(post.date)
    
    if (year && postDate.getFullYear() !== parseInt(year)) return false
    if (month && postDate.getMonth() + 1 !== parseInt(month)) return false
    if (day && postDate.getDate() !== parseInt(day)) return false
    
    return true
  })
}
