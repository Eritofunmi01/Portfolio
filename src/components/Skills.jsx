import { useEffect, useRef, useState } from 'react'

const SKILL_BARS = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML / CSS',   pct: 90 },
      { name: 'JavaScript',   pct: 78 },
      { name: 'React',        pct: 75 },
      { name: 'Tailwind CSS', pct: 82 },
    ],
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'Node.js / Express', pct: 65 },
      { name: 'PostgreSQL',        pct: 60 },
      { name: 'Supabase',          pct: 68 },
      { name: 'REST APIs',         pct: 70 },
    ],
  },
  {
    category: 'Mobile Development',
    skills: [
      { name: 'React Native', pct: 62 },
      { name: 'Expo',         pct: 65 },
    ],
  },
  {
    category: 'Tools & Workflow',
    skills: [
      { name: 'Git / GitHub', pct: 78 },
      { name: 'Vercel',       pct: 80 },
      { name: 'VS Code',      pct: 90 },
    ],
  },
]

const TECH_TAGS = [
  'React', 'React Native', 'Expo', 'JavaScript', 'HTML5', 'CSS3',
  'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Supabase',
  'Git', 'GitHub', 'Vercel', 'REST APIs',
]

function SkillBar({ name, pct, animate }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ color: 'var(--text)', fontSize: '0.92rem', fontWeight: 500 }}>{name}</span>
        <span style={{
          color: 'var(--accent)', fontSize: '0.82rem', fontWeight: 600,
          fontFamily: "'JetBrains Mono', monospace",
        }}>{pct}%</span>
      </div>
      <div style={{ background: 'var(--bg3)', borderRadius: 99, height: 6, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          background: 'var(--accent)',
          borderRadius: 99,
          width: animate ? `${pct}%` : '0%',
          transition: 'width 1s ease',
        }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref   = useRef(null)
  const [anim, setAnim] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { setAnim(true); observer.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section" ref={ref}
      style={{ background: 'var(--bg2)' }}>
      <div className="container">

        <h2 className="section-title">Skills &amp; Expertise</h2>
        <p className="section-sub">
          A comprehensive toolkit for building modern web and mobile applications
        </p>

        {/* Skill bar cards */}
        <div className="skills-grid">
          {SKILL_BARS.map(group => (
            <div key={group.category} className="card">
              <h3 style={{
                color: 'var(--text)', fontWeight: 700,
                fontSize: '0.98rem', marginBottom: 20,
                paddingBottom: 12, borderBottom: '1px solid var(--border)',
              }}>
                {group.category}
              </h3>
              {group.skills.map(s => (
                <SkillBar key={s.name} name={s.name} pct={s.pct} animate={anim} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech tag cloud */}
        <div style={{ textAlign: 'center' }}>
          <h3 style={{
            color: 'var(--text)', fontWeight: 700,
            fontSize: '1.1rem', marginBottom: 22,
          }}>
            Technologies I Work With
          </h3>
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            gap: 10, justifyContent: 'center',
          }}>
            {TECH_TAGS.map(tag => (
              <span key={tag} style={{
                padding: '8px 18px',
                borderRadius: 99,
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                fontSize: '0.88rem',
                fontWeight: 500,
                cursor: 'default',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}