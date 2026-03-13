import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

/* ── Work timeline ── */
const EXPERIENCES = [
  {
    role:        "Freelance Full-Stack Developer",
    company:     "Self-Employed",
    period:      "2023 — Present",
    badge:       "Freelance",
    color:       "#00FFB2",
    description: "Building modern, performant web applications for clients across different industries. Delivering complete end-to-end solutions — from UI/UX design to backend APIs, database architecture, and cloud deployment.",
    tech:        ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
  },
  {
    role:        "Frontend Developer",
    company:     "Personal Projects",
    period:      "2022 — 2023",
    badge:       "Projects",
    color:       "#A78BFA",
    description: "Built and shipped multiple production-ready React applications, refining skills in state management, API integration, responsive design, and performance optimisation across real-world use cases.",
    tech:        ["React", "Redux", "Firebase", "REST APIs", "CSS Modules"],
  },
  {
    role:        "Web Development — Foundation",
    company:     "Self-Taught",
    period:      "2021 — 2022",
    badge:       "Learning",
    color:       "#60A5FA",
    description: "Deep dived into the fundamentals of the web — mastering HTML, CSS, and JavaScript before progressing rapidly into React, Node.js, and full-stack development patterns.",
    tech:        ["HTML5", "CSS3", "JavaScript", "React"],
  },
];

/* ── Projects grid ── */
const PROJECTS = [
  {
    name:        "E-Commerce Platform",
    desc:        "A full-featured online store with product management, cart, checkout, and payment integration built with React and Node.js.",
    tech:        ["React", "Node.js", "MongoDB", "Stripe"],
    color:       "#00FFB2",
    github:      "https://github.com/Eritofunmi01",
    live:        null,
  },
  {
    name:        "Task Management App",
    desc:        "Real-time collaborative task board with drag-and-drop, team workspaces, and deadline tracking powered by Socket.io.",
    tech:        ["React", "Socket.io", "Express", "PostgreSQL"],
    color:       "#A78BFA",
    github:      "https://github.com/Eritofunmi01",
    live:        null,
  },
  {
    name:        "Portfolio Website",
    desc:        "This very portfolio — built with React, Framer Motion, and a fully custom design system. Scroll-based, animated, and performance-first.",
    tech:        ["React", "Framer Motion", "Tailwind CSS"],
    color:       "#60A5FA",
    github:      "https://github.com/Eritofunmi01",
    live:        null,
  },
  {
    name:        "REST API Service",
    desc:        "Scalable RESTful API with JWT authentication, role-based access control, and rate limiting built for multiple client types.",
    tech:        ["Node.js", "Express", "MongoDB", "JWT"],
    color:       "#FB923C",
    github:      "https://github.com/Eritofunmi01",
    live:        null,
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

export default function Experience() {
  return (
    <div className="section-wrap">

      {/* ── Work Experience heading ── */}
      <Reveal>
        <p className="section-label" style={{ marginBottom: "1rem" }}>// career path</p>
        <h2
          className="display-text"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", marginBottom: "3.5rem" }}
        >
          EXPERIENCE &amp; <span className="gradient-text">WORK</span>
        </h2>
      </Reveal>

      {/* ── Timeline ── */}
      <div style={{ position: "relative", paddingLeft: "3rem", marginBottom: "6rem" }}>
        {/* Vertical track */}
        <div className="timeline-track" />

        {EXPERIENCES.map((exp, i) => (
          <Reveal key={i} delay={i * 0.12}>
            <div style={{ position: "relative", marginBottom: "2rem" }}>
              {/* Glowing dot */}
              <div
                style={{
                  position:     "absolute",
                  left:         -42,
                  top:          24,
                  width:        14,
                  height:       14,
                  borderRadius: "50%",
                  background:   exp.color,
                  boxShadow:    `0 0 14px ${exp.color}`,
                  border:       `2px solid var(--black)`,
                }}
              />

              <div className="glass-card" style={{ padding: "2rem" }}>
                {/* Top row */}
                <div
                  style={{
                    display:        "flex",
                    justifyContent: "space-between",
                    alignItems:     "flex-start",
                    flexWrap:       "wrap",
                    gap:            "0.75rem",
                    marginBottom:   "1rem",
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.2rem" }}>
                      {exp.role}
                    </h3>
                    <p
                      style={{
                        color:      exp.color,
                        fontFamily: "var(--font-mono)",
                        fontSize:   "0.78rem",
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.4rem" }}>
                    <span
                      style={{
                        fontFamily:    "var(--font-mono)",
                        fontSize:      "0.68rem",
                        padding:       "4px 12px",
                        borderRadius:  100,
                        border:        `1px solid ${exp.color}40`,
                        color:         exp.color,
                        background:    `${exp.color}0E`,
                      }}
                    >
                      {exp.badge}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize:   "0.68rem",
                        color:      "var(--muted)",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  {exp.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {exp.tech.map(t => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ── Projects heading ── */}
      <Reveal>
        <p className="section-label" style={{ marginBottom: "1rem" }}>// what I've built</p>
        <h2
          className="display-text"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", marginBottom: "3rem" }}
        >
          FEATURED <span className="gradient-text">PROJECTS</span>
        </h2>
      </Reveal>

      {/* ── Projects grid ── */}
      <div
        style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap:                 "1.5rem",
        }}
      >
        {PROJECTS.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.09}>
            <motion.div
              className="glass-card"
              whileHover={{ y: -6, borderColor: `${project.color}50` }}
              transition={{ duration: 0.22 }}
              style={{ padding: "2rem", height: "100%", display: "flex", flexDirection: "column" }}
            >
              {/* Top accent line */}
              <div
                style={{
                  height:       2,
                  background:   `linear-gradient(90deg, ${project.color}, transparent)`,
                  borderRadius: 2,
                  marginBottom: "1.5rem",
                }}
              />

              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.75rem" }}>
                {project.name}
              </h3>

              <p
                style={{
                  color:      "var(--muted)",
                  lineHeight: 1.75,
                  fontSize:   "0.9rem",
                  flex:       1,
                  marginBottom: "1.5rem",
                }}
              >
                {project.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                {project.tech.map(t => (
                  <span key={t} className="skill-tag" style={{ fontSize: "0.65rem" }}>{t}</span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "1rem" }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display:        "flex",
                    alignItems:     "center",
                    gap:            "0.4rem",
                    color:          "var(--muted)",
                    fontFamily:     "var(--font-mono)",
                    fontSize:       "0.72rem",
                    textDecoration: "none",
                    transition:     "color 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = project.color}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                >
                  <Github size={14} /> Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display:        "flex",
                      alignItems:     "center",
                      gap:            "0.4rem",
                      color:          "var(--muted)",
                      fontFamily:     "var(--font-mono)",
                      fontSize:       "0.72rem",
                      textDecoration: "none",
                      transition:     "color 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = project.color}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}