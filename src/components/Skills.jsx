import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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

// ─── Edit skill groups here — add / remove / rename freely ────────────────────
const SKILL_GROUPS = [
  {
    category: 'Frontend',
    color:    '#00FFB2',
    skills:   ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    category: 'Mobile',
    color:    '#60EFFF',
    skills:   ['React Native', 'Expo'],
  },
  {
    category: 'Backend',
    color:    '#A78BFA',
    skills:   ['Node.js', 'Express', 'PostgreSQL', 'Supabase'],
  },
  {
    category: 'Tools & Platforms',
    color:    '#FB923C',
    skills:   ['Git', 'GitHub', 'VS Code', 'Vercel'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-wrap">

        {/* ── Heading ── */}
        <Reveal>
          <p className="section-label mb-3">What I work with</p>
          <h2
            className="font-display leading-none mb-16"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800 }}
          >
            MY <span className="gradient-text">SKILLS</span>
          </h2>
        </Reveal>

        {/* ── Skill cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <div className="glass-card p-6 h-full">

                {/* Category label */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{
                      background:  group.color,
                      boxShadow:   `0 0 8px ${group.color}80`,
                    }}
                  />
                  <span
                    className="font-mono text-[0.68rem] tracking-[0.18em] uppercase font-medium"
                    style={{ color: group.color }}
                  >
                    {group.category}
                  </span>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg font-mono text-[0.73rem] cursor-default
                                 transition-all duration-200"
                      style={{
                        background:   `${group.color}10`,
                        border:       `1px solid ${group.color}20`,
                        color:        'var(--text)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background   = `${group.color}20`
                        e.currentTarget.style.borderColor  = `${group.color}55`
                        e.currentTarget.style.color        = group.color
                        e.currentTarget.style.transform    = 'translateY(-1px)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background   = `${group.color}10`
                        e.currentTarget.style.borderColor  = `${group.color}20`
                        e.currentTarget.style.color        = 'var(--text)'
                        e.currentTarget.style.transform    = ''
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Currently learning banner ── */}
        <Reveal delay={0.36}>
          <div
            className="mt-5 glass-card p-5 flex items-center gap-4"
            style={{ borderColor: 'rgba(0,255,178,0.15)' }}
          >
            <span
              className="w-2 h-2 rounded-full shrink-0 bg-mint animate-pulse"
            />
            <p className="font-mono text-[0.78rem] text-dim">
              Currently learning:{' '}
              <span style={{ color: 'var(--mint)' }}>AI &amp; Automation</span>
              <span className="mx-2" style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>
                Tech Square Academy — Jan 2026 → Apr 2026
              </span>
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}