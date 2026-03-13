import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";

const TECH_STACK = [
  {
    category: "Languages",
    color:    "#00FFB2",
    items:    ["JavaScript (ES2024)", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frontend",
    color:    "#A78BFA",
    items:    ["React.js", "Next.js 14", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "Shadcn/UI"],
  },
  {
    category: "Backend",
    color:    "#60A5FA",
    items:    ["Node.js", "Express.js", "REST API Design", "GraphQL", "JWT & OAuth2"],
  },
  {
    category: "Database",
    color:    "#FB923C",
    items:    ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "Prisma ORM"],
  },
  {
    category: "DevOps & Tools",
    color:    "#F472B6",
    items:    ["Git & GitHub", "Docker", "Vercel", "Linux CLI", "Figma", "VS Code"],
  },
];

const HIGHLIGHTS = [
  "Delivered 20+ full-stack web projects from concept to deployment.",
  "Integrated third-party APIs including payment gateways, email services, and social auth.",
  "Built REST and GraphQL APIs consumed by both web and mobile clients.",
  "Worked with clients across Nigeria to digitize and automate business workflows.",
  "Consistently shipped accessible, responsive, mobile-first interfaces.",
];

function Reveal({ children, delay = 0 }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Resume() {
  return (
    <div className="section-wrap">

      {/* ── Header row ── */}
      <Reveal>
        <div
          style={{
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "flex-end",
            flexWrap:       "wrap",
            gap:            "1.5rem",
            marginBottom:   "3.5rem",
          }}
        >
          <div>
            <p className="section-label" style={{ marginBottom: "1rem" }}>// credentials</p>
            <h2
              className="display-text"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              RESUME &amp; <span className="gradient-text">SKILLS</span>
            </h2>
          </div>

          <a
            href="mailto:sodiyaeritofunmi15@gmail.com?subject=Resume%20Request%20from%20Portfolio"
            className="btn-primary"
            style={{ textDecoration: "none", alignSelf: "center" }}
          >
            Request CV <Download size={14} />
          </a>
        </div>
      </Reveal>

      {/* ── Summary card ── */}
      <Reveal delay={0.1}>
        <div
          className="glass-card"
          style={{
            padding:      "2rem 2.5rem",
            marginBottom: "1.5rem",
            borderLeft:   "3px solid var(--mint)",
            borderRadius: "0 16px 16px 0",
          }}
        >
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            Professional Summary
          </p>
          <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "1rem" }}>
            Passionate full-stack developer with 2+ years of hands-on experience building
            modern web applications. Specialising in React and Node.js ecosystems, I deliver
            scalable, production-ready products — combining clean architecture, performant
            UIs, and reliable backend APIs to create complete digital solutions.
          </p>
        </div>
      </Reveal>

      {/* ── Key highlights ── */}
      <Reveal delay={0.15}>
        <div className="glass-card" style={{ padding: "2rem 2.5rem", marginBottom: "1.5rem" }}>
          <p className="section-label" style={{ marginBottom: "1.25rem" }}>Key Highlights</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}
              >
                <span
                  style={{
                    color:      "var(--mint)",
                    fontFamily: "var(--font-mono)",
                    fontSize:   "0.75rem",
                    flexShrink: 0,
                    marginTop:  "2px",
                  }}
                >
                  ▹
                </span>
                <span style={{ color: "var(--muted)", lineHeight: 1.7 }}>{h}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── Tech stack matrix ── */}
      <Reveal delay={0.2}>
        <div className="glass-card" style={{ padding: "2rem 2.5rem", marginBottom: "1.5rem" }}>
          <p className="section-label" style={{ marginBottom: "1.75rem" }}>Technical Stack</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {TECH_STACK.map((cat, i) => (
              <div
                key={cat.category}
                style={{
                  display:     "grid",
                  gridTemplateColumns: "150px 1fr",
                  gap:         "1rem",
                  alignItems:  "flex-start",
                }}
              >
                {/* Category label */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div
                    style={{
                      width:        6,
                      height:       6,
                      borderRadius: "50%",
                      background:   cat.color,
                      flexShrink:   0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily:    "var(--font-mono)",
                      fontSize:      "0.7rem",
                      color:         cat.color,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {cat.category}
                  </span>
                </div>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {cat.items.map(item => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── Education ── */}
      <Reveal delay={0.25}>
        <div className="glass-card" style={{ padding: "2rem 2.5rem" }}>
          <p className="section-label" style={{ marginBottom: "1.25rem" }}>Education</p>
          <div
            style={{
              display:        "flex",
              justifyContent: "space-between",
              alignItems:     "center",
              flexWrap:       "wrap",
              gap:            "0.5rem",
            }}
          >
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: "0.2rem" }}>
                Self-Taught Full-Stack Developer
              </h4>
              <p
                style={{
                  color:      "var(--mint)",
                  fontFamily: "var(--font-mono)",
                  fontSize:   "0.8rem",
                }}
              >
                Online Platforms, Personal Projects &amp; Real-World Experience
              </p>
            </div>
            <span
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "0.7rem",
                color:         "var(--muted)",
                padding:       "5px 14px",
                borderRadius:  100,
                border:        "1px solid var(--border)",
              }}
            >
              2021 — Present
            </span>
          </div>
        </div>
      </Reveal>

    </div>
  );
}