import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="space-y-4 py-24 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <p>
        <Link href="/" className="underline">
          Go back home
        </Link>
      </p>
    </main>
  )
}
