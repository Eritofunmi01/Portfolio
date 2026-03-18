import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >

      {/* ── Subtle grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,178,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,178,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* ── Glow orbs ── */}
      <div
        className="absolute top-1/3 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,255,178,0.07) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(96,239,255,0.05) 0%, transparent 70%)' }}
      />

      {/* ── Content ── */}
      <div className="section-wrap pt-28 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y:  0  }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Available badge */}
          <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full"
            style={{ border: '1px solid rgba(0,255,178,0.2)', background: 'rgba(0,255,178,0.05)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-mint glow-pulse" />
            <span className="font-mono text-[0.7rem] tracking-wider" style={{ color: 'var(--mint)' }}>
              Available for work &amp; freelance
            </span>
          </div>

          {/* Greeting */}
          <p className="font-mono text-dim text-xs tracking-[0.25em] uppercase mb-4">
            Hi there, I'm
          </p>

          {/* Name — edit font size in the style prop below */}
          <h1
            className="font-display leading-[0.9] mb-5"
            style={{ fontSize: 'clamp(3.8rem, 11vw, 8.5rem)', fontWeight: 800 }}
          >
            <span className="gradient-text">SODIYA</span>
            <br />
            <span className="text-white">TOFUNMI</span>
          </h1>

          {/* Title line */}
          <p
            className="font-display mb-6"
            style={{
              fontSize: 'clamp(1rem, 2.8vw, 1.65rem)',
              fontWeight: 500,
              color: 'var(--dim)',
            }}
          >
            Full-Stack Developer
            <span style={{ color: 'rgba(0,255,178,0.5)', margin: '0 12px' }}>—</span>
            React · Node.js · Mobile
          </p>

          {/* Short bio */}
          <p
            className="leading-relaxed max-w-[520px] mb-10"
            style={{ fontSize: '0.96rem', color: 'var(--dim)' }}
          >
            Building sleek, high-performance web &amp; mobile apps from Lagos, Nigeria.
            Started early 2024 and hitting the ground running every day.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects <Sparkles size={14} />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-dim hover:text-mint transition-colors duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ArrowDown size={13} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  )
}