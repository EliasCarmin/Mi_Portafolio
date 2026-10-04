import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Clients from './components/Clients'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatWidget from './components/chat/ChatWidget'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-data-dark">
      <Header />
      <main>
        <Hero />
        <Clients />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App
