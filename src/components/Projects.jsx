import { ExternalLink, Github } from 'lucide-react'

const PROJECTS = [
  {
    category: 'AI Automation',
    title: 'AI Lead Qualification Automation',
    description:
      'Designed an AI-powered lead qualification workflow in n8n that automatically processes incoming enquiries, evaluates lead quality using an AI Agent, scores each lead, stores conversations, instantly alerts the CEO through Telegram for high-value opportunities, and sends personalized acknowledgement emails to every lead. This automation significantly reduces manual lead screening while ensuring no valuable enquiry is missed.',
    tech: [
      'n8n',
      'OpenAI',
      'AI Agent',
      'Telegram Bot API',
      'Gmail',
      'Webhooks',
      'JavaScript',
      'JSON'
    ],
    live: '',
    github: '',
  },

  {
    category: 'Business Automation',
    title: 'Gym Subscription Renewal Automation',
    description:
      'Built an end-to-end membership renewal automation for a fitness centre using n8n, Airtable and Fillout. The workflow automatically identifies members whose subscriptions expire on the current date, sends personalized renewal emails containing a Fillout renewal form, updates membership records inside Airtable after submission, and automatically confirms successful renewals via email.',
    tech: [
      'n8n',
      'Airtable',
      'Fillout',
      'Gmail',
      'Automation',
      'JavaScript'
    ],
    live: '',
    github: '',
  },

  {
    category: 'Workflow Automation',
    title: 'Intelligent Email Routing Automation',
    description:
      'Developed an automated email routing system that monitors incoming company emails, analyses message content using keyword extraction, determines the appropriate business department, and instantly forwards emails to the correct team. Emails that cannot be classified are automatically escalated to the administrator, eliminating manual sorting and improving response time.',
    tech: [
      'n8n',
      'Gmail',
      'Switch Nodes',
      'Automation',
      'JavaScript',
      'JSON'
    ],
    live: '',
    github: '',
  },

  {
    category: 'Weather Application',
    title: 'AtmosPal',
    description:
      'A modern weather dashboard providing real-time weather conditions and five-day forecasts worldwide using external APIs. Features responsive design, location search and clean UI built with React.',
    tech: ['React', 'Tailwind CSS', 'Weather API'],
    live: 'https://atmospal-app.vercel.app/',
    github: 'https://github.com/Eritofunmi01/atmospal',
  },

  {
    category: 'Productivity',
    title: 'TaskFlow',
    description:
      'A smart productivity application for organising daily tasks with reminders and persistent cloud storage powered by Supabase. Built with React and Tailwind CSS.',
    tech: ['React', 'Tailwind CSS', 'Supabase'],
    live: 'https://taskflow123.vercel.app/',
    github: 'https://github.com/Eritofunmi01/Todo-app',
  },

  {
    category: 'E-commerce',
    title: 'GadgetAI',
    description:
      'An AI-inspired gadget store featuring modern product browsing, responsive design, product filtering and dynamic shopping experience backed by Supabase.',
    tech: ['React', 'Tailwind CSS', 'Supabase'],
    live: 'https://gadget-ai-store.vercel.app/',
    github: 'https://github.com/Eritofunmi01/GadgetAi_Store',
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">

        <h2 className="section-title">Featured AI Automation & Software Projects</h2>

        <p className="section-sub">
          A collection of AI automation workflows and software applications built to streamline business operations, automate repetitive tasks and integrate modern APIs.
        </p>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <p
            style={{
              color: 'var(--muted)',
              marginBottom: 16,
              fontSize: '0.95rem',
            }}
          >
            More projects and automation workflows available on GitHub.
          </p>

          <a
            href="https://github.com/Eritofunmi01"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <Github size={15} />
            View GitHub Profile
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
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        transition: 'border-color 0.25s, transform 0.25s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0,255,178,0.35)'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.transform = ''
      }}
    >
      <span
        style={{
          display: 'inline-block',
          alignSelf: 'flex-start',
          padding: '4px 12px',
          borderRadius: 99,
          background: 'rgba(0,255,178,0.1)',
          border: '1px solid rgba(0,255,178,0.25)',
          color: 'var(--accent)',
          fontSize: '0.75rem',
          fontWeight: 600,
        }}
      >
        {p.category}
      </span>

      <h3
        style={{
          fontSize: '1.3rem',
          fontWeight: 800,
          color: 'var(--text)',
        }}
      >
        {p.title}
      </h3>

      <p
        style={{
          color: 'var(--muted)',
          fontSize: '0.93rem',
          lineHeight: 1.7,
          flex: 1,
        }}
      >
        {p.description}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
        }}
      >
        {p.tech.map((t) => (
          <span
            key={t}
            style={{
              padding: '4px 12px',
              borderRadius: 6,
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              color: 'var(--muted)',
              fontSize: '0.78rem',
              fontWeight: 500,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {(p.live || p.github) && (
        <div
          style={{
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            paddingTop: 4,
          }}
        >
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="btn btn-solid btn-sm"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}

          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-sm"
            >
              <Github size={13} />
              Code
            </a>
          )}
        </div>
      )}
    </div>
  )
}