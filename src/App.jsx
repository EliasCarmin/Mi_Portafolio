import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular tiempo de carga
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-data-dark flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-data-green mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold gradient-text">Cargando Portfolio...</h2>
          <p className="text-gray-400 mt-2">Preparando datos para análisis</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-data-dark">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Services /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App 