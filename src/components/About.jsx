import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Calendar, FolderGit2 } from 'lucide-react'

// ─── Reusable scroll-reveal wrapper ───────────────────────────────────────────
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

// ─── Stats — edit values here ──────────────────────────────────────────────────
const STATS = [
  { icon: <Calendar    size={16} />, label: 'Experience',  value: '1+ Yr'   },
  { icon: <FolderGit2  size={16} />, label: 'Projects',    value: '5+'      },
  { icon: <MapPin      size={16} />, label: 'Location',    value: 'Lagos 🇳🇬' },
]

// Path to photo — must be in /public
const PHOTO_SRC = '/Img/frame ass.png'
// Path to CV for download — must be in /public
const CV_PATH   = '/Tofunmi_CV_.pdf'

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-wrap">

        {/* ── Section heading ── */}
        <Reveal>
          <p className="section-label mb-3">Who I am</p>
          <h2
            className="font-display leading-none mb-16"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800 }}
          >
            ABOUT <span className="gradient-text">ME</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* ── Photo column ── */}
          <Reveal delay={0.1}>
            <div className="relative w-fit mx-auto md:mx-0">

              {/* Decorative glow border */}
              <div
                className="absolute -inset-[3px] rounded-[22px] pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,255,178,0.5) 0%, transparent 50%, rgba(96,239,255,0.3) 100%)',
                }}
              />

              {/* Photo */}
              <img
                src={PHOTO_SRC}
                alt="Sodiya Tofunmi"
                className="relative w-72 h-[340px] object-cover rounded-[20px]"
                style={{ filter: 'contrast(1.04) saturate(1.08)' }}
              />

              {/* "Open to Work" floating chip */}
              <div
                className="absolute -bottom-4 -right-4 glass-card px-4 py-2.5 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                <span
                  className="font-mono text-[11px] font-medium"
                  style={{ color: 'var(--mint)' }}
                >
                  Open to Work
                </span>
              </div>
            </div>
          </Reveal>

          {/* ── Text column ── */}
          <div className="flex flex-col gap-5">

            <Reveal delay={0.15}>
              <p className="leading-relaxed" style={{ fontSize: '0.97rem', color: 'var(--text)' }}>
                I'm <span style={{ color: 'var(--mint)', fontWeight: 600 }}>Sodiya Tofunmi</span>, a
                full-stack developer based in Lagos, Nigeria. I kicked off my coding journey in early
                2024 and haven't stopped since — building real projects, learning constantly, and
                levelling up my skills week by week.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="leading-relaxed text-dim" style={{ fontSize: '0.97rem' }}>
                I thrive on turning ideas into functional products — clean frontends, solid backends,
                and mobile apps that feel native. Currently deepening my knowledge in AI &amp; Automation
                and pushing myself to grow every single day.
              </p>
            </Reveal>

            {/* Stats row */}
            <Reveal delay={0.25}>
              <div className="grid grid-cols-3 gap-3 mt-1">
                {STATS.map(stat => (
                  <div key={stat.label} className="glass-card p-4 text-center">
                    <div
                      className="flex justify-center mb-1.5"
                      style={{ color: 'var(--mint)' }}
                    >
                      {stat.icon}
                    </div>
                    <p className="font-display font-bold text-lg text-white">{stat.value}</p>
                    <p className="font-mono text-[10px] tracking-wider uppercase mt-0.5 text-dim">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* CTA buttons */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-3 mt-2">
                <a href="#projects" className="btn-primary text-sm">
                  See My Work
                </a>
                <a href={CV_PATH} download className="btn-ghost text-sm">
                  Download CV
                </a>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  )
}