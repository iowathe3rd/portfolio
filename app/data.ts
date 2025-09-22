type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    id: 'portfolio-site',
    name: 'Personal Portfolio (Next.js 15)',
    description:
      'A fast, accessible personal site built with the Next.js App Router, animations, and dark mode.',
    link: '/',
    video:
      'https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-4581/1080p.mp4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'fs-engineer',
    company: 'Independent',
    title: 'Fullstack Engineer',
    start: '2022',
    end: 'Present',
    link: '/',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    uid: 'example-mdx-metadata',
    title: 'Example MDX Metadata',
    description: 'Template post demonstrating MDX frontmatter and layout.',
    link: '/blog/example-mdx-metadata',
  },
  {
    uid: 'exploring-the-intersection-of-design-ai-and-design-engineering',
    title:
      'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI augments design workflows and engineering.',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', link: 'https://github.com/iowathe3rd' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/baurzhan-beglerov' },
]

export const EMAIL = 'dev.baurzhan@gmail.com'
