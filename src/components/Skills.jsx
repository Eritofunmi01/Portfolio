import { useEffect, useRef, useState } from "react";

const AI_SKILLS = [
  {
    category: "AI Automation",
    skills: [
      { name: "n8n Workflow Automation", pct: 90 },
      { name: "OpenAI API Integration", pct: 88 },
      { name: "AI Agents", pct: 82 },
      { name: "REST APIs", pct: 90 },
    ],
  },
  {
    category: "Workflow Engineering",
    skills: [
      { name: "Webhooks", pct: 90 },
      { name: "JavaScript", pct: 82 },
      { name: "JSON Data Processing", pct: 90 },
      { name: "Regex", pct: 72 },
    ],
  },
  {
    category: "Automation Stack",
    skills: [
      { name: "Airtable", pct: 80 },
      { name: "Supabase", pct: 78 },
      { name: "PostgreSQL", pct: 70 },
      { name: "Email Automation", pct: 90 },
    ],
  },
];

const WEB_SKILLS = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", pct: 80 },
      { name: "JavaScript", pct: 82 },
      { name: "HTML / CSS", pct: 90 },
      { name: "Tailwind CSS", pct: 88 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js / Express", pct: 72 },
      { name: "REST APIs", pct: 90 },
      { name: "Supabase", pct: 78 },
      { name: "PostgreSQL", pct: 70 },
    ],
  },
  {
    category: "Development Tools",
    skills: [
      { name: "Git / GitHub", pct: 82 },
      { name: "VS Code", pct: 95 },
      { name: "Vercel", pct: 90 },
      { name: "React Native", pct: 65 },
    ],
  },
];

const AI_TAGS = [
  "n8n",
  "OpenAI",
  "AI Agents",
  "Workflow Automation",
  "REST APIs",
  "Webhooks",
  "JavaScript",
  "JSON",
  "Regex",
  "Airtable",
  "Supabase",
  "PostgreSQL",
  "Email Automation",
];

const WEB_TAGS = [
  "React",
  "React Native",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "REST APIs",
  "Git",
  "GitHub",
  "Vercel",
];

function SkillBar({ name, pct, animate }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <span
          style={{ color: "var(--text)", fontSize: "0.92rem", fontWeight: 500 }}
        >
          {name}
        </span>
        <span
          style={{
            color: "var(--accent)",
            fontSize: "0.82rem",
            fontWeight: 600,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {pct}%
        </span>
      </div>
      <div
        style={{
          background: "var(--bg3)",
          borderRadius: 99,
          height: 6,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "var(--accent)",
            borderRadius: 99,
            width: animate ? `${pct}%` : "0%",
            transition: "width 1s ease",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnim(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="section"
      ref={ref}
      style={{ background: "var(--bg2)" }}
    >
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <p className="section-sub">
          AI automation, workflow engineering and full-stack development
          technologies I use to build intelligent business solutions.
        </p>

        <h3
          style={{
            marginTop: 45,
            marginBottom: 28,
            color: "var(--accent)",
            fontSize: "1.45rem",
            fontWeight: 700,
          }}
        >
          AI Automation
        </h3>

        <div className="skills-grid">
          {AI_SKILLS.map((group) => (
            <div key={group.category} className="card">
              <h3
                style={{
                  color: "var(--text)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: 20,
                  paddingBottom: 12,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {group.category}
              </h3>

              {group.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  pct={skill.pct}
                  animate={anim}
                />
              ))}
            </div>
          ))}
        </div>

        <h3
          style={{
            marginTop: 55,
            marginBottom: 28,
            color: "var(--accent)",
            fontSize: "1.45rem",
            fontWeight: 700,
          }}
        >
          Web Development
        </h3>

        <div className="skills-grid">
          {WEB_SKILLS.map((group) => (
            <div key={group.category} className="card">
              <h3
                style={{
                  color: "var(--text)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: 20,
                  paddingBottom: 12,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {group.category}
              </h3>

              {group.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  pct={skill.pct}
                  animate={anim}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tech tag cloud */}
        <div style={{ textAlign: "center" }}>
          <h3
            style={{
              color: "var(--text)",
              fontWeight: 700,
              fontSize: "1.25rem",
              marginBottom: 28,
            }}
          >
            Technologies I Work With
          </h3>

          <h4
            style={{
              color: "var(--accent)",
              marginBottom: 16,
            }}
          >
            AI Automation Stack
          </h4>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            {AI_TAGS.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "8px 18px",
                  borderRadius: 99,
                  background: "var(--bg3)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  fontSize: ".88rem",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h4
            style={{
              color: "var(--accent)",
              marginBottom: 16,
            }}
          >
            Web Development Stack
          </h4>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
            }}
          >
            {WEB_TAGS.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "8px 18px",
                  borderRadius: 99,
                  background: "var(--bg3)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  fontSize: ".88rem",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
