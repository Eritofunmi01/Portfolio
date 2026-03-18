import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import Contact  from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--void)' }}>

      {/* ── Sticky navigation ── */}
      <Navbar />

      <main>
        <section id="hero">    <Hero />     </section>
        <section id="about">   <About />    </section>
        <section id="skills">  <Skills />   </section>
        <section id="projects"><Projects /> </section>
        <section id="contact"> <Contact />  </section>
      </main>

      {/* ── Footer ── */}
      <footer className="text-center py-8 border-t" style={{ borderColor: 'var(--border)' }}>
        <p className="font-mono text-xs text-dim">
          © {new Date().getFullYear()} Sodiya Tofunmi — Designed &amp; built from Lagos 🇳🇬
        </p>
      </footer>

    </div>
  )
}