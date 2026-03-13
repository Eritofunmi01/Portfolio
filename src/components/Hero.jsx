import { useState, useEffect } from "react";
import { motion }               from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const TAGLINES = [
  "Turning ideas into sleek, functional web apps.",
  "Full-stack developer. Clean code. Real results.",
  "Building digital experiences that push boundaries.",
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/* ── Typewriter that cycles through phrases ── */
function Typewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed,   setDisplayed]   = useState("");
  const [deleting,    setDeleting]    = useState(false);

  useEffect(() => {
    const full = TAGLINES[phraseIndex];
    let timeout;

    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 32);
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 18);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIndex(i => (i + 1) % TAGLINES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIndex]);

  return (
    <span>
      {displayed}
      <span className="blink" style={{ color: "var(--mint)", marginLeft: 2 }}>|</span>
    </span>
  );
}

const STATS = [
  { value: "2+",  label: "Years Building"   },
  { value: "20+", label: "Projects Shipped" },
  { value: "10+", label: "Happy Clients"    },
  { value: "∞",   label: "Lines of Code"    },
];

const SOCIALS = [
  {
    icon:  <FaLinkedinIn size={16} />,
    href:  "https://www.linkedin.com/in/sodiya-tofunmi-644737379",
    hover: "#0077B5",
  },
  {
    icon:  <FaGithub size={16} />,
    href:  "https://github.com/Eritofunmi01",
    hover: "var(--mint)",
  },
  {
    icon:  <FaXTwitter size={16} />,
    href:  "https://x.com/The_YoungDev",
    hover: "#1DA1F2",
  },
  {
    icon:  <FaWhatsapp size={16} />,
    href:  "https://wa.me/2348069062202",
    hover: "#25D366",
  },
];

/* ── Animated entrance variants ── */
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  animate:    { opacity: 1, y: 0  },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <div
      className="grid-bg"
      style={{
        minHeight:      "100vh",
        display:        "flex",
        flexDirection:  "column",
        justifyContent: "center",
        position:       "relative",
        padding:        "7rem 2rem 5rem",
        overflow:       "hidden",
      }}
    >
      {/* ── Radial glow behind title ── */}
      <div
        aria-hidden
        style={{
          position:   "absolute",
          top:        "30%",
          left:       "50%",
          transform:  "translate(-50%, -50%)",
          width:      700,
          height:     700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex:     0,
        }}
      />

      {/* ── Available badge ── */}
      <motion.div {...fadeUp(0.15)} style={{ marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.6rem", position: "relative", zIndex: 1 }}>
        <span
          style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "var(--mint)",
            boxShadow:  "0 0 10px var(--mint)",
            display:    "inline-block",
            animation:  "blink 2s ease infinite",
          }}
        />
        <span className="section-label">Available for work</span>
      </motion.div>

      {/* ── Main headline ── */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
        <motion.p {...fadeUp(0.25)}
          style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      "0.85rem",
            color:         "var(--muted)",
            letterSpacing: "0.18em",
            marginBottom:  "1rem",
          }}
        >
          — Sodiya Tofunmi Israel
        </motion.p>

        <motion.h1 {...fadeUp(0.32)}>
          <span
            className="display-text"
            style={{
              display:    "block",
              fontSize:   "clamp(4.5rem, 13vw, 11.5rem)",
              color:      "var(--white)",
            }}
          >
            I BUILD
          </span>
          <span
            className="display-text gradient-text"
            style={{
              display:  "block",
              fontSize: "clamp(4.5rem, 13vw, 11.5rem)",
            }}
          >
            THE WEB
          </span>
          <span
            className="display-text"
            style={{
              display:           "block",
              fontSize:          "clamp(4.5rem, 13vw, 11.5rem)",
              color:             "transparent",
              WebkitTextStroke:  "2px rgba(240,244,255,0.12)",
            }}
          >
            DIFFERENT.
          </span>
        </motion.h1>

        {/* ── Typewriter tagline ── */}
        <motion.p {...fadeUp(0.55)}
          style={{
            fontFamily: "var(--font-body)",
            fontSize:   "1.1rem",
            color:      "var(--muted)",
            lineHeight: 1.7,
            marginTop:  "2rem",
            minHeight:  "1.8rem",
            maxWidth:   560,
          }}
        >
          <Typewriter />
        </motion.p>

        {/* ── CTA buttons ── */}
        <motion.div {...fadeUp(0.7)}
          style={{ display: "flex", gap: "1rem", marginTop: "2.25rem", flexWrap: "wrap" }}
        >
          <button className="btn-primary" onClick={() => scrollTo("contact")}>
            Start a project <ArrowRight size={14} />
          </button>
          <button className="btn-outline" onClick={() => scrollTo("about")}>
            About me
          </button>
        </motion.div>
      </div>

      {/* ── Stats row ── */}
      <motion.div
        {...fadeUp(1.0)}
        style={{
          display:     "flex",
          gap:         "3rem",
          marginTop:   "4.5rem",
          paddingTop:  "2.5rem",
          borderTop:   "1px solid var(--border)",
          flexWrap:    "wrap",
          position:    "relative",
          zIndex:      1,
        }}
      >
        {STATS.map(({ value, label }) => (
          <div key={label}>
            <div
              className="display-text"
              style={{ fontSize: "2.8rem", color: "var(--mint)", lineHeight: 1 }}
            >
              {value}
            </div>
            <div
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "0.68rem",
                color:         "var(--muted)",
                marginTop:     "4px",
                letterSpacing: "0.1em",
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── Floating social sidebar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        style={{
          position:      "fixed",
          right:         "1.5rem",
          top:           "50%",
          transform:     "translateY(-50%)",
          display:       "flex",
          flexDirection: "column",
          alignItems:    "center",
          gap:           "0.9rem",
          zIndex:        50,
        }}
        className="hide-mobile"
      >
        {SOCIALS.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            style={{
              width:         38,
              height:        38,
              borderRadius:  "50%",
              background:    "var(--card)",
              border:        "1px solid var(--border)",
              display:       "flex",
              alignItems:    "center",
              justifyContent: "center",
              color:         "var(--muted)",
              textDecoration: "none",
              transition:    "all 0.22s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color       = s.hover;
              e.currentTarget.style.borderColor = s.hover;
              e.currentTarget.style.boxShadow   = `0 0 14px ${s.hover}55`;
              e.currentTarget.style.transform   = "scale(1.1)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color       = "var(--muted)";
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow   = "none";
              e.currentTarget.style.transform   = "scale(1)";
            }}
          >
            {s.icon}
          </a>
        ))}
        {/* Vertical line below icons */}
        <div style={{ width: 1, height: 56, background: "var(--border)", marginTop: "0.2rem" }} />
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 7, 0] }}
        transition={{ delay: 1.6, duration: 2.2, repeat: Infinity }}
        style={{
          position:      "absolute",
          bottom:        "2.5rem",
          left:          "50%",
          transform:     "translateX(-50%)",
          display:       "flex",
          flexDirection: "column",
          alignItems:    "center",
          gap:           "0.4rem",
          color:         "var(--muted)",
          background:    "none",
          border:        "none",
          cursor:        "pointer",
          zIndex:        1,
        }}
      >
        <span
          style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      "0.6rem",
            letterSpacing: "0.25em",
          }}
        >
          SCROLL
        </span>
        <ChevronDown size={14} />
      </motion.button>
    </div>
  );
}