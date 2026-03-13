import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Zap } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

/* ── EmailJS config — same as your original ── */
const EMAILJS_SERVICE  = "service_6xe46zp";
const EMAILJS_ADMIN    = "template_99kj4xg";   // admin notification
const EMAILJS_AUTOREPLY = "template_zh84dwp";  // auto-reply to sender
const EMAILJS_PUBLIC   = "UBbZcsuDMH0kwYrD3";

const CONTACT_ITEMS = [
  { icon: <Phone  size={18} />, label: "Phone",    value: "+234 806 906 2202",              color: "#00FFB2" },
  { icon: <Mail   size={18} />, label: "Email",    value: "sodiyaeritofunmi15@gmail.com",   color: "#A78BFA" },
  { icon: <MapPin size={18} />, label: "Location", value: "Lagos, Nigeria",                  color: "#FB923C" },
];

const SOCIALS = [
  {
    icon:  <FaLinkedinIn size={16} />,
    label: "LinkedIn",
    href:  "https://www.linkedin.com/in/sodiya-tofunmi-644737379",
    color: "#0077B5",
  },
  {
    icon:  <FaGithub size={16} />,
    label: "GitHub",
    href:  "https://github.com/Eritofunmi01",
    color: "#00FFB2",
  },
  {
    icon:  <FaXTwitter size={16} />,
    label: "X / Twitter",
    href:  "https://x.com/The_YoungDev",
    color: "#1DA1F2",
  },
  {
    icon:  <FaWhatsapp size={16} />,
    label: "WhatsApp",
    href:  "https://wa.me/2348069062202",
    color: "#25D366",
  },
];

function Reveal({ children, delay = 0 }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const form    = useRef();
  const [loading, setLoading] = useState(false);
  const [sent,    setSent]    = useState(false);
  const [error,   setError]   = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      /* Send admin notification */
      await emailjs.sendForm(
        EMAILJS_SERVICE,
        EMAILJS_ADMIN,
        form.current,
        EMAILJS_PUBLIC,
      );

      /* Send auto-reply to the person who filled the form */
      await emailjs.sendForm(
        EMAILJS_SERVICE,
        EMAILJS_AUTOREPLY,
        form.current,
        EMAILJS_PUBLIC,
      );

      setSent(true);
      form.current.reset();
      setTimeout(() => setSent(false), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section-wrap">

      {/* ── Heading ── */}
      <Reveal>
        <p className="section-label" style={{ marginBottom: "1rem" }}>// reach out</p>
        <h2
          className="display-text"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", marginBottom: "1rem" }}
        >
          LET'S <span className="gradient-text">TALK</span>
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: 520, lineHeight: 1.8, marginBottom: "3.5rem" }}>
          Have a project in mind? Looking to collaborate or just want to say hi? I'm
          always open to the right opportunity — drop me a message.
        </p>
      </Reveal>

      {/* ── Two-column layout ── */}
      <div
        style={{
          display:             "grid",
          gridTemplateColumns: "1.25fr 1fr",
          gap:                 "2rem",
          alignItems:          "flex-start",
        }}
      >

        {/* ── LEFT: form ── */}
        <Reveal delay={0.1}>
          <div className="glass-card" style={{ padding: "2.5rem" }}>
            <h3 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "1.75rem" }}>
              Send a message
            </h3>

            {/* Success toast */}
            <AnimatePresence>
              {sent && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: "1.5rem" }}
                  exit={{    opacity: 0, height: 0, marginBottom: 0 }}
                  style={{
                    padding:      "1rem 1.25rem",
                    borderRadius: 10,
                    background:   "rgba(0,255,178,0.07)",
                    border:       "1px solid rgba(0,255,178,0.28)",
                    color:        "var(--mint)",
                    fontFamily:   "var(--font-mono)",
                    fontSize:     "0.82rem",
                    display:      "flex",
                    alignItems:   "center",
                    gap:          "0.75rem",
                    overflow:     "hidden",
                  }}
                >
                  <Zap size={15} />
                  Message sent! I'll get back to you soon ✓
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error toast */}
            <AnimatePresence>
              {error && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: "1.5rem" }}
                  exit={{    opacity: 0, height: 0, marginBottom: 0 }}
                  style={{
                    padding:      "1rem 1.25rem",
                    borderRadius: 10,
                    background:   "rgba(239,68,68,0.07)",
                    border:       "1px solid rgba(239,68,68,0.28)",
                    color:        "#F87171",
                    fontFamily:   "var(--font-mono)",
                    fontSize:     "0.82rem",
                    overflow:     "hidden",
                  }}
                >
                  Failed to send. Please try again or email me directly.
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              {/* Name + Email side by side */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    name="user_name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="input-field"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    name="user_email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Subject</label>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="Project Inquiry"
                  className="input-field"
                />
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project, idea, or just say hello…"
                  className="input-field"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ justifyContent: "center" }}
              >
                {loading ? (
                  <>
                    <span style={spinnerStyle} />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </Reveal>

        {/* ── RIGHT: contact info + socials ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

          {/* Contact cards */}
          {CONTACT_ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={0.15 + i * 0.08}>
              <div
                className="glass-card"
                style={{
                  padding:    "1.5rem",
                  display:    "flex",
                  alignItems: "center",
                  gap:        "1.2rem",
                }}
              >
                <div
                  style={{
                    width:          44,
                    height:         44,
                    borderRadius:   12,
                    background:     `${item.color}12`,
                    border:         `1px solid ${item.color}28`,
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    color:          item.color,
                    flexShrink:     0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily:    "var(--font-mono)",
                      fontSize:      "0.65rem",
                      color:         "var(--muted)",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      marginBottom:  "0.2rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontSize: "0.92rem", wordBreak: "break-all" }}>{item.value}</p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Social grid */}
          <Reveal delay={0.4}>
            <div className="glass-card" style={{ padding: "1.5rem" }}>
              <p
                style={{
                  fontFamily:    "var(--font-mono)",
                  fontSize:      "0.65rem",
                  color:         "var(--muted)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom:  "1.25rem",
                }}
              >
                Connect
              </p>

              <div
                style={{
                  display:             "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap:                 "0.75rem",
                }}
              >
                {SOCIALS.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display:        "flex",
                      alignItems:     "center",
                      gap:            "0.6rem",
                      padding:        "0.75rem 1rem",
                      borderRadius:   10,
                      border:         "1px solid var(--border)",
                      background:     "rgba(255,255,255,0.015)",
                      color:          "var(--muted)",
                      fontFamily:     "var(--font-mono)",
                      fontSize:       "0.72rem",
                      textDecoration: "none",
                      transition:     "all 0.22s ease",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = s.color;
                      e.currentTarget.style.color       = s.color;
                      e.currentTarget.style.background  = `${s.color}0D`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color       = "var(--muted)";
                      e.currentTarget.style.background  = "rgba(255,255,255,0.015)";
                    }}
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

/* ── Shared mini styles ── */
const labelStyle = {
  display:       "block",
  fontFamily:    "var(--font-mono)",
  fontSize:      "0.68rem",
  color:         "var(--muted)",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  marginBottom:  "0.5rem",
};

const spinnerStyle = {
  display:      "inline-block",
  width:        14,
  height:       14,
  borderRadius: "50%",
  border:       "2px solid rgba(0,0,0,0.25)",
  borderTopColor: "#000",
  animation:    "spin 0.75s linear infinite",
};