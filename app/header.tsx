'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Baurzhan Beglerov
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Fullstack Engineer
        </TextEffect>
      </div>
      <nav className="flex items-center gap-3">
        <a
          href="https://github.com/iowathe3rd"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/baurzhan-beglerov"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </nav>
    </header>
  )
}
