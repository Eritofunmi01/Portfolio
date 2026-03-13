import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Zap, AlertCircle } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

/* ── EmailJS credentials (unchanged from your original) ── */
const EJ_SERVICE    = "service_6xe46zp";
const EJ_ADMIN      = "template_99kj4xg";
const EJ_AUTOREPLY  = "template_zh84dwp";
const EJ_PUBLIC_KEY = "UBbZcsuDMH0kwYrD3";

const CONTACT_ITEMS = [
  { icon: <Phone  size={18} />, label: "Phone",    value: "+234 806 906 2202",            color: "#00FFB2" },
  { icon: <Mail   size={18} />, label: "Email",    value: "sodiyaeritofunmi15@gmail.com", color: "#A78BFA" },
  { icon: <MapPin size={18} />, label: "Location", value: "Lagos, Nigeria",               color: "#FB923C" },
];

const SOCIALS = [
  { icon: <FaLinkedinIn size={15} />, label: "LinkedIn",   href: "https://www.linkedin.com/in/sodiya-tofunmi-644737379", color: "#0077B5" },
  { icon: <FaGithub    size={15} />, label: "GitHub",     href: "https://github.com/Eritofunmi01",                      color: "#00FFB2" },
  { icon: <FaXTwitter  size={15} />, label: "X / Twitter",href: "https://x.com/The_YoungDev",                           color: "#1DA1F2" },
  { icon: <FaWhatsapp  size={15} />, label: "WhatsApp",   href: "https://wa.me/2348069062202",                          color: "#25D366" },
];

function Reveal({ children, delay = 0, className = "" }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
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
  );
}

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent,    setSent]    = useState(false);
  const [error,   setError]   = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await emailjs.sendForm(EJ_SERVICE, EJ_ADMIN,     form.current, EJ_PUBLIC_KEY);
      await emailjs.sendForm(EJ_SERVICE, EJ_AUTOREPLY, form.current, EJ_PUBLIC_KEY);
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

      {/* Heading */}
      <Reveal>
        <p className="section-label mb-3">// reach out</p>
        <h2
          className="font-display leading-none mb-4"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
        >
          LET'S <span className="gradient-text">TALK</span>
        </h2>
        <p className="text-dim leading-relaxed max-w-[500px] mb-14 text-[0.97rem]">
          Have a project in mind? Want to collaborate or just say hi? I'm always open
          to the right opportunity — drop me a message.
        </p>
      </Reveal>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">

        {/* Form */}
        <Reveal delay={0.1}>
          <div className="glass-card p-7 md:p-10">
            <h3 className="font-semibold text-[1.05rem] mb-7">Send a message</h3>

            {/* Success */}
            <AnimatePresence>
              {sent && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: "1.5rem" }}
                  exit={{    opacity: 0, height: 0, marginBottom: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-mint/7 border border-mint/25 text-mint font-mono text-[0.82rem]">
                    <Zap size={15} className="shrink-0" />
                    Message sent! I'll get back to you soon ✓
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error */}
            <AnimatePresence>
              {error && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: "1.5rem" }}
                  exit={{    opacity: 0, height: 0, marginBottom: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/7 border border-red-500/25 text-red-400 font-mono text-[0.82rem]">
                    <AlertCircle size={15} className="shrink-0" />
                    Failed to send. Please try again.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[0.68rem] text-dim tracking-[0.12em] uppercase mb-2">
                    Name
                  </label>
                  <input name="user_name" type="text" required placeholder="John Doe" className="input-field" />
                </div>
                <div>
                  <label className="block font-mono text-[0.68rem] text-dim tracking-[0.12em] uppercase mb-2">
                    Email
                  </label>
                  <input name="user_email" type="email" required placeholder="you@email.com" className="input-field" />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[0.68rem] text-dim tracking-[0.12em] uppercase mb-2">
                  Subject
                </label>
                <input name="subject" type="text" required placeholder="Project Inquiry" className="input-field" />
              </div>

              <div>
                <label className="block font-mono text-[0.68rem] text-dim tracking-[0.12em] uppercase mb-2">
                  Message
                </label>
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
                className="btn-primary justify-center w-full"
              >
                {loading ? (
                  <>
                    <span
                      className="w-3.5 h-3.5 rounded-full border-2 border-void/30 border-t-void inline-block animate-spin"
                    />
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

        {/* Right column */}
        <div className="flex flex-col gap-4">

          {/* Contact info cards */}
          {CONTACT_ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={0.15 + i * 0.08}>
              <div className="glass-card p-5 flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    color:      item.color,
                    background: `${item.color}12`,
                    border:     `1px solid ${item.color}28`,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] text-dim tracking-[0.18em] uppercase mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-[0.9rem] break-all">{item.value}</p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Social links */}
          <Reveal delay={0.4}>
            <div className="glass-card p-5">
              <p className="font-mono text-[0.65rem] text-dim tracking-[0.18em] uppercase mb-5">
                Connect
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {SOCIALS.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl border border-mint/10 bg-white/[0.015] text-dim font-mono text-[0.72rem] no-underline transition-all duration-200"
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = s.color;
                      e.currentTarget.style.color       = s.color;
                      e.currentTarget.style.background  = `${s.color}0D`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "";
                      e.currentTarget.style.color       = "";
                      e.currentTarget.style.background  = "";
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
    </div>
  );
}