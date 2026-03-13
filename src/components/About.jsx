import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { MapPin, Mail, Phone, Globe, Server, Database, Cpu } from "lucide-react";

const SKILLS = {
  Frontend:  ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit"],
  Backend:   ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT Auth", "Socket.io"],
  Database:  ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "Prisma ORM"],
  Tools:     ["Git & GitHub", "Docker", "Vercel", "Linux CLI", "Figma", "VS Code"],
};

const BENTO = [
  { key: "Frontend", icon: <Globe    size={20} />, color: "#00FFB2", border: "rgba(0,255,178,0.18)",   bg: "rgba(0,255,178,0.06)",    count: "6 techs" },
  { key: "Backend",  icon: <Server   size={20} />, color: "#A78BFA", border: "rgba(167,139,250,0.18)", bg: "rgba(167,139,250,0.06)",  count: "6 techs" },
  { key: "Database", icon: <Database size={20} />, color: "#60A5FA", border: "rgba(96,165,250,0.18)",  bg: "rgba(96,165,250,0.06)",   count: "5 techs" },
  { key: "Tools",    icon: <Cpu      size={20} />, color: "#FB923C", border: "rgba(251,146,60,0.18)",   bg: "rgba(251,146,60,0.06)",   count: "6 items" },
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

export default function About() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <div className="section-wrap">

      {/* Heading */}
      <Reveal>
        <p className="section-label mb-3">// who I am</p>
        <h2
          className="font-display gradient-text leading-none mb-14"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
        >
          ABOUT ME
        </h2>
      </Reveal>

      {/* Top grid: Bio + Bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

        {/* Bio card */}
        <Reveal delay={0.1}>
          <div className="glass-card p-8 h-full">
            {/* Avatar */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center font-display text-2xl text-void mb-6 shrink-0"
              style={{ background: "linear-gradient(135deg, #00FFB2, #7C3AED)" }}
            >
              STI
            </div>

            <h3 className="text-lg font-semibold mb-1">Sodiya Tofunmi Israel</h3>
            <p className="font-mono text-[0.72rem] text-mint tracking-[0.12em] mb-5">
              Full-Stack Developer
            </p>

            <p className="text-dim leading-[1.85] text-[0.95rem] mb-3">
              I'm a full-stack developer based in Lagos, Nigeria — passionate about crafting
              products that sit at the intersection of beautiful design and clean, maintainable
              engineering.
            </p>
            <p className="text-dim leading-[1.85] text-[0.95rem]">
              I turn complex ideas into fast, polished web applications — from pixel-perfect UIs
              to rock-solid backend systems. Every project I touch is built with intention.
            </p>

            {/* Contact info */}
            <div className="mt-6 pt-5 border-t border-mint/10 flex flex-col gap-3">
              {[
                { icon: <MapPin size={13} />, text: "Lagos, Nigeria"                  },
                { icon: <Mail   size={13} />, text: "sodiyaeritofunmi15@gmail.com"     },
                { icon: <Phone  size={13} />, text: "+234 806 906 2202"                },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-dim text-[0.88rem]">
                  <span className="text-mint shrink-0">{icon}</span>
                  <span className="break-all">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bento 2×2 */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 gap-3 h-full">
            {BENTO.map((item, i) => (
              <motion.div
                key={item.key}
                className="glass-card p-5 cursor-pointer"
                style={{
                  borderColor: activeTab === item.key ? item.border : undefined,
                  background:  activeTab === item.key ? item.bg     : undefined,
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                onClick={() => setActiveTab(item.key)}
              >
                <span style={{ color: item.color }}>{item.icon}</span>
                <p className="font-semibold mt-3 mb-0.5">{item.key}</p>
                <p className="font-mono text-[0.68rem] text-dim tracking-[0.08em]">
                  {item.count}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Skills panel */}
      <Reveal delay={0.3}>
        <div className="glass-card p-7">
          {/* Tab row */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.keys(SKILLS).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-mono text-[0.72rem] px-4 py-1.5 rounded-full border transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? "border-mint text-mint bg-mint/8"
                    : "border-mint/10 text-dim bg-transparent hover:border-mint/30 hover:text-snow"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tag cloud */}
          <div className="flex flex-wrap gap-2 min-h-[2.5rem]">
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
    </div>
  );
}