import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download } from "lucide-react";

const TECH_STACK = [
  { category: "Languages",    color: "#00FFB2", items: ["JavaScript (ES2024)", "TypeScript", "HTML5", "CSS3", "SQL"] },
  { category: "Frontend",     color: "#A78BFA", items: ["React.js", "Next.js 14", "Tailwind CSS", "Framer Motion", "Redux Toolkit"] },
  { category: "Backend",      color: "#60A5FA", items: ["Node.js", "Express.js", "REST API Design", "GraphQL", "JWT & OAuth2"] },
  { category: "Database",     color: "#FB923C", items: ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "Prisma ORM"] },
  { category: "DevOps/Tools", color: "#F472B6", items: ["Git & GitHub", "Docker", "Vercel", "Linux CLI", "Figma"] },
];

const HIGHLIGHTS = [
  "Delivered 20+ full-stack web projects from concept to cloud deployment.",
  "Integrated third-party APIs — payment gateways, weather APIs, social auth & email services.",
  "Built REST and GraphQL APIs consumed by both web and mobile clients.",
  "Worked with clients across Nigeria to digitise and automate business workflows.",
  "Consistently shipped accessible, responsive, mobile-first interfaces.",
];

function Reveal({ children, delay = 0 }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
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

      {/* Header */}
      <Reveal>
        <div className="flex flex-wrap justify-between items-end gap-5 mb-14">
          <div>
            <p className="section-label mb-3">// credentials</p>
            <h2
              className="font-display leading-none"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              RESUME &amp; <span className="gradient-text">SKILLS</span>
            </h2>
          </div>
          <a
            href="mailto:sodiyaeritofunmi15@gmail.com?subject=Resume%20Request%20from%20Portfolio"
            className="btn-primary self-end"
          >
            Request CV <Download size={14} />
          </a>
        </div>
      </Reveal>

      {/* Summary */}
      <Reveal delay={0.1}>
        <div
          className="glass-card p-7 md:p-9 mb-4"
          style={{ borderLeft: "3px solid #00FFB2", borderRadius: "0 16px 16px 0" }}
        >
          <p className="section-label mb-3">Professional Summary</p>
          <p className="text-dim leading-[1.9] text-[0.97rem]">
            Passionate full-stack developer with 2+ years of hands-on experience building
            modern web applications. Specialising in React and Node.js ecosystems, I deliver
            scalable, production-ready products — combining clean architecture, performant UIs,
            and reliable backend APIs to create complete digital solutions.
          </p>
        </div>
      </Reveal>

      {/* Highlights */}
      <Reveal delay={0.15}>
        <div className="glass-card p-7 md:p-9 mb-4">
          <p className="section-label mb-5">Key Highlights</p>
          <div className="flex flex-col gap-3.5">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={i}
                className="flex gap-3 items-start"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <span className="text-mint font-mono text-xs shrink-0 mt-[3px]">▹</span>
                <span className="text-dim leading-[1.75] text-[0.95rem]">{h}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Tech stack */}
      <Reveal delay={0.2}>
        <div className="glass-card p-7 md:p-9 mb-4">
          <p className="section-label mb-7">Technical Stack</p>
          <div className="flex flex-col gap-5">
            {TECH_STACK.map(cat => (
              <div
                key={cat.category}
                className="flex flex-col sm:flex-row sm:items-start gap-3"
              >
                {/* Category label */}
                <div className="flex items-center gap-2 sm:w-36 shrink-0">
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: cat.color }}
                  />
                  <span
                    className="font-mono text-[0.7rem] tracking-[0.08em]"
                    style={{ color: cat.color }}
                  >
                    {cat.category}
                  </span>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map(item => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Education */}
      <Reveal delay={0.25}>
        <div className="glass-card p-7 md:p-9">
          <p className="section-label mb-5">Education</p>
          <div className="flex flex-wrap justify-between items-start gap-3">
            <div>
              <h4 className="font-semibold text-[1.05rem] mb-1">
                Self-Taught Full-Stack Developer
              </h4>
              <p className="text-mint font-mono text-[0.8rem]">
                Online Platforms, Personal Projects &amp; Real-World Experience
              </p>
            </div>
            <span className="font-mono text-[0.7rem] text-dim border border-mint/10 rounded-full px-3.5 py-1 shrink-0">
              2021 — Present
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}