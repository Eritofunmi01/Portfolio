import { useState } from 'react'
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react'

const automationProjects = [
  {
    category: 'AI Automation',
    title: 'AI Lead Qualification Automation',
    description:
      'An AI-powered lead qualification workflow built with n8n that automatically evaluates incoming enquiries, scores lead quality using AI, stores interactions, alerts the CEO through Telegram for high-value leads, and sends acknowledgement emails to every prospect.',

    tech: [
      'n8n',
      'OpenAI',
      'AI Agent',
      'Telegram',
      'Gmail',
      'Webhooks',
      'JavaScript',
      'JSON'
    ],

    images: [
      '/Img/n8n.png',
      '/Img/tel.png',
      '/Img/link.png'
    ],

    overview:
      'Designed to eliminate manual lead screening by automatically analysing incoming enquiries, assigning lead scores, notifying executives about qualified prospects and ensuring every customer immediately receives a professional response.',

    features: [
      'AI Lead Qualification',
      'Automatic Lead Scoring',
      'Telegram CEO Notifications',
      'Email Auto Response',
      'Conversation Storage',
      'Workflow Automation'
    ]
  },

  {
    category: 'Business Automation',

    title: 'Gym Subscription Renewal Automation',

    description:
      'A complete membership renewal workflow that checks for expiring subscriptions every day, automatically emails members renewal forms, updates Airtable after submission and confirms successful renewal through email.',

    tech: [
      'n8n',
      'Airtable',
      'Fillout',
      'Email Automation',
      'JavaScript'
    ],

    images: ['/Img/Email Automation.png'],

    overview:
      'Developed to remove manual subscription management by automating reminders, membership updates and customer notifications.',

    features: [
      'Daily Subscription Check',
      'Renewal Emails',
      'Fillout Integration',
      'Airtable Update',
      'Confirmation Emails'
    ]
  },

 {
  category: 'AI Recruitment Automation',

  title: 'Enterprise AI Recruitment & Talent Ranking Platform',

  description:
    'Designed and built an AI-driven recruitment platform that evaluates incoming applications, extracts candidate data from CVs, scores candidates against predefined hiring criteria, maintains a live Top 10 leaderboard, and automatically alerts HR teams whenever ranking changes occur.',

  tech: [
    'n8n',
    'OpenAI GPT',
    'Airtable',
    'JavaScript',
    'Email Automation',
    'Workflow Automation'
  ],

  images: ['video/lv_0_20260712153000.mp4'],

  overview:
    'The system replaces manual CV reviews with an automated AI hiring assistant capable of screening, ranking, tracking, and presenting the most qualified candidates in real time.',

  features: [
    'AI CV Analysis',
    'Candidate Qualification Checks',
    'Automated Scoring System',
    'Real-Time Top 10 Ranking',
    'Candidate Change Detection',
    'Automated Dashboard Updates',
    'HR Notification Workflow',
    'Centralized Candidate Database'
  ]
},

  {
    category: 'Workflow Automation',

    title: 'Intelligent Email Routing Automation',

    description:
      'Automatically analyses incoming company emails, identifies the correct department using keyword extraction and routes messages instantly. Emails without a clear department are escalated to administrators.',

    tech: [
      'n8n',
      'Email Automation',
      'Switch Nodes',
      'JavaScript',
      'JSON'
    ],

    images: ['/Img/As2.png'],

    overview:
      'Created to eliminate manual email sorting while improving response times and ensuring every enquiry reaches the correct department.',

    features: [
      'Keyword Detection',
      'Automatic Department Routing',
      'Administrator Escalation',
      'Email Processing'
    ]
  }
]

const webProjects = [
  {
    category: 'Weather App',

    title: 'AtmosPal',

    description:
      'A real-time weather dashboard with current conditions and five-day forecasts using Weather API.',

    tech: ['React', 'Tailwind CSS', 'Weather API'],

    live: 'https://atmospal-app.vercel.app/',

    github: 'https://github.com/Eritofunmi01/atmospal'
  },

  {
    category: 'Productivity',

    title: 'TaskFlow',

    description:
      'A cloud-based task management application backed by Supabase with reminders and persistent storage.',

    tech: ['React', 'Tailwind CSS', 'Supabase'],

    live: 'https://taskflow123.vercel.app/',

    github: 'https://github.com/Eritofunmi01/Todo-app'
  },

  {
    category: 'E-commerce',

    title: 'GadgetAI',

    description:
      'A modern AI-inspired gadget store featuring responsive design, filtering and dynamic product browsing.',

    tech: ['React', 'Tailwind CSS', 'Supabase'],

    live: 'https://gadget-ai-store.vercel.app/',

    github: 'https://github.com/Eritofunmi01/GadgetAi_Store'
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)

  const openProject = (project) => {
    setSelectedProject(project)
    setCurrentImage(0)
  }

  const closeProject = () => {
    setSelectedProject(null)
    setCurrentImage(0)
  }

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    )
  }

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    )
  }

  return (
    <section id="projects" className="section">
      <div className="container">

        <h2 className="section-title">
          Featured Projects
        </h2>

        <p className="section-sub">
          AI automation workflows and software applications built to streamline
          business operations and solve real-world problems.
        </p>

        <h3
          style={{
            marginTop: 50,
            marginBottom: 30,
            fontSize: '1.6rem',
            color: 'var(--accent)',
            fontWeight: 700
          }}
        >
          AI Automation Projects
        </h3>

        <div className="projects-grid">
          {automationProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              automation
              onView={() => openProject(project)}
            />
          ))}
        </div>

        <h3
          style={{
            marginTop: 70,
            marginBottom: 30,
            fontSize: '1.6rem',
            color: 'var(--accent)',
            fontWeight: 700
          }}
        >
          Web Development Projects
        </h3>

        <div className="projects-grid">
          {webProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
                <div style={{ textAlign: 'center', marginTop: 50 }}>
          <p
            style={{
              color: 'var(--muted)',
              marginBottom: 16,
              fontSize: '.95rem'
            }}
          >
            More projects available on GitHub
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

        {selectedProject && (
          <div
            onClick={closeProject}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,.8)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 999,
              padding: 20
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: 900,
                background: 'var(--bg2)',
                borderRadius: 20,
                border: '1px solid var(--border)',
                overflow: 'hidden',
                maxHeight: '90vh',
                overflowY: 'auto'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 20
                }}
              >
                <div>
                  <span
                    style={{
                      color: 'var(--accent)',
                      fontSize: '.8rem',
                      fontWeight: 600
                    }}
                  >
                    {selectedProject.category}
                  </span>

                  <h2 style={{ marginTop: 8 }}>
                    {selectedProject.title}
                  </h2>
                </div>

                <button
                  onClick={closeProject}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'white'
                  }}
                >
                  <X size={28} />
                </button>
              </div>

              <div
                style={{
                  position: 'relative',
                  padding: 20
                }}
              >
                <img
                  src={selectedProject.images[currentImage]}
                  alt=""
                  style={{
                    width: '100%',
                    borderRadius: 12,
                    border: '1px solid var(--border)'
                  }}
                />

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={previousImage}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: 30,
                        transform: 'translateY(-50%)',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '50%',
                        width: 45,
                        height: 45,
                        background: 'rgba(0,0,0,.65)',
                        color: 'white'
                      }}
                    >
                      <ChevronLeft />
                    </button>

                    <button
                      onClick={nextImage}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        right: 30,
                        transform: 'translateY(-50%)',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '50%',
                        width: 45,
                        height: 45,
                        background: 'rgba(0,0,0,.65)',
                        color: 'white'
                      }}
                    >
                      <ChevronRight />
                    </button>
                  </>
                )}
              </div>

              <div
                style={{
                  padding: '0 24px 24px'
                }}
              >
                <h3>Project Overview</h3>

                <p
                  style={{
                    color: 'var(--muted)',
                    lineHeight: 1.8
                  }}
                >
                  {selectedProject.overview}
                </p>

                <h3 style={{ marginTop: 30 }}>
                  Technologies Used
                </h3>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 10,
                    marginTop: 12
                  }}
                >
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '6px 14px',
                        borderRadius: 6,
                        border: '1px solid var(--border)',
                        background: 'var(--bg3)',
                        color: 'var(--muted)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 style={{ marginTop: 30 }}>
                  Key Features
                </h3>

                <ul
                  style={{
                    marginTop: 12,
                    color: 'var(--muted)',
                    lineHeight: 2
                  }}
                >
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, automation, onView }) {
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        transition: '.3s'
      }}
    >
      <span
        style={{
          display: 'inline-block',
          alignSelf: 'flex-start',
          padding: '4px 12px',
          borderRadius: 999,
          background: 'rgba(0,255,178,.08)',
          border: '1px solid rgba(0,255,178,.25)',
          color: 'var(--accent)',
          fontSize: '.75rem',
          fontWeight: 600
        }}
      >
        {project.category}
      </span>

      <h3
        style={{
          fontSize: '1.35rem',
          fontWeight: 700
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          color: 'var(--muted)',
          lineHeight: 1.8,
          flex: 1
        }}
      >
        {project.description}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8
        }}
      >
        {project.tech.map((tech) => (
          <span
            key={tech}
            style={{
              padding: '4px 12px',
              borderRadius: 6,
              border: '1px solid var(--border)',
              background: 'var(--bg3)',
              fontSize: '.78rem'
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          gap: 10,
          marginTop: 10,
          flexWrap: 'wrap'
        }}
      >
        {automation ? (
          <button
            onClick={onView}
            className="btn btn-solid btn-sm"
          >
            <ExternalLink size={14} />
            View Workflow
          </button>
        ) : (
          <>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn btn-solid btn-sm"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-sm"
            >
              <Github size={14} />
              Code
            </a>
          </>
        )}
      </div>
    </div>
  )
}