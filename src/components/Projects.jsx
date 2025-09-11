import React, { useState } from 'react'
import { ExternalLink, Github, Eye, BarChart3, Database, TrendingUp, Users, ShoppingCart } from 'lucide-react'
import ProjectDetail from './ProjectDetail'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('todos')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Pipeline Serverless para Análisis de Correos de Pagos',
      category: 'automation',
      image: '/public/images/flujo-gmail.gif',
      description: 'Construí un flujo de datos en la nube que captura correos de Gmail, procesa su contenido con técnicas de Procesamiento de Lenguaje Natural (PLN), almacena la información en una base de datos PostgreSQL serverless (Neon) y la expone mediante endpoints consumidos en mi app personal de Finanzas Personales alojados en Vercel.',
      technologies: ['Google Cloud Functions', 'Neon PostgreSQL', 'AppScript', 'Python'],
      features: ['Automatización de procesos', 'Procesamiento de lenguaje natural', 'ETL', 'Pipeline serverless'],
      link: '/projects/appsheet',
      github: '#',
      stats: { Tiempo: '- 90% reduccion', Correos: '+200 procesados', Eficienica: '80% precisión de extracción' },
      htmlContent: 'GmailPagos'
    },
    {
      id: 2,
      title: 'Aplicaciones AppSheet',
      category: 'automation',
      image: '/public/images/appsheet.png',
      description: 'Aplicaciones No-Code desarrolladas con AppSheet para automatizar procesos empresariales y optimizar la gestión de pedidos y ventas.',
      technologies: ['AppSheet', 'Google Cloud', 'Bases de Datos', 'No-Code'],
      features: ['Automatización de procesos', 'Gestión de rutas y tiendas', 'Control de permisos', 'Reportes automáticos'],
      link: '/projects/appsheet',
      github: '#',
      stats: { apps: '4+', Procesos: '10+', Eficiencia: '+40%' },
      htmlContent: 'AppSheet'
    },
    {
      id: 3,
      title: 'Predicción Copa América 2024',
      category: 'machine-learning',
      image: '/public/images/CopaAmerica2024_PRINCIPAL_RGB_Full-color_FondoClaro.png',
      description: 'Proyecto de Data Science para pronosticar el campeón de la Copa América 2024 utilizando algoritmos de probabilidad y web scraping.',
      technologies: ['Python', 'Pandas', 'Jupyter Notebook', 'Web Scraping'],
      features: ['Algoritmo de Poisson', 'Web scraping', 'Análisis predictivo', 'Visualización de datos'],
      link: '/projects/copa-america',
      github: 'https://github.com/EliasCarmin/Prediction_CupAmerica',
      stats: { accuracy: '85%', matches: '32', teams: '16' },
      htmlContent: 'CupAmerica2024'
    },
    {
      id: 4,
      title: 'Dashboards Interactivos',
      category: 'dashboard',
      image: '/public/images/powerbi.png',
      description: 'Dashboards interactivos y paneles de control diseñados para simplificar información y mostrar KPIs cruciales para stakeholders.',
      technologies: ['Power BI', 'DAX', 'Python', 'Looker Studio'],
      features: ['KPIs en tiempo real', 'Storytelling visual', 'Múltiples fuentes', 'Diseño jerarquizado'],
      link: '/projects/dashboards',
      github: '#',
      stats: { dashboards: '8+', kpis: '50+', users: '200+' },
      htmlContent: 'Dashboards'
    },
    {
      id: 5,
      title: 'Macros y VBA Excel',
      category: 'automation',
      image: '/public/images/VBA-MACROS.png',
      description: 'Automatización de tareas en Excel mediante macros y VBA, desde procesos básicos hasta formularios personalizados complejos.',
      technologies: ['VBA', 'Excel', 'Macros', 'UserForms'],
      features: ['Automatización de procesos', 'Formularios personalizados', 'Control de inventarios', 'Generación de reportes'],
      link: '/projects/excel-vba',
      github: '#',
      stats: { macros: '15+', hours: '100+', processes: '20+' },
      htmlContent: 'Excel'
    },
    {
      id: 6,
      title: 'Sistema de Recomendación',
      category: 'machine-learning',
      image: '/public/images/python.png',
      description: 'Sistema de recomendación utilizando algoritmo de similitud de coseno para sugerir productos basado en filtrado colaborativo.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Power BI', 'SQL Server'],
      features: ['Filtrado colaborativo', 'Similitud de coseno', 'Dashboard interactivo', 'Integración ETL'],
      link: '/projects/sistema-recomendacion',
      github: '#',
      stats: { products: '500+', accuracy: '92%', users: '1K+' },
      htmlContent: 'SistemaRecomendacion'
    }
  ]

  const filters = [
    { id: 'todos', name: 'Todos' },
    { id: 'dashboard', name: 'Dashboards' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'automation', name: 'Automatización' },
    { id: 'machine-learning', name: 'Machine Learning' }
  ]

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'dashboard': return <BarChart3 className="text-data-green" size={20} />
      case 'analytics': return <TrendingUp className="text-data-green" size={20} />
      case 'automation': return <Database className="text-data-green" size={20} />
      case 'machine-learning': return <Users className="text-data-green" size={20} />
      default: return <BarChart3 className="text-data-green" size={20} />
    }
  }

  const getStatsIcon = (stat) => {
    switch(stat) {
      case 'users': return <Users className="text-data-green" size={16} />
      case 'revenue': return <TrendingUp className="text-data-green" size={16} />
      case 'conversion': return <BarChart3 className="text-data-green" size={16} />
      case 'vehicles': return <Database className="text-data-green" size={16} />
      case 'savings': return <TrendingUp className="text-data-green" size={16} />
      case 'efficiency': return <BarChart3 className="text-data-green" size={16} />
      case 'sessions': return <Users className="text-data-green" size={16} />
      case 'engagement': return <TrendingUp className="text-data-green" size={16} />
      case 'bounce': return <BarChart3 className="text-data-green" size={16} />
      case 'time': return <TrendingUp className="text-data-green" size={16} />
      case 'accuracy': return <BarChart3 className="text-data-green" size={16} />
      case 'processes': return <Database className="text-data-green" size={16} />
      case 'stock': return <ShoppingCart className="text-data-green" size={16} />
      case 'kpis': return <BarChart3 className="text-data-green" size={16} />
      case 'decisions': return <TrendingUp className="text-data-green" size={16} />
      case 'apps': return <Database className="text-data-green" size={16} />
      case 'matches': return <Users className="text-data-green" size={16} />
      case 'teams': return <Users className="text-data-green" size={16} />
      case 'dashboards': return <BarChart3 className="text-data-green" size={16} />
      case 'macros': return <Database className="text-data-green" size={16} />
      case 'hours': return <TrendingUp className="text-data-green" size={16} />
      case 'products': return <ShoppingCart className="text-data-green" size={16} />
      default: return <BarChart3 className="text-data-green" size={16} />
    }
  }

  return (
    <section id="projects" className="section-padding bg-data-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proyectos destacados que demuestran mi experiencia en análisis de datos y desarrollo de soluciones empresariales.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-data-green text-data-dark'
                  : 'bg-data-light text-gray-300 hover:bg-data-green/20 hover:text-data-green'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-data-light rounded-lg overflow-hidden glow-border card-hover group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-data-dark/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  {getCategoryIcon(project.category)}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-data-green transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-data-green/10 text-data-green text-sm rounded-full border border-data-green/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Características:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-gray-400 text-sm flex items-center">
                        <span className="w-1 h-1 bg-data-green rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-data-green text-sm font-bold">
                        {getStatsIcon(key)}
                        <span>{value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 flex items-center justify-center space-x-2 bg-data-green text-data-dark px-4 py-2 rounded-lg hover:bg-neon-green transition-colors font-medium"
                  >
                    <Eye size={16} />
                    <span>Ver Demo</span>
                  </button>
                  {project.github !== '#' ? (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 border border-data-green text-data-green px-4 py-2 rounded-lg hover:bg-data-green hover:text-data-dark transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  ) : (
                    <button className="flex items-center justify-center space-x-2 border border-data-green text-data-green px-4 py-2 rounded-lg hover:bg-data-green hover:text-data-dark transition-colors">
                      <Github size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-data-light p-8 rounded-lg glow-border">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Estoy siempre interesado en nuevos desafíos. Si tienes un proyecto que requiera análisis de datos, 
              desarrollo de dashboards o implementación de soluciones de BI, ¡hablemos!
            </p>
            <button className="bg-data-green text-data-dark px-8 py-3 rounded-lg hover:bg-neon-green transition-colors font-medium">
              Contactar
            </button>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  )
}

export default Projects 