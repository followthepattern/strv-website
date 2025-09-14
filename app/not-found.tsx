import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <header className="">
        <h1 className="text-center pt-10 text-3xl sm:text-3xl md:text-4xl 2xl:text-5xl font-medium">Page Not Found</h1>
        <Link href="/" className="block mx-auto max-w-sm sm:max-w-none text-center pt-10 text-md sm:text-lg md:text-xl 2xl:text-xl underline underline-offset-2">Go back to home page</Link>
      </header>
      <footer className="row-start-3 pt-10 flex flex-wrap items-center justify-center">
        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} FOLLOWTHEPATTERN KFT, Built for champions.</p>
      </footer>
    </div>
  )
}