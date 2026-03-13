import { useEffect, useRef } from "react";
import Nav        from "./components/Nav";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Resume     from "./components/Resume";
import Experience from "./components/Experience";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";
import "./index.css";

/* ── Cursor glow that follows the mouse ── */
function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const onMove = (e) => {
      if (!ref.current) return;
      ref.current.style.left = `${e.clientX}px`;
      ref.current.style.top  = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(0,255,178,0.055) 0%, transparent 70%)",
        transition: "left 0.08s ease, top 0.08s ease",
      }}
    />
  );
}

/* ── Ambient floating particles ── */
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id:       i,
  size:     Math.random() * 2.5 + 0.8,
  x:        Math.random() * 100,
  y:        Math.random() * 100,
  duration: Math.random() * 10 + 6,
  delay:    Math.random() * 8,
}));

function Particles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-mint"
          style={{
            width:            p.size,
            height:           p.size,
            left:             `${p.x}%`,
            top:              `${p.y}%`,
            opacity:          0.1,
            animation:        `floatUp ${p.duration}s ${p.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-void">
      <CursorGlow />
      <Particles />

      {/* Noise grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.3]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      <Nav />

      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>

        {/* Dividers */}
        <div className="h-px bg-gradient-to-r from-transparent via-mint/10 to-transparent mx-8" />

        <section id="about">
          <About />
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-mint/10 to-transparent mx-8" />

        <section id="resume">
          <Resume />
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-mint/10 to-transparent mx-8" />

        <section id="experience">
          <Experience />
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-mint/10 to-transparent mx-8" />

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}