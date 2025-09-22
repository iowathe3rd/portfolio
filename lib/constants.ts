// Public site URL used for metadata, robots, and sitemaps.
// Prefer NEXT_PUBLIC_SITE_URL, fallback to VERCEL_URL, then localhost.
export const WEBSITE_URL = (process.env.NEXT_PUBLIC_SITE_URL
	|| (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '')
	|| 'http://localhost:3000') as string

