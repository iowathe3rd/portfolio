import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { WEBSITE_URL } from '@/lib/constants'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: {
    default: 'Baurzhan Beglerov',
    template: '%s — Baurzhan Beglerov'
  },
  description:  'My name is Baurzhan Beglerov. I create simple and fast web interfaces. I work as a Fullstack Engineer.',
  metadataBase: new URL(WEBSITE_URL),
  openGraph: {
    type: 'website',
    url: WEBSITE_URL,
    siteName: 'Baurzhan Beglerov — Fullstack Engineer',
    title: 'Baurzhan Beglerov',
    description:
      'Fullstack Engineer. I build simple and fast web interfaces using React, Next.js, and modern tooling.',
    images: [
      {
        url: '/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Baurzhan Beglerov Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baurzhan Beglerov — Fullstack Engineer',
    description:
      'I create simple and fast web interfaces. Portfolio, projects, and contact links.',
    images: ['/cover.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

// Using system fonts to avoid external font fetching

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Baurzhan Beglerov',
    url: WEBSITE_URL,
    jobTitle: 'Fullstack Engineer',
    sameAs: [
      'https://github.com/iowathe3rd',
      'https://www.linkedin.com/in/baurzhan-beglerov',
      'mailto:dev.baurzhan@gmail.com',
    ],
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
