import { useState } from 'react'
import { X, Award } from 'lucide-react'

// ─── Add your certificates here ───────────────────────────────────────────────
const CERTIFICATES = [
  {
    issuer:      'Meta',
    title:       'Frontend Developer Professional Certificate',
    date:        'March 2024',
    description: 'Covers React, JavaScript, HTML/CSS, version control, and UX/UI design principles through hands-on projects.',
    image:       '/Img/c1.jpeg',   // ← replace with your image path
  },
  {
    issuer:      'Google',
    title:       'UX Design Professional Certificate',
    date:        'January 2024',
    description: 'Focuses on user-centred design, wireframing, prototyping, and usability testing with Figma.',
    image:       '/Img/c2.jpeg',
  },
  {
    issuer:      'freeCodeCamp',
    title:       'Responsive Web Design Certification',
    date:        'October 2023',
    description: 'HTML5, CSS3, Flexbox, CSS Grid, and accessibility fundamentals through 300+ hours of coursework.',
    image:       '/Img/c3.jpeg',
  },
  {
    issuer:      'Coursera',
    title:       'JavaScript Algorithms & Data Structures',
    date:        'August 2023',
    description: 'Deep dive into algorithms, data structures, debugging, and object-oriented programming in JavaScript.',
    // image:       '/certs/coursera-js.png',
  },
]
// ──────────────────────────────────────────────────────────────────────────────

export default function Certifications() {
  const [lightbox, setLightbox] = useState(null)   // holds the image src + title when open

  const openLightbox  = (cert) => setLightbox(cert)
  const closeLightbox = ()     => setLightbox(null)

  return (
    <section id="certifications" className="section">
      <div className="container">

        <h2 className="section-title">Certifications</h2>
        <p className="section-sub">
          Credentials and courses that back my skills
        </p>

        <div className="projects-grid">
          {CERTIFICATES.map(cert => (
            <CertCard key={cert.title} cert={cert} onImageClick={openLightbox} />
          ))}
        </div>

      </div>

      {/* ── Lightbox ─────────────────────────────────────────────── */}
      {lightbox && (
        <div
          onClick={closeLightbox}
          style={{
            position:        'fixed',
            inset:           0,
            zIndex:          999,
            background:      'rgba(0,0,0,0.88)',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            padding:         '24px',
            backdropFilter:  'blur(6px)',
            cursor:          'zoom-out',
            animation:       'fadeIn 0.18s ease',
          }}
        >
          {/* Stop click propagation so clicking the image doesn't close */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position:     'relative',
              maxWidth:     '90vw',
              maxHeight:    '90vh',
              borderRadius: '12px',
              overflow:     'hidden',
              border:       '1px solid rgba(0,255,178,0.25)',
              boxShadow:    '0 0 60px rgba(0,0,0,0.6)',
            }}
          >
            <img
              src={lightbox.image}
              alt={lightbox.title}
              style={{
                display:    'block',
                maxWidth:   '90vw',
                maxHeight:  '85vh',
                objectFit:  'contain',
                imageRendering: 'high-quality',
              }}
            />

            {/* Close button */}
            <button
              onClick={closeLightbox}
              aria-label="Close certificate preview"
              style={{
                position:    'absolute',
                top:         12,
                right:       12,
                background:  'rgba(0,0,0,0.65)',
                border:      '1px solid rgba(255,255,255,0.15)',
                borderRadius: '50%',
                width:       36,
                height:      36,
                display:     'flex',
                alignItems:  'center',
                justifyContent: 'center',
                cursor:      'pointer',
                color:       '#fff',
                transition:  'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,255,178,0.2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.65)'}
            >
              <X size={16} />
            </button>

            {/* Caption */}
            <div style={{
              position:   'absolute',
              bottom:     0,
              left:       0,
              right:      0,
              background: 'linear-gradient(transparent, rgba(0,0,0,0.82))',
              padding:    '28px 18px 14px',
              pointerEvents: 'none',
            }}>
              <p style={{
                color:      '#fff',
                fontWeight: 700,
                fontSize:   '0.95rem',
                margin:     0,
              }}>{lightbox.title}</p>
              <p style={{
                color:      'var(--accent)',
                fontSize:   '0.8rem',
                margin:     '3px 0 0',
                fontFamily: "'JetBrains Mono', monospace",
              }}>{lightbox.issuer} · {lightbox.date}</p>
            </div>
          </div>
        </div>
      )}

      {/* ── Keyframe for lightbox fade-in ─────────────────────────── */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
      `}</style>

    </section>
  )
}


function CertCard({ cert, onImageClick }) {
  return (
    <div
      className="card"
      style={{
        display:       'flex',
        flexDirection: 'column',
        gap:           16,
        transition:    'border-color 0.25s, transform 0.25s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(0,255,178,0.35)'
        e.currentTarget.style.transform   = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.transform   = ''
      }}
    >
      {/* Issuer badge */}
      <span style={{
        display:    'inline-flex',
        alignSelf:  'flex-start',
        alignItems: 'center',
        gap:        6,
        padding:    '4px 12px',
        borderRadius: 99,
        background: 'rgba(0,255,178,0.1)',
        border:     '1px solid rgba(0,255,178,0.25)',
        color:      'var(--accent)',
        fontSize:   '0.75rem',
        fontWeight: 600,
      }}>
        <Award size={11} />
        {cert.issuer}
      </span>

      {/* Certificate title */}
      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text)', lineHeight: 1.35 }}>
        {cert.title}
      </h3>

      {/* Description */}
      <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, flex: 1 }}>
        {cert.description}
      </p>

      {/* Clickable certificate image */}
      <div
        onClick={() => onImageClick(cert)}
        title="Click to enlarge"
        style={{
          borderRadius:    8,
          overflow:        'hidden',
          border:          '1px solid var(--border)',
          cursor:          'zoom-in',
          position:        'relative',
          background:      'var(--bg3)',
          transition:      'border-color 0.2s',
          aspectRatio:     '16 / 9',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(0,255,178,0.4)'
          e.currentTarget.querySelector('.cert-overlay').style.opacity = '1'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.querySelector('.cert-overlay').style.opacity = '0'
        }}
      >
        <img
          src={cert.image}
          alt={`${cert.title} certificate`}
          style={{
            width:      '100%',
            height:     '100%',
            objectFit:  'cover',
            display:    'block',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
          onMouseLeave={e => e.currentTarget.style.transform = ''}
        />

        {/* Hover overlay hint */}
        <div
          className="cert-overlay"
          style={{
            position:       'absolute',
            inset:          0,
            background:     'rgba(0,0,0,0.45)',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            opacity:        0,
            transition:     'opacity 0.2s',
            gap:            8,
          }}
        >
          <span style={{
            color:      '#fff',
            fontSize:   '0.82rem',
            fontWeight: 600,
            background: 'rgba(0,255,178,0.18)',
            border:     '1px solid rgba(0,255,178,0.4)',
            padding:    '6px 14px',
            borderRadius: 99,
            letterSpacing: '0.03em',
          }}>
            View Certificate
          </span>
        </div>
      </div>

      {/* Date issued */}
      <p style={{
        color:      'var(--muted)',
        fontSize:   '0.78rem',
        fontFamily: "'JetBrains Mono', monospace",
        margin:     0,
        paddingTop: 2,
      }}>
        Issued · {cert.date}
      </p>

    </div>
  )
}