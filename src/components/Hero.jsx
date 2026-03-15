import { useState, useEffect } from "react";
import { motion }              from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

/* ── Cycling typewriter ── */
const TAGLINES = [
  "Turning ideas into sleek, functional web apps.",
  "Full-stack developer. Clean code. Real results.",
  "Building digital experiences that push boundaries.",
];

function Typewriter() {
  const [idx,      setIdx]      = useState(0);
  const [text,     setText]     = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = TAGLINES[idx];
    let t;
    if (!deleting && text.length < full.length) {
      t = setTimeout(() => setText(full.slice(0, text.length + 1)), 32);
    } else if (!deleting && text.length === full.length) {
      t = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(text.slice(0, -1)), 16);
    } else {
      setDeleting(false);
      setIdx(i => (i + 1) % TAGLINES.length);
    }
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <>
      {text}
      <span className="animate-blink text-mint ml-0.5">|</span>
    </>
  );
}

const STATS = [
  { value: "2+",  label: "Years Building"   },
  { value: "10+", label: "Projects Shipped" },
  { value: "10+", label: "Happy Clients"    },
  { value: "∞",   label: "Lines of Code"    },
];

const SOCIALS = [
  { icon: <FaLinkedinIn size={16} />, href: "https://www.linkedin.com/in/sodiya-tofunmi-644737379", glow: "rgba(0,119,181,0.5)",  border: "#0077B5" },
  { icon: <FaGithub     size={16} />, href: "https://github.com/Eritofunmi01",                      glow: "rgba(0,255,178,0.5)", border: "#00FFB2" },
  { icon: <FaXTwitter   size={16} />, href: "https://x.com/The_YoungDev",                           glow: "rgba(29,161,242,0.5)",border: "#1DA1F2" },
  { icon: <FaWhatsapp   size={16} />, href: "https://wa.me/2348069062202",                          glow: "rgba(37,211,102,0.5)",border: "#25D366" },
];

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  animate:    { opacity: 1, y: 0  },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <div className="grid-bg relative flex flex-col justify-center min-h-screen overflow-hidden px-5 md:px-16 pt-28 pb-16">

      {/* Purple orb behind the text */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.11) 0%, transparent 65%)" }}
      />

      {/* Status badge */}
      <motion.div {...fadeUp(0.15)} className="flex items-center gap-2.5 mb-8">
        <span
          className="w-2 h-2 rounded-full bg-mint animate-pulse2 shrink-0"
          style={{ boxShadow: "0 0 10px #00FFB2" }}
        />
        <span className="section-label">Available for work</span>
      </motion.div>

      {/* Headline */}
      <motion.div {...fadeUp(0.28)} className="max-w-4xl">
        <p className="font-mono text-[0.85rem] text-dim tracking-[0.18em] mb-4">
          — Sodiya Tofunmi Israel
        </p>
        <h1 className="font-display leading-[0.9]">
          <span
            className="block text-snow"
            style={{ fontSize: "clamp(4rem, 12vw, 10.5rem)" }}
          >
            I BUILD
          </span>
          <span
            className="block gradient-text"
            style={{ fontSize: "clamp(4rem, 12vw, 10.5rem)" }}
          >
            THE WEB
          </span>
          <span
            className="block"
            style={{
              fontSize:         "clamp(4rem, 12vw, 10.5rem)",
              color:            "transparent",
              WebkitTextStroke: "2px rgba(240,244,255,0.1)",
            }}
          >
            DIFFERENT.
          </span>
        </h1>
      </motion.div>

      {/* Typewriter */}
      <motion.p
        {...fadeUp(0.5)}
        className="font-sans text-lg text-dim leading-relaxed mt-8 max-w-[520px] min-h-[2rem]"
      >
        <Typewriter />
      </motion.p>

      {/* CTA buttons */}
      <motion.div {...fadeUp(0.66)} className="flex flex-wrap gap-3 mt-8">
        <button className="btn-primary" onClick={() => scrollTo("contact")}>
          Start a project <ArrowRight size={14} />
        </button>
        <button className="btn-outline" onClick={() => scrollTo("about")}>
          About me
        </button>
      </motion.div>

      {/* Stats */}
      <motion.div
        {...fadeUp(0.9)}
        className="flex flex-wrap gap-8 md:gap-12 mt-14 pt-8 border-t border-mint/10"
      >
        {STATS.map(({ value, label }) => (
          <div key={label}>
            <div
              className="font-display text-mint"
              style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", lineHeight: 1 }}
            >
              {value}
            </div>
            <div className="font-mono text-[0.68rem] text-dim tracking-[0.1em] mt-1">
              {label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Floating social sidebar — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-50"
      >
        {SOCIALS.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full bg-surface border border-mint/10 flex items-center justify-center text-dim no-underline transition-all duration-200 hover:scale-110"
            onMouseEnter={e => {
              e.currentTarget.style.color       = s.border;
              e.currentTarget.style.borderColor = s.border;
              e.currentTarget.style.boxShadow   = `0 0 14px ${s.glow}`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color       = "";
              e.currentTarget.style.borderColor = "";
              e.currentTarget.style.boxShadow   = "";
            }}
          >
            {s.icon}
          </a>
        ))}
        <div className="w-px h-14 bg-mint/10 mt-1" />
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 7, 0] }}
        transition={{ delay: 1.6, duration: 2.2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-dim bg-transparent border-none cursor-pointer"
      >
        <span className="font-mono text-[0.6rem] tracking-[0.25em]">SCROLL</span>
        <ChevronDown size={14} />
      </motion.button>
    </div>
  );
}