import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-700/10 rounded-full blur-3xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-white/60 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Open to opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-6xl md:text-8xl font-bold mb-4 leading-tight"
        >
          Atul{' '}
          <span className="text-gradient">Marichetty</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/50 font-light tracking-widest uppercase mb-10"
        >
          CS &amp; Mathematics · Rutgers University
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#contact"
            className="px-7 py-3 rounded-full bg-gradient-to-r from-brand-500 to-purple-600 text-white font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-brand-600/30"
          >
            Get in touch
          </a>
          <a
            href="/Atul_Marichetty.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full glass text-white/80 hover:text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 font-medium"
          >
            View Resume ↗
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: Github, href: 'https://github.com/atul-11-m', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/atul-marichetty-0a6636320/', label: 'LinkedIn' },
            { icon: Instagram, href: 'https://www.instagram.com/atul.marichetty/', label: 'Instagram' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:border-brand-500/50 hover:-translate-y-1 transition-all duration-200"
            >
              <Icon size={17} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
