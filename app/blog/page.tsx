'use client'
import Link from 'next/link'
import { motion } from 'motion/react'

const posts = [
  {
    slug: 'example-mdx-metadata',
    title: 'Example MDX Metadata',
    description: 'Template post demonstrating MDX frontmatter and layout.',
  },
  {
    slug: 'exploring-the-intersection-of-design-ai-and-design-engineering',
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'Notes on how AI augments design workflows and engineering.',
  },
]

export default function BlogIndex() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="space-y-6"
    >
      <h1 className="text-xl font-medium">Blog</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Articles, notes, and experiments. More coming soon.
      </p>
      <ul className="divide-y divide-zinc-100 rounded-xl border border-zinc-100 dark:divide-zinc-800 dark:border-zinc-800">
        {posts.map((p) => (
          <li key={p.slug} className="p-4">
            <Link className="group block" href={`/blog/${p.slug}`}>
              <h3 className="font-medium group-hover:underline dark:text-zinc-100">
                {p.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </motion.main>
  )
}
