import { useEffect, useRef } from 'react'

// ── Edit your stats here ──────────────────────────────────────
const STATS = [
  { value: '1+',     label: 'Year Experience'  },
  { value: '5+',     label: 'Projects Built'   },
  { value: '2+',     label: 'Certifications'   },
  { value: 'Lagos',  label: 'Based In 🇳🇬'      },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          ref.current?.querySelectorAll('[data-anim]').forEach((el, i) => {
            el.style.animation = `fadeUp 0.7s ease forwards`
            el.style.animationDelay = (i * 120) + 'ms'
          })
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">

        <h2 data-anim style={{ opacity: 0 }} className="section-title">About Me</h2>
        <p data-anim style={{ opacity: 0 }} className="section-sub">
          A little about who I am and what drives me
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 56, alignItems: 'center' }}
          className="flex-col md:grid">

          {/* Photo */}
          <div data-anim style={{ opacity: 0, textAlign: 'center' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <img
                src="/Img/frame ass.png"
                alt="Sodiya Tofunmi"
                style={{
                  width: 260,
                  height: 300,
                  objectFit: 'cover',
                  borderRadius: 16,
                  border: '2px solid rgba(0,255,178,0.3)',
                  display: 'block',
                }}
              />
              {/* Open to work chip */}
              <div style={{
                position: 'absolute', bottom: -14, left: '50%', transform: 'translateX(-50%)',
                background: 'var(--bg2)', border: '1px solid rgba(0,255,178,0.3)',
                borderRadius: 999, padding: '6px 16px',
                display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap',
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
                <span style={{ color: 'var(--accent)', fontSize: '0.78rem', fontWeight: 600 }}>Open to Work</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p data-anim style={{ opacity: 0, color: 'var(--text)', fontSize: '1rem', lineHeight: 1.8, marginBottom: 20 }}>
              I'm <strong style={{ color: 'var(--accent)' }}>Sodiya Tofunmi</strong>, a full-stack developer
              based in Lagos, Nigeria. I started my coding journey in early 2024 and I've been building
              non-stop ever since — web apps, mobile apps, and everything in between.
            </p>
            <p data-anim style={{ opacity: 0, color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: 36 }}>
              I'm ambitious, self-driven, and genuinely excited about technology. Currently expanding into
              AI &amp; Automation at Tech Square Academy. I'm open to both full-time roles and freelance
              collaborations — I show up, I deliver, and I keep growing.
            </p>

            {/* Stats grid */}
            <div data-anim style={{ opacity: 0, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
              {STATS.map(s => (
                <div key={s.label} className="card" style={{ padding: '20px 16px', textAlign: 'center' }}>
                  <p style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)', marginBottom: 4 }}>{s.value}</p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--muted)', fontWeight: 500 }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div data-anim style={{ opacity: 0, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#projects"         className="btn btn-solid">View My Work</a>
              <a href="/Tofunmi_CV_.pdf" download className="btn btn-outline">Download CV</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}