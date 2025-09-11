import React, { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Servicios', href: '#services' },
    { name: 'Contacto', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-data-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-data-green rounded-lg flex items-center justify-center">
              <span className="text-data-dark font-bold text-sm">E</span>
            </div>
            <span className="text-xl font-bold gradient-text">Elias</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-data-green transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
            <a href="/CV_Analista_Datos_Elías_Carmin.pdf" download className="flex items-center space-x-2 bg-data-green text-data-dark px-4 py-2 rounded-lg hover:bg-neon-green transition-colors duration-300 font-medium">
              <Download size={16} />
              <span>CV</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-data-green transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-data-green transition-colors duration-300 font-medium text-left"
                >
                  {item.name}
                </button>
              ))}
              <a href="/CV_Analista_Datos_Elías_Carmin.pdf" download className="flex items-center space-x-2 bg-data-green text-data-dark px-4 py-2 rounded-lg hover:bg-neon-green transition-colors duration-300 font-medium w-fit">
                <Download size={16} />
                <span>Descargar CV</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 