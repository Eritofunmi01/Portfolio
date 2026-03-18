import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Cloud, CheckSquare } from 'lucide-react'

function Reveal({ children, delay = 0, className = '' }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// ─── Edit your projects here ──────────────────────────────────────────────────
// Add more objects to this array when you build new projects
const PROJECTS = [
  {
    icon:        <Cloud size={26} />,
    title:       'AtmosPal',
    subtitle:    'Weather Forecast Dashboard',
    description: 'A real-time weather dashboard that shows current conditions and a 5-day forecast for any city worldwide. Clean UI with search, live data, and a responsive layout.',
    tech:        ['React', 'Tailwind CSS', 'WeatherAPI'],
    live:        'https://atmospal-app.vercel.app/',
    github:      'https://github.com/Eritofunmi01/atmospal',
    color:       '#60EFFF',
  },
  {
    icon:        <CheckSquare size={26} />,
    title:       'Taskflow',
    subtitle:    'Smart Task Manager',
    description: 'A productivity app with task management, reminders, and a clean notepad-style UI. Backed by Supabase for real-time sync and persistent data storage.',
    tech:        ['React', 'Tailwind CSS', 'Supabase'],
    live:        'https://taskflow123.vercel.app/',
    github:      'https://github.com/Eritofunmi01/Todo-app',
    color:       '#00FFB2',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="section-wrap">

        {/* ── Heading ── */}
        <Reveal>
          <p className="section-label mb-3">What I've built</p>
          <h2
            className="font-display leading-none mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800 }}
          >
            MY <span className="gradient-text">PROJECTS</span>
          </h2>
          <p className="text-dim mb-16 max-w-md" style={{ fontSize: '0.96rem' }}>
            Two live projects so far — more always in progress.
            Every build is a step forward.
          </p>
        </Reveal>

        {/* ── Project cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.12}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* ── GitHub CTA ── */}
        <Reveal delay={0.28}>
          <div className="mt-5 glass-card p-5 flex items-center justify-between flex-wrap gap-4">
            <p className="font-mono text-[0.78rem] text-dim">
              🚧 More projects in progress — watch this space
            </p>
            <a
              href="https://github.com/Eritofunmi01"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost text-xs px-4 py-2"
            >
              <Github size={13} /> View GitHub
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}

// ─── Single project card (extracted for readability) ──────────────────────────
function ProjectCard({ project }) {
  const handleEnter = e => {
    e.currentTarget.style.borderColor = `${project.color}35`
    e.currentTarget.style.boxShadow   = `0 8px 48px ${project.color}0D`
  }
  const handleLeave = e => {
    e.currentTarget.style.borderColor = ''
    e.currentTarget.style.boxShadow   = ''
  }

  return (
    <div
      className="glass-card p-7 flex flex-col gap-5 h-full transition-all duration-300"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Icon + Title */}
      <div className="flex items-start gap-4">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
          style={{
            color:      project.color,
            background: `${project.color}12`,
            border:     `1px solid ${project.color}28`,
          }}
        >
          {project.icon}
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-white">
            {project.title}
          </h3>
          <p
            className="font-mono text-[0.68rem] tracking-wider uppercase mt-0.5"
            style={{ color: project.color }}
          >
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-dim leading-relaxed flex-1" style={{ fontSize: '0.92rem' }}>
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-md font-mono text-[0.68rem]"
            style={{
              background: `${project.color}0D`,
              border:     `1px solid ${project.color}22`,
              color:       project.color,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-1">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="btn-primary text-xs px-4 py-2"
          style={{ background: project.color }}
        >
          Live Demo <ExternalLink size={12} />
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost text-xs px-4 py-2"
        >
          <Github size={13} /> GitHub
        </a>
      </div>
    </div>
  )
}