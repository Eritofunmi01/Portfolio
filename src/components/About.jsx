import { useEffect, useRef } from "react";

const STATS = [
  { value: "2+", label: "Year Experience" },
  { value: "5+", label: "Projects Built" },
  { value: "3+", label: "Certifications" },
  { value: "🇳🇬", label: "Based in Lagos" },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ref.current?.querySelectorAll("[data-anim]").forEach((el, i) => {
            el.style.animation = `fadeUp 0.7s ease forwards`;
            el.style.animationDelay = i * 110 + "ms";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <h2 data-anim style={{ opacity: 0 }} className="section-title">
          About Me
        </h2>
        <p data-anim style={{ opacity: 0 }} className="section-sub">
          A little about who I am and what drives me
        </p>

        <div className="about-grid">
          {/* Photo */}
          <div data-anim style={{ opacity: 0 }} className="about-photo">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                src="/Img/frame ass.png"
                alt="Sodiya Tofunmi Israel"
                style={{
                  width: 250,
                  height: 290,
                  objectFit: "cover",
                  borderRadius: 16,
                  border: "2px solid rgba(0,255,178,0.3)",
                }}
              />
              {/* Open to work badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: -14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "var(--bg2)",
                  border: "1px solid rgba(0,255,178,0.3)",
                  borderRadius: 999,
                  padding: "5px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    color: "var(--accent)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  Open to Work
                </span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p
              data-anim
              style={{
                opacity: 0,
                color: "var(--text)",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: 18,
              }}
            >
              I'm{" "}
              <strong style={{ color: "var(--accent)" }}>Sodiya Tofunmi Israel</strong>
              , an AI Automation engineer and full-stack developer based in
              Lagos, Nigeria. I started coding in early 2024, then went into AI
              automation in early 2026 making my understanding of codes and AI
              deep in it's root and haven't stopped since then — building
              workflows, AI Agents, web apps, and everything in between.
            </p>

            <p
              data-anim
              style={{
                opacity: 0,
                color: "var(--muted)",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              I'm ambitious, self-driven, and genuinely excited by technology.
              Currently deepening my knowledge in AI Automation. Open to
              full-time roles, part-time, contract and freelance work — I show
              up, I deliver and I keep growing.
            </p>

            {/* Stats */}
            <div
              data-anim
              style={{ opacity: 0 }}
              className="stats-grid"
              style2={{ marginBottom: 28 }}
            >
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="card"
                  style={{ textAlign: "center", padding: "18px 12px" }}
                >
                  <p
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "var(--accent)",
                      marginBottom: 4,
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--muted)",
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div
              data-anim
              style={{ opacity: 0, marginTop: 24 }}
              className="btn-row"
            >
              <a href="#projects" className="btn btn-solid">
                View My Work
              </a>
              <a href="/Sodiya_Tofunmi_Israel_CV.docx" download className="btn btn-outline">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
