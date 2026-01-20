import React, { useState, useEffect } from 'react'
import { ChevronDown, Download, ArrowRight, Database, BarChart3, TrendingUp } from 'lucide-react'
import eliasImage from '../assets/Elias.jpg'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = [
    'Analista de Datos',
    'Desarrollador de Dashboards',
    'Especialista en Business Intelligence',
    'Consultor de Datos'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [texts.length])

  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-data-dark via-data-gray to-data-dark"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-data-green/30 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-neon-green/30 animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-data-green/20 animate-pulse"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hola, soy{' '}
                <span className="gradient-text">Elias</span>
              </h1>
              <div className="h-8 md:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl md:text-2xl text-gray-300">
                  {texts[currentText]}
                </span>
                <span className="text-data-green ml-2 animate-pulse">|</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
              Transformo datos complejos en insights accionables. Especializado en análisis de datos, 
              desarrollo de dashboards y soluciones de Business Intelligence que impulsan la toma de decisiones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/CV_Analista_Datos_Elías_Carmin.pdf" download className="flex items-center justify-center space-x-2 bg-data-green text-data-dark px-6 py-3 rounded-lg hover:bg-neon-green transition-all duration-300 font-medium group">
                <Download size={20} />
                <span>Descargar CV</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={scrollToAbout}
                className="flex items-center justify-center space-x-2 border border-data-green text-data-green px-6 py-3 rounded-lg hover:bg-data-green hover:text-data-dark transition-all duration-300 font-medium"
              >
                <span>Conoce más</span>
                <ChevronDown size={20} />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-sm text-gray-400">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">1+</div>
                <div className="text-sm text-gray-400">Años Exp.</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-sm text-gray-400">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10">
                <img 
                  src={eliasImage} 
                  alt="Elias - Analista de Datos" 
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-data-green/30 shadow-2xl animate-float"
                />
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-data-green/20 rounded-full flex items-center justify-center animate-pulse">
                <Database className="text-data-green" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center animate-pulse-slow">
                <BarChart3 className="text-neon-green" size={24} />
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-data-green/20 rounded-full flex items-center justify-center animate-pulse">
                <TrendingUp className="text-data-green" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-data-green" size={24} />
      </div>
    </section>
  )
}

export default Hero 