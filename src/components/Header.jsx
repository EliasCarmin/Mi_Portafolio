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
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between h-12 sm:h-14">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-data-green rounded-lg flex items-center justify-center">
              <span className="text-data-dark font-bold text-xs sm:text-sm">E</span>
            </div>
            <span className="text-lg sm:text-xl font-bold gradient-text">Elias</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-data-green transition-colors duration-300 font-medium text-sm lg:text-base"
              >
                {item.name}
              </button>
            ))}
            <a href="/CV_Analista_Datos_Elías_Carmin.pdf" download="CV_Analista_Datos_Elías_Carmin.pdf" className="flex items-center space-x-1.5 bg-data-green text-data-dark px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg hover:bg-neon-green transition-colors duration-300 font-medium text-sm lg:text-base">
              <Download size={14} className="lg:w-4 lg:h-4" />
              <span>CV</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-data-green transition-colors duration-300 p-1"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 pb-3 border-t border-gray-700/50">
            <nav className="flex flex-col space-y-3 pt-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-data-green transition-colors duration-300 font-medium text-left text-sm py-1"
                >
                  {item.name}
                </button>
              ))}
              <a href="/CV_Analista_Datos_Elías_Carmin.pdf" download="CV_Analista_Datos_Elías_Carmin.pdf" className="flex items-center space-x-2 bg-data-green text-data-dark px-3 py-1.5 rounded-lg hover:bg-neon-green transition-colors duration-300 font-medium w-fit text-sm mt-2">
                <Download size={14} />
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