import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Skills   from './components/Skills'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact  from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer style={{ borderTop: '1px solid var(--border)', padding: '24px 0', textAlign: 'center' }}>
        <p style={{ color: 'var(--muted)', fontSize: '0.88rem', fontFamily: "'JetBrains Mono', monospace" }}>
          © {new Date().getFullYear()} Sodiya Tofunmi — Built from Lagos 🇳🇬
        </p>
      </footer>
    </>
  )
}