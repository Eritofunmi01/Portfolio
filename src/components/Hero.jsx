import { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedinIn, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'

const SOCIALS = [
  { icon: FaGithub,     href: 'https://github.com/Eritofunmi01',                       label: 'GitHub'    },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/sodiya-tofunmi-644737379',  label: 'LinkedIn'  },
  { icon: FaXTwitter,   href: 'https://x.com/The_YoungDev',                            label: 'X/Twitter' },
  { icon: FaWhatsapp,   href: 'https://wa.me/2348069062202',                           label: 'WhatsApp'  },
]

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('[data-delay]')
    els?.forEach(el => {
      const d = el.getAttribute('data-delay')
      el.style.opacity = 0
      el.style.animation = `fadeUp 0.75s ease forwards`
      el.style.animationDelay = d + 'ms'
    })
  }, [])

  return (
    <section id="hero" ref={ref} style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: 80,
      paddingBottom: 40,
    }}>
      <div className="container" style={{ width: '100%' }}>

        {/* Available badge */}
        <div data-delay="0" style={{
          opacity: 0,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(0,255,178,0.08)',
          border: '1px solid rgba(0,255,178,0.25)',
          borderRadius: 999,
          padding: '6px 16px',
          marginBottom: 28,
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: '50%',
            background: 'var(--accent)', display: 'inline-block',
            animation: 'bounce 1.4s ease-in-out infinite',
          }} />
          <span style={{
            color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 500,
            fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.04em',
          }}>
            Available for work &amp; freelance
          </span>
        </div>

        {/* Name */}
        <h1 data-delay="120" style={{
          opacity: 0,
          fontSize: 'clamp(2.8rem, 9vw, 6.5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          color: 'var(--accent)',
          marginBottom: 20,
          letterSpacing: '-0.03em',
        }}>
          Sodiya Tofunmi
        </h1>

        {/* Role */}
        <p data-delay="240" style={{
          opacity: 0,
          fontSize: 'clamp(1.1rem, 3vw, 1.8rem)',
          fontWeight: 700,
          color: 'var(--text)',
          marginBottom: 14,
        }}>
          AI Automation Engineer & Full Stack Developer
        </p>

        {/* Specialties */}
        <p data-delay="360" style={{
          opacity: 0,
          color: 'var(--muted)',
          fontSize: 'clamp(0.88rem, 2vw, 1.05rem)',
          marginBottom: 36,
          lineHeight: 1.6,
        }}>
          AI Automation &nbsp;•&nbsp; Web Development &nbsp;•&nbsp; AI Agents &nbsp;•&nbsp; API Integration &nbsp;•&nbsp; Workflow Automation
        </p>

        {/* CTA buttons */}
        <div data-delay="480" className="hero-ctas" style={{ opacity: 0 }}>
          <a href="#contact"  className="btn btn-solid">Get In Touch</a>
          <a href="#projects" className="btn btn-outline">View Projects</a>
        </div>

        {/* Social icons */}
        <div data-delay="600" className="hero-socials" style={{ opacity: 0 }}>
          {SOCIALS.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
              style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--muted)', fontSize: '1.05rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.color = 'var(--accent)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--muted)'
                e.currentTarget.style.transform = ''
              }}
            >
              <s.icon />
            </a>
          ))}
        </div>

        {/* Scroll arrow */}
        <a href="#about" style={{ display: 'inline-block', color: 'var(--accent)', fontSize: '1.4rem' }}
          className="bounce">
          ↓
        </a>

      </div>
    </section>
  )
}