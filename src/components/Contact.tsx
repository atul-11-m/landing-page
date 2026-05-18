import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Mail, Phone, Github, Linkedin, Instagram, Send } from 'lucide-react'

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyCO_tA3Lny7WcLloZ8D2-i5S2EA2HaT7gQfJXk8c64M-g0_zMlEiWsUW3pGTP-cHvs/exec'

type Status = 'idle' | 'loading' | 'success' | 'error'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function Contact() {
  const [ref, inView] = useInView(0.1)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(SCRIPT_URL, { method: 'POST', body: JSON.stringify(form) })
      const data = await res.json()
      if (data.result === 'success') {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else throw new Error()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3"
        >
          Contact
        </motion.p>
        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Get in touch.
        </motion.h2>
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-white/50 text-lg mb-14"
        >
          Feel free to reach out with any questions!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Enter your message here"
                className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-purple-600 text-white font-semibold hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-brand-600/30"
            >
              <Send size={16} />
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-sm text-center">✅ Message sent!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">❌ Something went wrong. Please email me directly.</p>
            )}
          </motion.form>

          {/* Contact info */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {/* Email */}
            <a
              href="mailto:atul.s.marichetty@gmail.com"
              className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-brand-500/40 hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-600/20 flex items-center justify-center text-brand-400 group-hover:bg-brand-600/30 transition-colors">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5">Email</p>
                <p className="text-white/80 text-sm">atul.s.marichetty@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <div className="flex items-center gap-4 glass rounded-2xl p-5">
              <div className="w-11 h-11 rounded-xl bg-brand-600/20 flex items-center justify-center text-brand-400">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5">Phone</p>
                <p className="text-white/80 text-sm">(908) 391-1208</p>
              </div>
            </div>

            {/* Socials */}
            <div className="glass rounded-2xl p-5">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Social</p>
              <div className="flex gap-3">
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
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white hover:bg-brand-600/20 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
