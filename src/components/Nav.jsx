import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home",       id: "home"       },
  { label: "About",      id: "about"      },
  { label: "Resume",     id: "resume"     },
  { label: "Experience", id: "experience" },
  { label: "Contact",    id: "contact"    },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState("home");
  const [menuOpen,  setMenuOpen]  = useState(false);

  /* ── Scroll-spy + background toggle ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // find which section is in view
      const offsets = NAV_ITEMS.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(closest.id);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      style={{
        position:   "fixed",
        top: 0, left: 0, right: 0,
        zIndex:     1000,
        height:     64,
        display:    "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding:    "0 2rem",
        background: scrolled ? "rgba(4,6,13,0.9)"  : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
      }}
    >
      {/* ── Logo ── */}
      <button
        onClick={() => scrollTo("home")}
        style={{
          fontFamily: "var(--font-display)",
          fontSize:   "1.9rem",
          letterSpacing: "0.08em",
          background: "linear-gradient(135deg, var(--mint), var(--purple-light))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor:  "transparent",
          backgroundClip: "text",
          border: "none",
          cursor: "pointer",
          lineHeight: 1,
        }}
      >
        SODIX
      </button>

      {/* ── Desktop links ── */}
      <nav
        style={{
          display:    "flex",
          alignItems: "center",
          gap:        "2.25rem",
        }}
        className="hide-mobile"
      >
        {NAV_ITEMS.map(({ label, id }) => (
          <button
            key={id}
            className={`nav-link ${active === id ? "active" : ""}`}
            onClick={() => scrollTo(id)}
          >
            {label}
          </button>
        ))}

        <button
          className="btn-primary"
          style={{ padding: "9px 20px", fontSize: "0.72rem" }}
          onClick={() => scrollTo("contact")}
        >
          Hire Me
        </button>
      </nav>

      {/* ── Mobile hamburger ── */}
      <button
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
        style={{
          display:    "none",
          background: "none",
          border:     "none",
          cursor:     "pointer",
          padding:    "4px",
          flexDirection: "column",
          gap: "5px",
        }}
        className="mobile-hamburger"
      >
        {[0, 1, 2].map(i => (
          <span
            key={i}
            style={{
              display:      "block",
              height:       2,
              width:        i === 2 ? 14 : 22,
              borderRadius: 2,
              background:   i === 1 ? "var(--mint)" : "var(--white)",
              transition:   "all 0.3s",
            }}
          />
        ))}
      </button>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{    opacity: 0, y: -8  }}
            transition={{ duration: 0.22 }}
            style={{
              position:   "absolute",
              top:        64,
              left:       0,
              right:      0,
              background: "rgba(4,6,13,0.97)",
              borderBottom: "1px solid var(--border)",
              backdropFilter: "blur(24px)",
              padding:    "1.5rem 2rem",
              display:    "flex",
              flexDirection: "column",
              gap:        "1.25rem",
            }}
          >
            {NAV_ITEMS.map(({ label, id }) => (
              <button
                key={id}
                className={`nav-link ${active === id ? "active" : ""}`}
                style={{ textAlign: "left", fontSize: "1rem", letterSpacing: "0.05em" }}
                onClick={() => { scrollTo(id); setMenuOpen(false); }}
              >
                {label}
              </button>
            ))}
            <button
              className="btn-primary"
              style={{ justifyContent: "center", marginTop: "0.5rem" }}
              onClick={() => { scrollTo("contact"); setMenuOpen(false); }}
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile hamburger visibility via CSS ── */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}