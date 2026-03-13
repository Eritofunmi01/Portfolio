import { FaLinkedinIn, FaGithub, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const NAV = [
  { label: "Home",       id: "home"       },
  { label: "About",      id: "about"      },
  { label: "Resume",     id: "resume"     },
  { label: "Experience", id: "experience" },
  { label: "Contact",    id: "contact"    },
];

const SOCIALS = [
  { icon: <FaLinkedinIn size={15} />, href: "https://www.linkedin.com/in/sodiya-tofunmi-644737379", color: "#0077B5" },
  { icon: <FaGithub     size={15} />, href: "https://github.com/Eritofunmi01",                      color: "#00FFB2" },
  { icon: <FaXTwitter   size={15} />, href: "https://x.com/The_YoungDev",                           color: "#1DA1F2" },
  { icon: <FaWhatsapp   size={15} />, href: "https://wa.me/2348069062202",                          color: "#25D366" },
];

export default function Footer() {
  return (
    <footer
      style={{
        position:    "relative",
        zIndex:      2,
        borderTop:   "1px solid var(--border)",
        background:  "rgba(4,6,13,0.8)",
        backdropFilter: "blur(12px)",
        padding:     "3rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin:   "0 auto",
          display:  "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap:      "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          style={{
            fontFamily:  "var(--font-display)",
            fontSize:    "1.7rem",
            letterSpacing: "0.08em",
            background:  "linear-gradient(135deg, var(--mint), var(--purple-light))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            border:      "none",
            cursor:      "pointer",
            lineHeight:  1,
            justifySelf: "start",
          }}
        >
          SODIX
        </button>

        {/* Nav links */}
        <nav
          style={{
            display:  "flex",
            gap:      "1.75rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {NAV.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color:         "var(--muted)",
                background:    "none",
                border:        "none",
                cursor:        "pointer",
                transition:    "color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--mint)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Socials */}
        <div
          style={{
            display:        "flex",
            gap:            "0.75rem",
            justifyContent: "flex-end",
          }}
        >
          {SOCIALS.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              style={{
                width:          34,
                height:         34,
                borderRadius:   "50%",
                background:     "var(--card)",
                border:         "1px solid var(--border)",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                color:          "var(--muted)",
                textDecoration: "none",
                transition:     "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color       = s.color;
                e.currentTarget.style.borderColor = s.color;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color       = "var(--muted)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div
        style={{
          maxWidth:   1100,
          margin:     "2rem auto 0",
          paddingTop: "1.5rem",
          borderTop:  "1px solid var(--border)",
          display:    "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      "0.68rem",
            color:         "var(--muted)",
            letterSpacing: "0.06em",
          }}
        >
          © {new Date().getFullYear()} Sodiya Tofunmi Israel — Designed &amp; Built from scratch.
        </p>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          footer > div:first-child {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          footer > div:first-child > *:last-child {
            justify-content: center !important;
          }
          footer > div:first-child > *:first-child {
            justify-self: center !important;
          }
        }
      `}</style>
    </footer>
  );
}