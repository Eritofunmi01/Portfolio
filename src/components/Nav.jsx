import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_ITEMS = [
  { label: "Home",       id: "home"       },
  { label: "About",      id: "about"      },
  { label: "Resume",     id: "resume"     },
  { label: "Experience", id: "experience" },
  { label: "Contact",    id: "contact"    },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState("home");
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const closest = NAV_ITEMS.map(({ id }) => {
        const el = document.getElementById(id);
        return { id, dist: el ? Math.abs(el.getBoundingClientRect().top) : Infinity };
      }).reduce((a, b) => (a.dist < b.dist ? a : b));
      setActive(closest.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[1000] h-16 flex items-center justify-between px-5 md:px-10 transition-all duration-400 ${
        scrolled
          ? "bg-void/90 backdrop-blur-xl border-b border-mint/10"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <button
        onClick={() => scrollTo("home")}
        className="font-display text-[1.9rem] leading-none tracking-[0.08em] gradient-text border-none bg-transparent cursor-pointer"
      >
        SODIX
      </button>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
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
          className="btn-primary !py-2 !px-5 !text-[0.72rem]"
          onClick={() => scrollTo("contact")}
        >
          Hire Me
        </button>
      </nav>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-snow bg-transparent border-none cursor-pointer p-1 flex items-center justify-center"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{    opacity: 0, y: -8  }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 bg-void/95 backdrop-blur-2xl border-b border-mint/10 flex flex-col gap-4 px-6 py-6"
          >
            {NAV_ITEMS.map(({ label, id }) => (
              <button
                key={id}
                className={`nav-link text-left text-base ${active === id ? "active" : ""}`}
                onClick={() => { scrollTo(id); setMenuOpen(false); }}
              >
                {label}
              </button>
            ))}
            <button
              className="btn-primary justify-center mt-2"
              onClick={() => { scrollTo("contact"); setMenuOpen(false); }}
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}