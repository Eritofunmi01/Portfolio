import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

// ─── Edit nav links here ───────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

// Path to your CV file inside /public
const CV_PATH = '/Tofunmi_CV_.pdf'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-card rounded-none border-x-0 border-t-0'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }} className="group">
          <img
            src="/Img/logo.png"
            alt="Sodix logo"
            style={{ width: '32px', height: '32px', objectFit: 'contain', transition: 'transform 0.3s' }}
            className="group-hover:scale-110"
          />
          <span className="font-display font-bold text-sm tracking-widest text-white">
            SODIX
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-dim
                         hover:text-mint transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Resume download */}
          <a
            href={CV_PATH}
            download
            className="btn-primary text-xs px-4 py-2"
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-dim hover:text-mint transition-colors duration-200"
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden glass-card rounded-none border-x-0 px-6 py-5 flex flex-col gap-5">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-dim
                         hover:text-mint transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a href={CV_PATH} download className="btn-primary justify-center text-xs">
            Download Resume
          </a>
        </div>
      )}
    </nav>
  )
}