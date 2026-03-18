import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'Home',     href: '#hero'     },
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position:       'fixed',
      top: 0, left: 0, right: 0,
      zIndex:         100,
      background:     scrolled ? 'rgba(17,17,17,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom:   scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition:     'all 0.3s ease',
    }}>
      <div className="container" style={{
        height: 68,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Brand */}
        <a href="#hero" style={{
          color: 'var(--accent)', fontWeight: 700,
          fontSize: '1.1rem', letterSpacing: '-0.02em',
        }}>
          Sodiya Tofunmi
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} style={{
              color: 'var(--muted)', fontSize: '0.95rem',
              fontWeight: 500, transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-solid btn-sm">Hire Me</a>
        </div>

        {/* Mobile toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setOpen(p => !p)}
          style={{
            background: 'none', border: 'none',
            color: 'var(--text)', cursor: 'pointer',
            fontSize: '1.4rem', lineHeight: 1,
            padding: 4,
          }}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'var(--bg2)',
          borderTop: '1px solid var(--border)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setOpen(false)}
              style={{ color: 'var(--muted)', fontSize: '1rem', fontWeight: 500 }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="btn btn-solid btn-sm"
            style={{ alignSelf: 'flex-start' }}>
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}