import React from 'react'
import { 
  BarChart3, 
  Database, 
  Cpu, 
  Zap, 
  Users, 
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="text-data-green" size={32} />,
      title: 'Desarrollo de Dashboards',
      description: 'Creación de dashboards interactivos y visualizaciones de datos que facilitan la toma de decisiones.',
      features: [
        'Dashboards personalizados en Power BI y Tableau',
        'Visualizaciones interactivas y responsivas',
        'Integración con múltiples fuentes de datos',
        'Reportes automáticos y alertas',
        'Análisis de KPIs en tiempo real',
        'Capacitación en el uso de herramientas'
      ],
      price: 'Desde S/100',
      duration: '2-4 semanas'
    },
    {
      icon: <Database className="text-data-green" size={32} />,
      title: 'Análisis de Datos',
      description: 'Análisis profundo de datos para identificar patrones, tendencias y oportunidades de mejora.',
      features: [
        'Análisis exploratorio de datos (EDA)',
        'Identificación de patrones y tendencias',
        'Análisis de correlaciones y causalidad',
        'Segmentación de clientes y mercados',
        'Análisis de comportamiento de usuarios',
        'Reportes ejecutivos con insights accionables'
      ],
      price: 'Desde S/120',
      duration: '3-6 semanas'
    },
    {
      icon: <Cpu className="text-data-green" size={32} />,
      title: 'Machine Learning',
      description: 'Desarrollo de modelos predictivos y de clasificación para automatizar decisiones empresariales.',
      features: [
        'Modelos de predicción de demanda',
        'Clasificación de clientes y productos',
        'Detección de anomalías y fraudes',
        'Optimización de procesos con ML',
        'Análisis de sentimientos',
        'Implementación y mantenimiento de modelos'
      ],
      price: 'Desde S/ 250',
      duration: '4-8 semanas'
    },
    {
      icon: <Zap className="text-data-green" size={32} />,
      title: 'Automatización de Procesos',
      description: 'Automatización de procesos repetitivos para mejorar la eficiencia y reducir errores.',
      features: [
        'Automatización con Python y VBA',
        'Integración de sistemas y APIs',
        'Procesamiento automático de datos',
        'Generación automática de reportes',
        'Alertas y notificaciones automáticas',
        'Documentación y capacitación del equipo'
      ],
      price: 'Desde S/300',
      duration: '2-5 semanas'
    },
    {
      icon: <Users className="text-data-green" size={32} />,
      title: 'Consultoría en BI',
      description: 'Asesoramiento estratégico para implementar soluciones de Business Intelligence.',
      features: [
        'Evaluación de necesidades de datos',
        'Diseño de arquitectura de datos',
        'Selección de herramientas y tecnologías',
        'Implementación de mejores prácticas',
        'Capacitación de equipos',
        'Soporte post-implementación'
      ],
      price: 'Desde S/200',
      duration: 'Variable'
    },
    {
      icon: <TrendingUp className="text-data-green" size={32} />,
      title: 'Optimización de KPIs',
      description: 'Definición y seguimiento de indicadores clave para medir el rendimiento empresarial.',
      features: [
        'Definición de KPIs relevantes',
        'Diseño de dashboards de seguimiento',
        'Análisis de tendencias y variaciones',
        'Alertas automáticas de desviaciones',
        'Reportes de rendimiento mensuales',
        'Recomendaciones de mejora continua'
      ],
      price: 'Desde S/150',
      duration: '3-5 semanas'
    }
  ]

  const benefits = [
    {
      icon: <Shield className="text-data-green" size={24} />,
      title: 'Calidad Garantizada',
      description: 'Todos los proyectos incluyen pruebas exhaustivas y garantía de calidad.'
    },
    {
      icon: <Clock className="text-data-green" size={24} />,
      title: 'Entrega a Tiempo',
      description: 'Compromiso con los plazos acordados y comunicación constante del progreso.'
    },
    {
      icon: <Users className="text-data-green" size={24} />,
      title: 'Soporte Continuo',
      description: 'Acompañamiento post-entrega y soporte técnico para resolver dudas.'
    },
    {
      icon: <CheckCircle className="text-data-green" size={24} />,
      title: 'Resultados Medibles',
      description: 'Enfoque en generar valor tangible y resultados medibles para tu negocio.'
    }
  ]

  return (
    <section id="services" className="section-padding bg-data-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluciones integrales de análisis de datos diseñadas para impulsar el crecimiento de tu empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-data-light p-6 rounded-lg glow-border card-hover group"
            >
              {/* Service Header */}
              <div className="mb-6">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-data-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Incluye:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 text-sm flex items-start">
                      <CheckCircle className="text-data-green mt-0.5 mr-2 flex-shrink-0" size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price and Duration */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-data-green font-bold text-lg">{service.price}</div>
                  <div className="text-gray-400 text-sm">{service.duration}</div>
                </div>
                <button className="flex items-center space-x-2 text-data-green hover:text-neon-green transition-colors">
                  <span className="text-sm font-medium">Ver más</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-data-gray p-8 rounded-lg glow-border mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            ¿Por qué elegirme?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-4"
              >
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 gradient-text">
            Mi Proceso de Trabajo
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Análisis de Necesidades',
                description: 'Entendemos tus objetivos y requerimientos específicos'
              },
              {
                step: '02',
                title: 'Planificación',
                description: 'Diseñamos la estrategia y arquitectura de la solución'
              },
              {
                step: '03',
                title: 'Desarrollo',
                description: 'Implementamos la solución con las mejores prácticas'
              },
              {
                step: '04',
                title: 'Entrega y Soporte',
                description: 'Entregamos la solución y brindamos soporte continuo'
              }
            ].map((process, index) => (
              <div 
                key={index}
                className="bg-data-light p-6 rounded-lg glow-border"
              >
                <div className="text-data-green font-bold text-2xl mb-3">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-data-green/10 to-neon-green/10 p-8 rounded-lg border border-data-green/30">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              ¿Listo para transformar tus datos?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Agenda una consulta gratuita para discutir cómo puedo ayudar a tu empresa a aprovechar al máximo sus datos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-data-green text-data-dark px-8 py-3 rounded-lg hover:bg-neon-green transition-colors font-medium">
                Solicitar Consulta Gratuita
              </button>
              <button className="border border-data-green text-data-green px-8 py-3 rounded-lg hover:bg-data-green hover:text-data-dark transition-colors font-medium">
                Ver Portafolio Completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 