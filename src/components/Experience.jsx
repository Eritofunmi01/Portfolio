import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Cloud, Wind, Thermometer, Droplets } from "lucide-react";

const EXPERIENCES = [
  {
    role:   "Freelance Full-Stack Developer",
    company:"Self-Employed",
    period: "2023 — Present",
    badge:  "Freelance",
    color:  "#00FFB2",
    desc:   "Building modern, performant web applications for clients across different industries. Delivering complete end-to-end solutions — UI design, backend APIs, database architecture, and cloud deployment.",
    tech:   ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
  },
  {
    role:   "Frontend Developer",
    company:"Personal Projects",
    period: "2022 — 2023",
    badge:  "Projects",
    color:  "#A78BFA",
    desc:   "Shipped multiple production-ready React applications, sharpening skills in state management, API integration, responsive design, and real-world performance optimisation.",
    tech:   ["React", "Redux", "Firebase", "REST APIs"],
  },
  {
    role:   "Web Development — Foundation",
    company:"Self-Taught",
    period: "2021 — 2022",
    badge:  "Learning",
    color:  "#60A5FA",
    desc:   "Immersed in web fundamentals — mastering HTML, CSS, and JavaScript before rapidly progressing into React, Node.js, and full-stack development patterns.",
    tech:   ["HTML5", "CSS3", "JavaScript", "React"],
  },
];

function Reveal({ children, delay = 0, className = "" }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── AtmosPal mock weather preview ── */
function WeatherPreview() {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background:   "linear-gradient(135deg, #0c1f3f 0%, #1a3a6b 50%, #0d2d4a 100%)",
        border:       "1px solid rgba(96,165,250,0.25)",
        padding:      "1.5rem",
        fontFamily:   "'JetBrains Mono', monospace",
      }}
    >
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <div
          className="ml-3 flex-1 rounded text-[0.6rem] text-blue-300/60 flex items-center px-2"
          style={{ background: "rgba(255,255,255,0.05)", height: 18 }}
        >
          atmospal-app.vercel.app
        </div>
      </div>

      {/* Weather UI mock */}
      <div className="flex flex-col gap-3">
        {/* City + temp */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-blue-200 text-[0.65rem] tracking-widest mb-1">LAGOS, NG</p>
            <div className="flex items-end gap-1">
              <span className="text-white font-display text-4xl leading-none">32°</span>
              <span className="text-blue-300 text-sm mb-1">C</span>
            </div>
            <p className="text-blue-300/80 text-[0.7rem] mt-1">Partly Cloudy</p>
          </div>
          <Cloud size={44} className="text-blue-300/60" />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mt-1">
          {[
            { icon: <Wind size={12} />,        label: "Wind",     val: "14 km/h" },
            { icon: <Droplets size={12} />,    label: "Humidity", val: "78%"     },
            { icon: <Thermometer size={12} />, label: "Feels",    val: "35°C"    },
          ].map(s => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1 rounded-lg py-2"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <span className="text-blue-300/70">{s.icon}</span>
              <span className="text-blue-300/50 text-[0.55rem]">{s.label}</span>
              <span className="text-white text-[0.7rem]">{s.val}</span>
            </div>
          ))}
        </div>

        {/* 5-day forecast strip */}
        <div className="flex justify-between mt-1">
          {["Mon","Tue","Wed","Thu","Fri"].map((day, i) => (
            <div key={day} className="flex flex-col items-center gap-1">
              <span className="text-blue-300/50 text-[0.55rem]">{day}</span>
              <Cloud size={10} className="text-blue-300/60" />
              <span className="text-white text-[0.65rem]">{28 + i}°</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="section-wrap">

      {/* ── EXPERIENCE ── */}
      <Reveal>
        <p className="section-label mb-3">// career path</p>
        <h2
          className="font-display leading-none mb-14"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
        >
          EXPERIENCE &amp; <span className="gradient-text">WORK</span>
        </h2>
      </Reveal>

      {/* Timeline */}
      <div className="relative pl-12 mb-24">
        <div className="timeline-track" />
        {EXPERIENCES.map((exp, i) => (
          <Reveal key={i} delay={i * 0.12}>
            <div className="relative mb-6">
              {/* Dot */}
              <div
                className="absolute -left-[41px] top-6 w-3.5 h-3.5 rounded-full border-2 border-void"
                style={{
                  background: exp.color,
                  boxShadow:  `0 0 12px ${exp.color}`,
                }}
              />

              <div className="glass-card p-6 md:p-8">
                <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                  <div>
                    <h3 className="font-semibold text-[1.05rem] mb-1">{exp.role}</h3>
                    <p
                      className="font-mono text-[0.78rem]"
                      style={{ color: exp.color }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <span
                      className="font-mono text-[0.68rem] px-3 py-1 rounded-full"
                      style={{
                        color:      exp.color,
                        background: `${exp.color}12`,
                        border:     `1px solid ${exp.color}35`,
                      }}
                    >
                      {exp.badge}
                    </span>
                    <span className="font-mono text-[0.68rem] text-dim">{exp.period}</span>
                  </div>
                </div>

                <p className="text-dim leading-[1.8] text-[0.93rem] mb-5">{exp.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map(t => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ── PROJECTS ── */}
      <Reveal>
        <p className="section-label mb-3">// what I've shipped</p>
        <h2
          className="font-display leading-none mb-12"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
        >
          FEATURED <span className="gradient-text">PROJECT</span>
        </h2>
      </Reveal>

      {/* AtmosPal — hero project card */}
      <Reveal delay={0.1}>
        <motion.div
          className="glass-card overflow-hidden"
          whileHover={{ borderColor: "rgba(96,165,250,0.4)" }}
          transition={{ duration: 0.25 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left: info */}
            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                {/* Project number */}
                <span className="font-mono text-[0.65rem] text-dim tracking-[0.2em] block mb-6">
                  01 / FEATURED PROJECT
                </span>

                {/* Name + tagline */}
                <h3 className="font-display text-[2.8rem] leading-none mb-2">
                  <span className="text-snow">Atmos</span>
                  <span style={{ color: "#60A5FA" }}>Pal</span>
                </h3>
                <p className="font-mono text-[0.8rem] text-dim mb-6">
                  Your Friendly Weather Companion 🌍
                </p>

                {/* Description */}
                <p className="text-dim leading-[1.85] text-[0.95rem] mb-8">
                  A real-time weather dashboard that delivers accurate current conditions and
                  5-day forecasts for any city in the world. Clean UI, instant search,
                  and live data from the OpenWeatherMap API — all wrapped in a fast,
                  mobile-first React app.
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "Real-time weather data",
                    "5-day forecast",
                    "Global city search",
                    "Mobile-first design",
                  ].map(f => (
                    <span
                      key={f}
                      className="font-mono text-[0.65rem] px-3 py-1 rounded-full"
                      style={{
                        color:      "#60A5FA",
                        background: "rgba(96,165,250,0.08)",
                        border:     "1px solid rgba(96,165,250,0.2)",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div>
                <p className="font-mono text-[0.65rem] text-dim tracking-[0.15em] mb-3 uppercase">
                  Built with
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["React", "Vite", "Tailwind CSS", "OpenWeatherMap API"].map(t => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href="https://atmospal-app.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary !px-5 !py-2.5 !text-[0.75rem]"
                  >
                    Live App <ExternalLink size={13} />
                  </a>
                  <a
                    href="https://github.com/Eritofunmi01"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline !px-5 !py-2.5 !text-[0.75rem]"
                  >
                    GitHub <Github size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: visual preview */}
            <div
              className="p-8 md:p-10 flex items-center justify-center"
              style={{ background: "rgba(8,12,24,0.4)" }}
            >
              <div className="w-full max-w-[340px]">
                <WeatherPreview />
              </div>
            </div>
          </div>
        </motion.div>
      </Reveal>

      {/* More projects coming note */}
      <Reveal delay={0.2}>
        <div className="mt-6 glass-card p-5 flex items-center gap-4">
          <div
            className="w-2 h-2 rounded-full bg-mint animate-pulse shrink-0"
            style={{ boxShadow: "0 0 8px #00FFB2" }}
          />
          <p className="font-mono text-[0.75rem] text-dim">
            More projects currently in development — check back soon or visit my{" "}
            <a
              href="https://github.com/Eritofunmi01"
              target="_blank"
              rel="noreferrer"
              className="text-mint hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </Reveal>
    </div>
  );
}