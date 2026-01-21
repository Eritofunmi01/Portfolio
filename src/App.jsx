import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Header from './components/Header'
import Body from './components/Body'
import Resume from './components/Resume'
import Contact from './components/Contact'
import About from './components/About'
import Experience from './components/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
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

        <Route path='/experience' element={
          <>
            <Header />
            <Experience />
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
}

export default App
