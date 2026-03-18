import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { FaLinkedinIn, FaGithub, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'

const EJ_SERVICE    = 'service_6xe46zp'
const EJ_ADMIN      = 'template_99kj4xg'
const EJ_AUTOREPLY  = 'template_zh84dwp'
const EJ_PUBLIC_KEY = 'UBbZcsuDMH0kwYrD3'

const INFO = [
  { icon: Mail,   label: 'Email',    value: 'sodiyaeritofunmi15@gmail.com', color: '#A78BFA' },
  { icon: Phone,  label: 'Phone',    value: '+234 806 906 2202',            color: '#00FFB2' },
  { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria',               color: '#FB923C' },
]

const SOCIALS = [
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/sodiya-tofunmi-644737379', label: 'LinkedIn',  color: '#0077B5' },
  { icon: FaGithub,     href: 'https://github.com/Eritofunmi01',                      label: 'GitHub',    color: '#00FFB2' },
  { icon: FaXTwitter,   href: 'https://x.com/The_YoungDev',                           label: 'X/Twitter', color: '#1DA1F2' },
  { icon: FaWhatsapp,   href: 'https://wa.me/2348069062202',                          label: 'WhatsApp',  color: '#25D366' },
]

const labelStyle = {
  display: 'block',
  fontSize: '0.78rem',
  fontWeight: 600,
  color: 'var(--muted)',
  marginBottom: 6,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
}

export default function Contact() {
  const form = useRef()
  const [status, setStatus] = useState(null)

  const send = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(EJ_SERVICE, EJ_ADMIN,     form.current, EJ_PUBLIC_KEY)
      await emailjs.sendForm(EJ_SERVICE, EJ_AUTOREPLY, form.current, EJ_PUBLIC_KEY)
      setStatus('sent')
      form.current.reset()
      setTimeout(() => setStatus(null), 6000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">

        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-sub">
          Ready to bring your ideas to life? I'm always excited to discuss new projects and opportunities.
        </p>

        <div className="contact-grid">

          {/* ── Form ── */}
          <div className="card">
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 22, color: 'var(--text)' }}>
              Send me a message
            </h3>

            {status === 'sent' && (
              <div style={{ marginBottom: 18, padding: '12px 16px', borderRadius: 8,
                background: 'rgba(0,255,178,0.08)', border: '1px solid rgba(0,255,178,0.25)',
                color: 'var(--accent)', fontSize: '0.9rem' }}>
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div style={{ marginBottom: 18, padding: '12px 16px', borderRadius: 8,
                background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)',
                color: '#f87171', fontSize: '0.9rem' }}>
                ✕ Failed to send. Please try again.
              </div>
            )}

            <form ref={form} onSubmit={send} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Name + Email — uses responsive CSS class */}
              <div className="form-row">
                <div>
                  <label style={labelStyle}>Name</label>
                  <input name="user_name" type="text" required placeholder="Your full name" className="field" />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input name="user_email" type="email" required placeholder="your@email.com" className="field" />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Subject</label>
                <input name="subject" type="text" required
                  placeholder="Project discussion, collaboration, etc." className="field" />
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea name="message" required rows={5}
                  placeholder="Tell me about your project..." className="field" />
              </div>

              <button type="submit" disabled={status === 'sending'} className="btn btn-solid"
                style={{ justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}>
                {status === 'sending' ? 'Sending…' : <><Send size={15} /> Send Message</>}
              </button>
            </form>
          </div>

          {/* ── Right column ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Contact info */}
            <div className="card">
              <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 20, color: 'var(--text)' }}>
                Get in touch
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {INFO.map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 46, height: 46, flexShrink: 0,
                      borderRadius: 10,
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}35`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: item.color,
                    }}>
                      <item.icon size={17} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontSize: '0.7rem', color: 'var(--muted)', fontWeight: 600,
                        textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>
                        {item.label}
                      </p>
                      <p style={{ color: 'var(--text)', fontSize: '0.88rem', wordBreak: 'break-word' }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="card">
              <p style={{ fontSize: '0.7rem', color: 'var(--muted)', fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
                Find me on
              </p>
              <div className="socials-grid">
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', gap: 9,
                      padding: '10px 14px', borderRadius: 8,
                      background: 'var(--bg3)',
                      border: '1px solid var(--border)',
                      color: 'var(--muted)',
                      fontSize: '0.85rem', fontWeight: 500,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = s.color
                      e.currentTarget.style.color = s.color
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.color = 'var(--muted)'
                    }}
                  >
                    <s.icon size={14} /> {s.label}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}