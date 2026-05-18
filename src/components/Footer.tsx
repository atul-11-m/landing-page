export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/25 text-sm">
        <p>© {new Date().getFullYear()} Atul Marichetty</p>
        <p>
          Built with React · TypeScript · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  )
}
