import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { GraduationCap, Code2, Dumbbell, Music } from 'lucide-react'

const stats = [
  { value: 'CS + Math', label: 'Double Major' },
  { value: 'SAS', label: 'School of Arts & Sciences' },
  { value: 'Rutgers', label: 'University' },
]

const interests = [
  { icon: Code2, label: 'Coding' },
  { icon: GraduationCap, label: 'Learning' },
  { icon: Dumbbell, label: 'Gym & Basketball' },
  { icon: Music, label: 'Music' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function About() {
  const [ref, inView] = useInView(0.15)

  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3"
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Passionate about building things that matter.
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-white/60 text-lg leading-relaxed mb-8"
            >
              Hello! I'm a Computer Science and Mathematics student at{' '}
              <span className="text-white font-medium">Rutgers University</span> in the
              School of Arts and Sciences. I love solving challenging problems through
              code and building projects that combine mathematics with machine learning.
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-white/60 text-lg leading-relaxed"
            >
              Outside of academics, you'll find me playing basketball, hitting the gym,
              listening to music, or hanging out with friends.
            </motion.p>
          </div>

          {/* Right: photo + stats */}
          <div className="space-y-8">
            {/* Headshot */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-brand-500 to-purple-600 rounded-2xl blur opacity-30" />
              <img
                src="/Atul_Headshot.JPG"
                alt="Atul Marichetty"
                className="relative w-full max-w-xs mx-auto rounded-2xl object-cover aspect-[3/4] shadow-2xl"
              />
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-3 gap-3"
            >
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-xl p-4 text-center">
                  <div className="text-white font-bold text-base mb-1">{s.value}</div>
                  <div className="text-white/40 text-xs leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Interests */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 gap-3"
            >
              {interests.map(({ icon: Icon, label }) => (
                <div key={label} className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                  <Icon size={16} className="text-brand-400 flex-shrink-0" />
                  <span className="text-white/70 text-sm">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
