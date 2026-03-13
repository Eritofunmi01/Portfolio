import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView }               from "framer-motion";
import { useRef }                  from "react";
import { MapPin, Mail, Phone, Globe, Server, Database, Cpu } from "lucide-react";

const SKILLS = {
  Frontend:  ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit"],
  Backend:   ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT Auth", "Socket.io"],
  Database:  ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "Prisma"],
  Tools:     ["Git & GitHub", "Docker", "Vercel", "Linux", "Figma", "VS Code"],
};

const BENTO = [
  { key: "Frontend",  icon: <Globe  size={20} />, color: "#00FFB2", count: "6 techs" },
  { key: "Backend",   icon: <Server size={20} />, color: "#A78BFA", count: "6 techs" },
  { key: "Database",  icon: <Database size={20}/>,color: "#60A5FA", count: "5 techs" },
  { key: "Tools",     icon: <Cpu    size={20} />, color: "#FB923C", count: "6 items" },
];

/* ── Animated section wrapper ── */
function Reveal({ children, delay = 0 }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <div className="section-wrap">
      {/* ── Heading ── */}
      <Reveal>
        <p className="section-label" style={{ marginBottom: "1rem" }}>// who I am</p>
        <h2
          className="display-text"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", marginBottom: "3.5rem" }}
        >
          ABOUT <span className="gradient-text">ME</span>
        </h2>
      </Reveal>

      {/* ── Two-column: Bio + Bento ── */}
      <div
        style={{
          display:             "grid",
          gridTemplateColumns: "1fr 1fr",
          gap:                 "2rem",
          marginBottom:        "2.5rem",
        }}
      >
        {/* Bio card */}
        <Reveal delay={0.1}>
          <div className="glass-card" style={{ padding: "2.5rem", height: "100%" }}>
            {/* Avatar */}
            <div
              style={{
                width:          72,
                height:         72,
                borderRadius:   "50%",
                background:     "linear-gradient(135deg, var(--mint), var(--purple))",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                fontFamily:     "var(--font-display)",
                fontSize:       "1.6rem",
                color:          "var(--black)",
                marginBottom:   "1.5rem",
                flexShrink:     0,
              }}
            >
              STI
            </div>

            <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.3rem" }}>
              Sodiya Tofunmi Israel
            </h3>
            <p
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "0.72rem",
                color:         "var(--mint)",
                letterSpacing: "0.12em",
                marginBottom:  "1.25rem",
              }}
            >
              Full-Stack Developer
            </p>

            <p style={{ color: "var(--muted)", lineHeight: 1.85, marginBottom: "1rem" }}>
              I'm a full-stack developer based in Lagos, Nigeria with a deep passion for
              crafting products that sit at the intersection of beautiful design and
              clean, maintainable engineering.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.85 }}>
              I turn complex ideas into fast, polished web applications — from
              pixel-perfect UIs to robust backend systems. Every project I touch is built
              with intention and shipped with pride.
            </p>

            {/* Contact info */}
            <div
              style={{
                marginTop:     "2rem",
                paddingTop:    "1.5rem",
                borderTop:     "1px solid var(--border)",
                display:       "flex",
                flexDirection: "column",
                gap:           "0.65rem",
              }}
            >
              {[
                { icon: <MapPin size={13} />, text: "Lagos, Nigeria"                    },
                { icon: <Mail   size={13} />, text: "sodiyaeritofunmi15@gmail.com"       },
                { icon: <Phone  size={13} />, text: "+234 806 906 2202"                  },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  style={{
                    display:    "flex",
                    alignItems: "center",
                    gap:        "0.65rem",
                    color:      "var(--muted)",
                    fontSize:   "0.88rem",
                  }}
                >
                  <span style={{ color: "var(--mint)", flexShrink: 0 }}>{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bento grid */}
        <Reveal delay={0.2}>
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "1fr 1fr",
              gap:                 "1rem",
              height:              "100%",
            }}
          >
            {BENTO.map((item, i) => (
              <motion.div
                key={item.key}
                className="glass-card"
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                whileHover={{ y: -4 }}
                onClick={() => setActiveTab(item.key)}
                style={{
                  padding:     "1.6rem",
                  cursor:      "pointer",
                  borderColor: activeTab === item.key ? `${item.color}50` : "var(--border)",
                  background:  activeTab === item.key ? `${item.color}09` : "var(--card)",
                  transition:  "all 0.22s ease",
                }}
              >
                <span style={{ color: item.color }}>{item.icon}</span>
                <div style={{ fontWeight: 600, marginTop: "0.85rem" }}>{item.key}</div>
                <div
                  style={{
                    fontFamily:    "var(--font-mono)",
                    fontSize:      "0.68rem",
                    color:         "var(--muted)",
                    marginTop:     "0.2rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  {item.count}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* ── Skills detail panel ── */}
      <Reveal delay={0.3}>
        <div className="glass-card" style={{ padding: "2rem" }}>
          {/* Tab bar */}
          <div
            style={{
              display:     "flex",
              gap:         "0.75rem",
              flexWrap:    "wrap",
              marginBottom: "1.75rem",
            }}
          >
            {Object.keys(SKILLS).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding:       "6px 16px",
                  borderRadius:  100,
                  border:        "1px solid",
                  borderColor:   activeTab === tab ? "var(--mint)" : "var(--border)",
                  background:    activeTab === tab ? "var(--mint-dim)" : "transparent",
                  color:         activeTab === tab ? "var(--mint)" : "var(--muted)",
                  fontFamily:    "var(--font-mono)",
                  fontSize:      "0.72rem",
                  letterSpacing: "0.06em",
                  cursor:        "pointer",
                  transition:    "all 0.2s ease",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tag cloud */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", minHeight: "3rem" }}>
            <AnimatePresence mode="wait">
              {SKILLS[activeTab].map((skill, i) => (
                <motion.span
                  key={`${activeTab}-${skill}`}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.75 }}
                  animate={{ opacity: 1, scale: 1   }}
                  exit={{    opacity: 0, scale: 0.75 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </Reveal>

      {/* ── Responsive override ── */}
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}