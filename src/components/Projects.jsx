import { ExternalLink, Github } from 'lucide-react'

// ── Add / edit your projects here ────────────────────────────
const PROJECTS = [
  {
    category:    'Weather App',
    title:       'AtmosPal',
    description: 'A real-time weather dashboard with current conditions and a 5-day forecast for any city worldwide. Features a clean search UI, live API data, and fully responsive layout.',
    tech:        ['React', 'Tailwind CSS', 'WeatherAPI'],
    live:        'https://atmospal-app.vercel.app/',
    github:      'https://github.com/Eritofunmi01/atmospal',
  },
  {
    category:    'Productivity',
    title:       'Taskflow',
    description: 'A smart task manager with reminders and real-time sync. Think notepad meets productivity app — clean UI backed by Supabase for persistent data storage.',
    tech:        ['React', 'Tailwind CSS', 'Supabase'],
    live:        'https://taskflow123.vercel.app/',
    github:      'https://github.com/Eritofunmi01/Todo-app',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">

        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub">
          A showcase of my latest work in web and mobile development
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {PROJECTS.map(p => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{ color: 'var(--muted)', marginBottom: 16, fontSize: '0.95rem' }}>
            More projects on the way — follow my progress
          </p>
          <a
            href="https://github.com/Eritofunmi01"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <Github size={16} /> View GitHub Profile
          </a>
        </div>

      </div>
    </section>
  )
}

function ProjectCard({ project: p }) {
  return (
    <div
      className="card"
      style={{ display: 'flex', flexDirection: 'column', gap: 16, transition: 'border-color 0.25s, transform 0.25s' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(0,255,178,0.3)'
        e.currentTarget.style.transform   = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.transform   = ''
      }}
    >
      {/* Category badge */}
      <div>
        <span style={{
          display: 'inline-block',
          padding: '4px 12px',
          borderRadius: 99,
          background: 'rgba(0,255,178,0.1)',
          border: '1px solid rgba(0,255,178,0.25)',
          color: 'var(--accent)',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.04em',
        }}>
          {p.category}
        </span>
      </div>

      {/* Title */}
      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text)' }}>{p.title}</h3>

      {/* Description */}
      <p style={{ color: 'var(--muted)', fontSize: '0.93rem', lineHeight: 1.7, flex: 1 }}>{p.description}</p>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {p.tech.map(t => (
          <span key={t} style={{
            padding: '4px 12px',
            borderRadius: 6,
            background: 'var(--bg3)',
            border: '1px solid var(--border)',
            color: 'var(--muted)',
            fontSize: '0.78rem',
            fontWeight: 500,
          }}>{t}</span>
        ))}
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: 10, paddingTop: 4 }}>
        {p.live && (
          <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-solid btn-sm">
            <ExternalLink size={13} /> Live Demo
          </a>
        )}
        {p.github && (
          <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
            <Github size={13} /> Code
          </a>
        )}
      </div>
    </div>
  )
}