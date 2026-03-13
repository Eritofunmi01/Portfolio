<<<<<<< HEAD
import { useEffect, useRef } from "react";
import Nav        from "./components/Nav";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Resume     from "./components/Resume";
import Experience from "./components/Experience";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";
import "./index.css";
=======
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Header from './components/Header'
import Body from './components/Body'
import Resume from './components/Resume'
import Contact from './components/Contact'
import About from './components/About'

>>>>>>> caac7e88ac9fe47ce3178312f114c90ed9d268ad

/* ── Ambient floating particles ── */
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  size:     Math.random() * 2.5 + 0.8,
  x:        Math.random() * 100,
  y:        Math.random() * 100,
  duration: Math.random() * 10 + 6,
  delay:    Math.random() * 8,
}));

function Particles() {
  return (
<<<<<<< HEAD
    <div style={{
      position: "fixed", inset: 0,
      pointerEvents: "none", zIndex: 0, overflow: "hidden",
    }}>
      {PARTICLES.map(p => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            width:  p.size,
            height: p.size,
            borderRadius: "50%",
            background: "var(--mint)",
            left:  `${p.x}%`,
            top:   `${p.y}%`,
            animation: `floatUp ${p.duration}s ${p.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
=======
    <>
    <Router>
      <Routes>

        <Route path='/' element={
          <>
            {/* <Header/> */}
            <Body />
          </>
        } />

        <Route path='/resume' element={
          <>
            <Header />
            <Resume />
          </>
        } />

        <Route path='/contact' element={
          <>
            <Header />
            <Contact />
          </>
        } />

        

        <Route path='/about' element={
          <>
            <Header />
            <About />
          </>
        } />

      </Routes>
    </Router>
    </>
  )
>>>>>>> caac7e88ac9fe47ce3178312f114c90ed9d268ad
}

/* ── Cursor glow that tracks mouse ── */
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
  return <div ref={ref} className="cursor-glow" />;
}

export default function App() {
  return (
    <div
      className="noise"
      style={{ background: "var(--black)", minHeight: "100vh", position: "relative" }}
    >
      {/* Global ambience */}
      <CursorGlow />
      <Particles />

      {/* Sticky navigation */}
      <Nav />

      {/* Page sections — each has its own id for scroll-spy */}
      <main style={{ position: "relative", zIndex: 2 }}>
        <section id="home">
          <Hero />
        </section>

        <div className="section-divider" />

        <section id="about">
          <About />
        </section>

        <div className="section-divider" />

        <section id="resume">
          <Resume />
        </section>

        <div className="section-divider" />

        <section id="experience">
          <Experience />
        </section>

        <div className="section-divider" />

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}