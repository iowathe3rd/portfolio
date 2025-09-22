import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = WEBSITE_URL.replace(/\/$/, '')
  const staticRoutes: MetadataRoute.Sitemap = (
    ['', '/blog'].map((route) => ({
      url: `${base}${route || '/'}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  )

  // Add known blog articles
  const blogRoutes: MetadataRoute.Sitemap = [
    '/blog/example-mdx-metadata',
    '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  })) as MetadataRoute.Sitemap

  return [...staticRoutes, ...blogRoutes]
}
