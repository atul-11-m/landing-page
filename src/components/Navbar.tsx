import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/90 backdrop-blur-md border-b border-white/10 py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="w-10 h-10 rounded-full border border-brand-500/50 flex items-center justify-center font-display text-base font-bold text-gradient hover:border-brand-400 hover:shadow-[0_0_12px_rgba(99,102,241,0.4)] transition-all duration-200">AM</a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Atul_Marichetty.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-full border border-brand-500 text-brand-400 hover:bg-brand-500 hover:text-white transition-all duration-200"
          >
            Resume
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-800/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/70 hover:text-white transition-colors py-1"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/Atul_Marichetty.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 hover:text-brand-300 transition-colors py-1"
              >
                Resume ↗
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
