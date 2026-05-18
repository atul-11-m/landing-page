import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ExternalLink, Github, Youtube } from 'lucide-react'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  links: { label: string; href: string; icon: typeof ExternalLink }[]
}

const projects: Project[] = [
  {
    title: 'Market Anomaly Detection',
    description:
      'Designed a machine learning pipeline to predict potential market anomalies with preprocessing, feature engineering, and model selection — achieving a final predictive accuracy of 90% while interning at Headstarter.',
    image: '/marketImage.webp',
    tags: ['Python', 'Machine Learning', 'Feature Engineering', 'Scikit-learn'],
    links: [
      { label: 'Video Walkthrough', href: 'https://youtu.be/nVMLCpCdh2A', icon: Youtube },
      { label: 'GitHub Repo', href: 'https://github.com/atul-11-m/Market-Anomaly-Detection-Project', icon: Github },
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function Projects() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="projects" className="py-28 px-6 bg-dark-800/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3"
        >
          Projects
        </motion.p>
        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="font-display text-4xl md:text-5xl font-bold text-white mb-16"
        >
          Things I've built.
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden glass glow hover:glow transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video md:aspect-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-800/80 hidden md:block" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-white/60 leading-relaxed mb-6">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-brand-600/20 text-brand-300 border border-brand-600/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {project.links.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/70 hover:text-white hover:border-brand-500/50 transition-all duration-200 text-sm font-medium"
                    >
                      <Icon size={14} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More on GitHub */}
        <motion.div
          custom={projects.length + 2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/atul-11-m"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200 text-sm"
          >
            <Github size={16} />
            See more on GitHub
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
