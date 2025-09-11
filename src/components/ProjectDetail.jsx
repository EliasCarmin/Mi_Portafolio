import React, { useState, useEffect } from 'react'
import { ArrowLeft, ExternalLink, Github, Code, Database, BarChart3, Zap, Target, Award, CheckCircle2, PlayCircle, Calendar, Users, TrendingUp } from 'lucide-react'
import ImageLoader from './ImageLoader'

// Estilos para ocultar scrollbar
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`

const ProjectDetail = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview')
  const [isVisible, setIsVisible] = useState(false)
  const [isGalleryExpanded, setIsGalleryExpanded] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!project) return null

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  const getProjectContent = () => {
    switch(project.htmlContent) {
      case 'AppSheet':
        return <AppSheetContent />
      case 'CupAmerica2024':
        return <CopaAmericaContent />
      case 'Dashboards':
        return <DashboardsContent />
      case 'Excel':
        return <ExcelContent />
      case 'SistemaRecomendacion':
        return <SistemaRecomendacionContent />
      case 'GmailPagos':
        return <GmailPagosContent />
      default:
        return <DefaultContent />
    }
  }

  const getResultsContent = (project) => {
    switch(project.htmlContent) {
      case 'GmailPagos':
        return <GmailPagosResults project={project} />
      case 'AppSheet':
        return <AppSheetResults project={project} />
      case 'CupAmerica2024':
        return <CopaAmericaResults project={project} />
      case 'Dashboards':
        return <DashboardsResults project={project} />
      case 'Excel':
        return <ExcelResults project={project} />
      case 'SistemaRecomendacion':
        return <SistemaRecomendacionResults project={project} />
      default:
        return <DefaultResults project={project} />
    }
  }

  const tabs = [
    { id: 'overview', name: 'Resumen', icon: <Target size={18} /> },
    { id: 'details', name: 'Detalles', icon: <Code size={18} /> },
    { id: 'gallery', name: 'Galería', icon: <PlayCircle size={18} /> },
    { id: 'results', name: 'Resultados', icon: <Award size={18} /> }
  ]

  return (
    <>
      <style>{scrollbarHideStyles}</style>
      <div className={`fixed inset-0 z-50 bg-data-dark/95 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`h-full overflow-y-auto transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
          {/* Header */}
          <div className="sticky top-0 z-10 bg-data-dark/90 backdrop-blur-md border-b border-data-green/20">
            <div className="container-custom py-3 sm:py-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={handleClose}
                  className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-data-green transition-colors group"
                >
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm sm:text-base">Volver</span>
                </button>
                
                <div className="flex items-center space-x-2 sm:space-x-4">
                  {project.github !== '#' && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 sm:space-x-2 bg-data-light px-2 sm:px-4 py-2 rounded-lg hover:bg-data-green hover:text-data-dark transition-colors"
                    >
                      <Github size={16} />
                      <span className="hidden sm:inline text-sm">GitHub</span>
                    </a>
                  )}
                  <button className="flex items-center space-x-1 sm:space-x-2 bg-data-green text-data-dark px-2 sm:px-4 py-2 rounded-lg hover:bg-neon-green transition-colors font-medium">
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-data-green/10 to-transparent"></div>
            <div className="container-custom py-8 md:py-16">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-data-green/10 text-data-green px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {project.category === 'dashboard' && <BarChart3 size={14} />}
                    {project.category === 'automation' && <Zap size={14} />}
                    {project.category === 'machine-learning' && <Database size={14} />}
                    <span className="capitalize text-xs sm:text-sm">{project.category.replace('-', ' ')}</span>
                  </div>
                  
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
                    {project.title}
                  </h1>
                  
                  <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-data-light rounded-lg glow-border">
                        <div className="text-base sm:text-lg font-bold text-data-green mb-1">{value}</div>
                        <div className="text-xs text-gray-400 capitalize leading-tight">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative order-first lg:order-last">
                  <div className="absolute inset-0 bg-gradient-to-r from-data-green/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
                  <ImageLoader
                    src={project.image} 
                    alt={project.title}
                    className="relative w-full h-48 sm:h-64 lg:h-80 object-contain bg-data-dark rounded-2xl glow-border"
                    fallbackSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="sticky top-[64px] sm:top-[88px] z-10 bg-data-dark/90 backdrop-blur-md border-b border-data-green/20">
            <div className="container-custom">
              <div className="flex overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-3 sm:py-4 font-medium transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'text-data-green border-b-2 border-data-green bg-data-green/5'
                        : 'text-gray-400 hover:text-white hover:bg-data-light/50'
                    }`}
                  >
                    <span className="text-sm sm:text-base">{tab.icon}</span>
                    <span className="text-sm sm:text-base">{tab.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="container-custom py-6 sm:py-8 md:py-12">
            {activeTab === 'overview' && (
              <div className="space-y-8 sm:space-y-12">
                {/* Technologies */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text">Tecnologías Utilizadas</h2>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 sm:px-4 py-1 sm:py-2 bg-data-light text-data-green rounded-full border border-data-green/30 hover:bg-data-green/10 transition-colors text-sm sm:text-base"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text">Características Principales</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 sm:p-4 bg-data-light rounded-lg glow-border">
                        <CheckCircle2 className="text-data-green flex-shrink-0" size={18} />
                        <span className="text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'details' && getProjectContent()}
            {activeTab === 'gallery' && <GalleryContent project={project} isGalleryExpanded={isGalleryExpanded} setIsGalleryExpanded={setIsGalleryExpanded} />}
            {activeTab === 'results' && getResultsContent(project)}
          </div>
        </div>
      </div>
    </>
  )
}

// Componentes de contenido específico para cada proyecto
const GmailPagosContent = () => (
  <div className="space-y-12">
    <div className="bg-data-light p-8 rounded-xl glow-border">
      <h2 className="text-2xl font-bold mb-6 gradient-text">Descripción del Proyecto</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
      El siguiente proyecto tiene como objetivo automatizar mis gastos (egresos bancarios), 
      cada que realizo un yapeo, plin ó transferencia automáticamente en menos de 1 minuto los datos de dicha operación son guardadas y pueden ser visualizadas a través de mi app personal de Finanzas Personales.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Conocimientos Empleados</h3>
        <ul className="space-y-3">
          {[
            'Programación con Python para el procesamiento de lenguaje natural',
            'Programación con Python para la creación de APIS',
            'Uso de Google Cloud Functions para el alojamiento de la API Serverless',
            'Diseño de flujo de datos',
            'Diseño de base de datos',
            'Uso de Inteligencia Artificial para generar código',
            'Uso de AppScript para automatizar procesos',
            'Uso de Vercel para alojar la aplicación',
            'Uso de Neon para la base de datos',
          ].map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-data-green rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Retos Afrontados</h3>
        <div className="space-y-4 text-gray-300">
          <p>Los principales desafíos incluyen:</p>
          <ul className="space-y-2">
            <li>• El cómo automatizar el proceso de captura de datos de cada pago</li>
            <li>• Políticas CORS para la API</li>
            <li>• Diseño de la base de datos</li>
            <li>• Limitaciones de la API de Gmail</li>
            <li>• El procesamiento de lenguaje natural para el reconocimiento de texto</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

const AppSheetContent = () => (
  <div className="space-y-12">
    <div className="bg-data-light p-8 rounded-xl glow-border">
      <h2 className="text-2xl font-bold mb-6 gradient-text">Descripción del Proyecto</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Los siguientes proyectos fueron creados utilizando AppSheet, un SaaS de Google que permite desarrollar 
        aplicaciones No Code. Su objetivo es mejorar procesos y automatizar tareas dentro de la empresa. 
        Además, se integran con otras áreas para optimizar la gestión de pedidos y ventas.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Conocimientos Empleados</h3>
        <ul className="space-y-3">
          {[
            'Conceptos de Bases de Datos',
            'Configurar vistas básicas: Tabla, Formulario, Gráficos.',
            'Expresiones Básicas en AppSheet Bi',
            'Aplicar filtros y ordenar datos en las vista',
            'Acciones, botones y automatización con reportes'
          ].map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-data-green rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Retos Afrontados</h3>
        <div className="space-y-4 text-gray-300">
          <p>Los principales desafíos incluyen:</p>
          <ul className="space-y-2">
            <li>• Optimización del rendimiento con miles de registros</li>
            <li>• Manejo de relaciones entre tablas</li>
            <li>• Automatizaciones complejas entre sistemas</li>
            <li>• Limitaciones de personalización de interfaz</li>
            <li>• Gestión de seguridad y permisos de usuarios</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

const CopaAmericaContent = () => (
  <div className="space-y-12">
    <div className="bg-data-light p-8 rounded-xl glow-border">
      <h2 className="text-2xl font-bold mb-6 gradient-text">Metodología del Proyecto</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Este proyecto de Data Science utiliza técnicas de web scraping para la recolección de datos y 
        procesos ETL para su tratamiento. Para el pronóstico se utilizó un algoritmo de probabilidad 
        de Poisson, aunque se pretende reemplazarlo por algoritmos de Machine Learning en futuras versiones.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="text-center p-6 bg-data-dark rounded-lg border border-data-green/30">
          <div className="text-3xl font-bold text-data-green mb-2">16</div>
          <div className="text-gray-400">Equipos Analizados</div>
        </div>
        <div className="text-center p-6 bg-data-dark rounded-lg border border-data-green/30">
          <div className="text-3xl font-bold text-data-green mb-2">32</div>
          <div className="text-gray-400">Partidos Predichos</div>
        </div>
        <div className="text-center p-6 bg-data-dark rounded-lg border border-data-green/30">
          <div className="text-3xl font-bold text-data-green mb-2">85%</div>
          <div className="text-gray-400">Precisión Alcanzada</div>
        </div>
      </div>
    </div>

    <div className="bg-data-light p-6 rounded-xl glow-border">
      <h3 className="text-xl font-semibold mb-4 text-data-green">Proceso de Desarrollo</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-data-green rounded-full flex items-center justify-center text-data-dark font-bold">1</div>
          <div>
            <h4 className="font-semibold text-white">Recolección de Datos</h4>
            <p className="text-gray-400">Web scraping de estadísticas históricas usando Python y Selenium</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-data-green rounded-full flex items-center justify-center text-data-dark font-bold">2</div>
          <div>
            <h4 className="font-semibold text-white">Procesamiento ETL</h4>
            <p className="text-gray-400">Limpieza y transformación de datos con Pandas</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-data-green rounded-full flex items-center justify-center text-data-dark font-bold">3</div>
          <div>
            <h4 className="font-semibold text-white">Modelo Predictivo</h4>
            <p className="text-gray-400">Implementación del algoritmo de Poisson para predicciones</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const DashboardsContent = () => (
  <div className="space-y-12">
    <div className="bg-data-light p-8 rounded-xl glow-border">
      <h2 className="text-2xl font-bold mb-6 gradient-text">Filosofía de Diseño</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Los dashboards están diseñados para simplificar información compleja y mostrar solamente los datos 
        más relevantes junto con los KPIs cruciales. Se considera la estética, los colores, formatos y 
        la jerarquía visual (patrones Z y F) para captar la atención de los stakeholders y facilitar 
        la toma de decisiones estratégicas.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Principios de UX</h3>
        <ul className="space-y-3">
          {[
            'Jerarquía visual clara y efectiva',
            'Paleta de colores coherente y profesional',
            'Diseño responsive para múltiples dispositivos',
            'Interactividad intuitiva y fluida',
            'Storytelling con los datos'
          ].map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle2 className="text-data-green mt-0.5 flex-shrink-0" size={16} />
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Tipos de Dashboards</h3>
        <div className="space-y-4">
          <div className="p-4 bg-data-dark rounded-lg border-l-4 border-data-green">
            <h4 className="font-semibold text-white mb-1">Operacionales</h4>
            <p className="text-gray-400 text-sm">Monitoreo en tiempo real de KPIs críticos</p>
          </div>
          <div className="p-4 bg-data-dark rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-white mb-1">Analíticos</h4>
            <p className="text-gray-400 text-sm">Análisis profundo de tendencias y patrones</p>
          </div>
          <div className="p-4 bg-data-dark rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-white mb-1">Estratégicos</h4>
            <p className="text-gray-400 text-sm">Visión ejecutiva para toma de decisiones</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const ExcelContent = () => (
  <div className="space-y-12">
    <div className="bg-data-light p-8 rounded-xl glow-border">
      <h2 className="text-2xl font-bold mb-6 gradient-text">Automatización con VBA</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Desarrollo de soluciones de automatización en Excel utilizando VBA, desde macros básicos 
        hasta formularios personalizados complejos. Estas herramientas mejoran significativamente 
        la productividad y optimizan procesos repetitivos en el entorno empresarial.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Competencias Técnicas</h3>
        <div className="space-y-3">
          {[
            'Fundamentos de VBA y programación orientada a objetos',
            'Estructuras de control y manejo de eventos',
            'Manipulación avanzada de objetos Excel',
            'Desarrollo de UserForms personalizados',
            'Automatización de archivos y procesos',
            'Integración con bases de datos externas',
            'Optimización de rendimiento y memoria'
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-data-green rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Casos de Uso</h3>
        <div className="space-y-4">
          <div className="p-4 bg-data-dark rounded-lg">
            <h4 className="font-semibold text-data-green mb-2">Costeo de Importación</h4>
            <p className="text-gray-400 text-sm">Sistema automatizado para cálculo de costos de importación con múltiples variables</p>
          </div>
          <div className="p-4 bg-data-dark rounded-lg">
            <h4 className="font-semibold text-data-green mb-2">Control de Inventarios</h4>
            <p className="text-gray-400 text-sm">Gestión automatizada de entradas, salidas y stock mínimo</p>
          </div>
          <div className="p-4 bg-data-dark rounded-lg">
            <h4 className="font-semibold text-data-green mb-2">Generador de Reportes</h4>
            <p className="text-gray-400 text-sm">Automatización de reportes financieros y operativos</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const SistemaRecomendacionContent = () => (
  <div className="space-y-12">
    <div className="bg-data-light p-8 rounded-xl glow-border">
      <h2 className="text-2xl font-bold mb-6 gradient-text">Algoritmo de Similitud</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Sistema de recomendación basado en filtrado colaborativo utilizando el algoritmo de similitud 
        de coseno. El proyecto integra múltiples tecnologías: SQL Server para consultas, Python para 
        procesamiento ETL, y Power BI para visualización interactiva de resultados.
      </p>
    </div>

    <div className="bg-data-light p-6 rounded-xl glow-border">
      <h3 className="text-xl font-semibold mb-6 text-data-green">Arquitectura del Sistema</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-data-dark rounded-lg border border-data-green/30">
          <Database className="mx-auto text-data-green mb-3" size={32} />
          <h4 className="font-semibold text-white mb-2">Base de Datos</h4>
          <p className="text-gray-400 text-sm">SQL Server con dataset de Microsoft (227,982 registros)</p>
        </div>
        <div className="text-center p-6 bg-data-dark rounded-lg border border-data-green/30">
          <Code className="mx-auto text-data-green mb-3" size={32} />
          <h4 className="font-semibold text-white mb-2">Procesamiento</h4>
          <p className="text-gray-400 text-sm">Python con Pandas y Scikit-learn para ETL y ML</p>
        </div>
        <div className="text-center p-6 bg-data-dark rounded-lg border border-data-green/30">
          <BarChart3 className="mx-auto text-data-green mb-3" size={32} />
          <h4 className="font-semibold text-white mb-2">Visualización</h4>
          <p className="text-gray-400 text-sm">Dashboard interactivo en Power BI</p>
        </div>
      </div>
    </div>

    <div className="bg-data-light p-6 rounded-xl glow-border">
      <h3 className="text-xl font-semibold mb-4 text-data-green">Proceso de Recomendación</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-data-green rounded-full flex items-center justify-center text-data-dark font-bold text-sm">1</div>
            <div>
              <h4 className="font-semibold text-white">Análisis de Perfil</h4>
              <p className="text-gray-400 text-sm">Identificación de patrones de compra del cliente A</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-data-green rounded-full flex items-center justify-center text-data-dark font-bold text-sm">2</div>
            <div>
              <h4 className="font-semibold text-white">Cálculo de Similitud</h4>
              <p className="text-gray-400 text-sm">Aplicación del algoritmo de coseno para encontrar usuarios similares</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-data-green rounded-full flex items-center justify-center text-data-dark font-bold text-sm">3</div>
            <div>
              <h4 className="font-semibold text-white">Filtrado Colaborativo</h4>
              <p className="text-gray-400 text-sm">Identificación de productos preferidos por usuarios similares</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-data-green rounded-full flex items-center justify-center text-data-dark font-bold text-sm">4</div>
            <div>
              <h4 className="font-semibold text-white">Recomendación</h4>
              <p className="text-gray-400 text-sm">Generación de recomendaciones personalizadas para el cliente B</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const GalleryContent = ({ project, isGalleryExpanded, setIsGalleryExpanded }) => {
  const getProjectImages = () => {
    switch(project.htmlContent) {
      case 'GmailPagos':
        return [
          { src: './gmail_transacciones/codigo_appsscript.png', title: 'Captura del correo de pago', description: 'El código de appscript captura el último correo de pago sin abrir cada 60 segundos' },
          { src: './gmail_transacciones/pln_cloudfunction.png', title: 'Procesamiento del contenido del correo', description: 'Procesamiento de leanguaje natural del contenido del correo y luego envía a la base de datos' },
          { src: './gmail_transacciones/postgresql_serveless.png', title: 'Guarda los parametros en la base de datos', description: 'Guarda los parametros, a la par ejecuta triggers y procedimientos almacenados' },
          { src: './gmail_transacciones/vercel_host.png', title: 'Host del Sistena de Finanzas Personales', description: 'Es un servicio PaaS para desplegar y alojar la aplicación' },
          { src: './gmail_transacciones/interfaz_transacciones.png', title: 'Interfaz de la aplicación de finanzas personales', description: 'Es la aplicación PWA que muestra las finanzas personales' }
        ]
      case 'AppSheet':
        return [
          { src: './images/app_01.png', title: 'Aplicación de Rutas y Tiendas', description: 'Vista principal de la aplicación de gestión de rutas' },
          { src: './images/app_02.png', title: 'Panel de Control', description: 'Dashboard de control y monitoreo' },
          { src: './images/app_03.png', title: 'Gestión de Permisos', description: 'Sistema de permisos y roles de usuario' },
          { src: './images/app_04.png', title: 'Historiales de Precios', description: 'Seguimiento de precios y tendencias' }
        ]
      case 'CupAmerica2024':
        return [
          { src: './images/proyect1_img1.jpg', title: 'Análisis de Datos', description: 'Procesamiento y análisis de datos históricos' },
          { src: './images/proyect1_img2.jpg', title: 'Modelo Predictivo', description: 'Implementación del algoritmo de Poisson' },
          { src: './images/proyect1_img3.jpg', title: 'Visualización', description: 'Resultados y predicciones visualizadas' }
        ]
      case 'Dashboards':
        return [
          { src: './images/dash - 2025.png', title: 'Dashboard 2025', description: 'Panel de control ejecutivo para el año 2025' },
          { src: './images/dash - comparativa triple.png', title: 'Comparativa Triple', description: 'Análisis comparativo de múltiples métricas' },
          { src: './images/dash - Ventas 2021-2025.png', title: 'Ventas 2021-2025', description: 'Evolución de ventas a lo largo de 5 años' },
          { src: './images/dash - flota vehicular.png', title: 'Flota Vehicular', description: 'Monitoreo y control de flota de vehículos' }
        ]
      case 'Excel':
        return [
          { src: './images/costeo.png', title: 'Costeo de Importación', description: 'Sistema automatizado para cálculo de costos' },
          { src: './images/generador.png', title: 'Generador de Tarjetas', description: 'Herramienta para generar tarjetas automáticamente' },
          { src: './images/letragenerada.png', title: 'Letra Generada', description: 'Ejemplo de letra generada por el sistema' },
          { src: './images/entradaysalida.png', title: 'Control de Inventario', description: 'Sistema de entradas y salidas de inventario' },
          { src: './images/registrodeventas.png', title: 'Registro de Ventas', description: 'Automatización del registro de ventas' }
        ]
      case 'SistemaRecomendacion':
        return [
          { src: './images/BD.jpg', title: 'Base de Datos', description: 'Estructura de la base de datos del sistema' },
          { src: './images/dashnoard.jpg', title: 'Dashboard Principal', description: 'Panel de control del sistema de recomendación' },
          { src: './images/spider.jpg', title: 'Diagrama Spider', description: 'Visualización de relaciones y similitudes' },
          { src: './images/comparativa.jpg', title: 'Análisis Comparativo', description: 'Comparación de perfiles de usuarios' },
          { src: './images/similitud.jpg', title: 'Matriz de Similitud', description: 'Cálculo de similitudes entre usuarios' },
          { src: './images/recomendacion.jpg', title: 'Resultados', description: 'Recomendaciones generadas por el algoritmo' }
        ]
      default:
        return [
          { src: project.image, title: 'Vista Principal', description: 'Imagen principal del proyecto' }
        ]
    }
  }

  const images = getProjectImages()

  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold gradient-text">Galería del Proyecto</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {images.map((img, index) => (
          <div key={index} className="bg-data-light p-3 sm:p-4 rounded-xl glow-border group cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="relative overflow-hidden rounded-lg mb-3">
              <ImageLoader
                src={img.src} 
                alt={img.title} 
                className="w-full h-40 sm:h-48 object-contain bg-data-dark rounded-lg group-hover:scale-110 transition-transform duration-300"
                fallbackSrc={project.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-data-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
            <h3 className="font-semibold text-white mb-1 group-hover:text-data-green transition-colors text-sm sm:text-base">{img.title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm">{img.description}</p>
          </div>
        ))}
      </div>
      
      {/* Botón para ver galería completa */}
      <div className="text-center">
        <button 
          onClick={() => setIsGalleryExpanded(true)}
          className="bg-data-green/10 border border-data-green text-data-green px-6 py-3 rounded-lg hover:bg-data-green hover:text-data-dark transition-colors font-medium"
        >
          Ver Galería Completa
        </button>
      </div>

      {/* Modal de Galería Expandida */}
      {isGalleryExpanded && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
          <div className="bg-data-dark rounded-xl max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-data-dark/95 backdrop-blur-md p-3 sm:p-4 border-b border-data-green/20 flex justify-between items-center">
              <h3 className="text-lg sm:text-xl font-bold gradient-text truncate pr-4">Galería - {project.title}</h3>
              <button 
                onClick={() => setIsGalleryExpanded(false)}
                className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-3 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {images.map((img, index) => (
                  <div key={index} className="bg-data-light p-3 sm:p-4 rounded-xl glow-border">
                    <ImageLoader
                      src={img.src} 
                      alt={img.title} 
                      className="w-full h-48 sm:h-64 object-contain bg-data-dark rounded-lg mb-3 sm:mb-4"
                      fallbackSrc={project.image}
                    />
                    <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">{img.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">{img.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Componentes de resultados específicos para cada proyecto
const GmailPagosResults = ({ project }) => (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold gradient-text">Resultados e Impacto</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Métricas de Éxito</h3>
        <div className="space-y-4">
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center p-3 bg-data-dark rounded-lg">
              <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-data-green font-bold">{value}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Beneficios Obtenidos</h3>
        <ul className="space-y-3">
          {[
            'Automatización completa del registro de gastos',
            'Reducción del 90% en tiempo de registro manual',
            'Procesamiento de +200 correos automáticamente',
            'Precisión del 80% en extracción de datos',
            'Integración perfecta con app de finanzas personales'
          ].map((benefit, index) => (
            <li key={index} className="flex items-start space-x-3">
              <TrendingUp className="text-data-green mt-0.5 flex-shrink-0" size={16} />
              <span className="text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

const AppSheetResults = ({ project }) => (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold gradient-text">Resultados e Impacto</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Métricas de Éxito</h3>
        <div className="space-y-4">
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center p-3 bg-data-dark rounded-lg">
              <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-data-green font-bold">{value}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Beneficios Obtenidos</h3>
        <ul className="space-y-3">
          {[
            '4+ aplicaciones No-Code desarrolladas',
            'Automatización de 10+ procesos empresariales',
            'Aumento del 40% en eficiencia operativa',
            'Reducción significativa de errores manuales',
            'Mejora en la gestión de rutas y tiendas'
          ].map((benefit, index) => (
            <li key={index} className="flex items-start space-x-3">
              <TrendingUp className="text-data-green mt-0.5 flex-shrink-0" size={16} />
              <span className="text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

const CopaAmericaResults = ({ project }) => (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold gradient-text">Resultados e Impacto</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Métricas de Éxito</h3>
        <div className="space-y-4">
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center p-3 bg-data-dark rounded-lg">
              <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-data-green font-bold">{value}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Beneficios Obtenidos</h3>
        <ul className="space-y-3">
          {[
            'Precisión del 85% en predicciones de partidos',
            'Análisis de 16 equipos participantes',
            'Predicción de 32 partidos del torneo',
            'Implementación exitosa de algoritmo de Poisson',
            'Primer proyecto de Data Science con Python'
          ].map((benefit, index) => (
            <li key={index} className="flex items-start space-x-3">
              <TrendingUp className="text-data-green mt-0.5 flex-shrink-0" size={16} />
              <span className="text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

const DashboardsResults = ({ project }) => (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold gradient-text">Resultados e Impacto</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Métricas de Éxito</h3>
        <div className="space-y-4">
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center p-3 bg-data-dark rounded-lg">
              <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-data-green font-bold">{value}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Beneficios Obtenidos</h3>
        <ul className="space-y-3">
          {[
            '8+ dashboards interactivos desarrollados',
            '50+ KPIs críticos monitoreados',
            '200+ usuarios beneficiados',
            'Mejora en la toma de decisiones estratégicas',
            'Reducción del tiempo de análisis en 60%'
          ].map((benefit, index) => (
            <li key={index} className="flex items-start space-x-3">
              <TrendingUp className="text-data-green mt-0.5 flex-shrink-0" size={16} />
              <span className="text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

const ExcelResults = ({ project }) => (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold gradient-text">Resultados e Impacto</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Métricas de Éxito</h3>
        <div className="space-y-4">
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center p-3 bg-data-dark rounded-lg">
              <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-data-green font-bold">{value}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Beneficios Obtenidos</h3>
        <ul className="space-y-3">
          {[
            '15+ macros desarrollados para automatización',
            '100+ horas de trabajo automatizadas',
            '20+ procesos optimizados',
            'Reducción del 70% en errores manuales',
            'Aumento del 50% en productividad del equipo'
          ].map((benefit, index) => (
            <li key={index} className="flex items-start space-x-3">
              <TrendingUp className="text-data-green mt-0.5 flex-shrink-0" size={16} />
              <span className="text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

const SistemaRecomendacionResults = ({ project }) => (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold gradient-text">Resultados e Impacto</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Métricas de Éxito</h3>
        <div className="space-y-4">
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center p-3 bg-data-dark rounded-lg">
              <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-data-green font-bold">{value}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Beneficios Obtenidos</h3>
        <ul className="space-y-3">
          {[
            '500+ productos en el sistema de recomendación',
            'Precisión del 92% en recomendaciones',
            '1,000+ usuarios analizados',
            'Implementación exitosa de algoritmo de similitud',
            'Dashboard interactivo en Power BI'
          ].map((benefit, index) => (
            <li key={index} className="flex items-start space-x-3">
              <TrendingUp className="text-data-green mt-0.5 flex-shrink-0" size={16} />
              <span className="text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

const DefaultResults = ({ project }) => (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold gradient-text">Resultados e Impacto</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Métricas de Éxito</h3>
        <div className="space-y-4">
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center p-3 bg-data-dark rounded-lg">
              <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-data-green font-bold">{value}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-data-light p-6 rounded-xl glow-border">
        <h3 className="text-xl font-semibold mb-4 text-data-green">Beneficios Obtenidos</h3>
        <ul className="space-y-3">
          {[
            'Optimización significativa de procesos',
            'Reducción de tiempo en tareas repetitivas',
            'Mejora en la toma de decisiones',
            'Aumento de la productividad del equipo',
            'ROI positivo en menos de 6 meses'
          ].map((benefit, index) => (
            <li key={index} className="flex items-start space-x-3">
              <TrendingUp className="text-data-green mt-0.5 flex-shrink-0" size={16} />
              <span className="text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

const DefaultContent = () => (
  <div className="text-center py-12">
    <div className="text-gray-400 mb-4">
      <Database size={48} className="mx-auto mb-4" />
      <p>Contenido en desarrollo...</p>
    </div>
  </div>
)

export default ProjectDetail