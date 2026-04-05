import React, { useState } from 'react'
import { Award, Users, Clock, Target, CheckCircle, X, Briefcase, Calendar, Building2, ExternalLink, Database, Code } from 'lucide-react'

const About = () => {
  const [selectedExperience, setSelectedExperience] = useState(null)

  React.useEffect(() => {
    if (selectedExperience) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedExperience])

  const experiences = [
    {
      year: 'Feb 2026 - Actualidad',
      title: 'Consultor Jr de Azure',
      company: 'Ingram Micro',
      descriptionPreview: 'Diseño e implementación de infraestructuras en Microsoft Azure. Automatización de despliegues y optimización de soluciones cloud para clientes corporativos.',
      fullDescription: [
        'Diseño e implementación de arquitecturas escalables en Microsoft Azure para empresas enterprise.',
        'Automatización de despliegues y gestión de infraestructura como código (IaC) con Terraform y Azure DevOps.',
        'Optimización de costos y rendimiento de suscripciones cloud mediante Azure Advisor.',
        'Configuración de servicios PaaS y Serverless: Azure Functions, App Services y Azure SQL.',
        'Gestión de identidad y seguridad mediante Azure Active Directory y políticas de cumplimiento.',
        'Soporte técnico estratégico para la migración de aplicaciones on-premise a la nube.',
        'Implementación de soluciones de datos modernas con Azure SQL y Cosmos DB.'
      ]
    },
    {
      year: '2024 - 2026',
      title: 'Analista de Datos, Automatización y Data Cloud GCP',
      company: 'Business Import Zeus Safety',
      descriptionPreview: 'Liderazgo de la transformación digital empresarial. Implementación de procesos ETL, dashboards en Power BI y gestión de infraestructuras en Google Cloud Platform.',
      fullDescription: [
        'Liderazgo de la transformación digital, evolucionando desde la automatización con macros hasta sistemas cloud nativos.',
        'Implementación de flujos ETL y dashboards interactivos en Power BI para toma de decisiones estratégicas.',
        'Desarrollo de aplicaciones empresariales full-stack con Python (Backend) y React/Next.js (Frontend).',
        'Administración de infraestructura en GCP: Cloud Run, Cloud SQL, BigQuery e IAM.',
        'Gestión de equipo de desarrollo (3 personas) aplicando metodologías ágiles y control de versiones con Git.',
        'Automatización integral de procesos en áreas comerciales, logística y marketing.',
        'Integración de APIs de IA (Gemini/OpenAI) para optimización de tareas administrativas.'
      ]
    },
    {
      year: '2023 - 2024',
      title: 'Practicante de Gestión de Proyectos',
      company: 'Agencia Embudo Consigue Ventas',
      descriptionPreview: 'Planificación de software y levantamiento de requerimientos. Gestión de documentación técnica y diseño de diagramas de procesos.',
      fullDescription: [
        'Planificar las etapas del desarrollo del software.',
        'Apoyo en estructurar requisitos funcionales y no funcionales para los servicios de software.',
        'Mantener informados a los clientes y gerentes de proyecto sobre las aplicaciones o sitios de internet.',
        'Emitir normas y procedimientos para la administración de la documentación interna y externa.',
        'Emitir informes de la documentación interna y externa.',
        'Diseñar diagramas.',
        'Medir el desempeño en el desarrollo.',
        'Análisis de requisitos.',
        'Análisis de negocio.'
      ]
    },
  ]

  const achievements = [
    {
      icon: <Award className="text-data-green" size={24} />,
      title: 'Certificaciones',
      description: 'Power BI, GCP, Python, SQL'
    },
    {
      icon: <Users className="text-data-green" size={24} />,
      title: 'Clientes Satisfechos',
      description: 'Más de 25 proyectos exitosos'
    },
    {
      icon: <Clock className="text-data-green" size={24} />,
      title: 'Experiencia',
      description: '+2 años en análisis de datos'
    },
    {
      icon: <Target className="text-data-green" size={24} />,
      title: 'Especialización',
      description: 'BI, Analytics, Machine Learning'
    }
  ]

  return (
    <section id="about" className="section-padding bg-data-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Apasionado por transformar datos en decisiones inteligentes y crear soluciones que generen valor real para las empresas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Mi Historia</h3>
            <div className="space-y-4 text-gray-300 text-base md:text-lg">
              <p>
                Especialista en <strong>Cloud Computing (Azure/GCP)</strong> y <strong>Análisis de Datos</strong>, con un enfoque sólido en la automatización de procesos empresariales y la creación de arquitecturas escalables.
              </p>
              <p>
                Actualmente me desempeño como <strong>Consultor Jr de Azure en Ingram Micro</strong>, donde diseño e implemento soluciones en la nube para clientes corporativos, optimizando infraestructuras y procesos de despliegue mediante infraestructura como código.
              </p>
              <p>
                Mi trayectoria destaca por liderar la transformación digital en <strong>Zeus Safety</strong>, donde evolucioné de roles administrativos a la gestión de Data Cloud. He liderado equipos de desarrollo y gestionado infraestructuras complejas, logrando integrar tecnologías como Python, React y servicios serverless para maximizar la eficiencia operativa.
              </p>
            </div>

            {/* Key Skills */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-white">Mis Fortalezas</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Análisis de Datos Avanzado',
                  'Desarrollo de Dashboards',
                  'Business Intelligence',
                  'Google Cloud Platform (GCP)',
                  'Automatización con VBA/Python',
                  'Desarrollo Full Stack'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="text-data-green" size={16} />
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Achievements */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-data-light p-6 rounded-lg glow-border card-hover"
              >
                <div className="mb-4">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {achievement.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-24 relative">
          <h3 className="text-3xl font-bold text-center mb-16 gradient-text">
            Experiencia Profesional
          </h3>
          
          {/* Timeline Line */}
          <div className="absolute left-[20px] lg:left-1/2 top-24 bottom-0 w-[2px] bg-gradient-to-b from-data-green via-data-green/20 to-transparent transform -translate-x-1/2"></div>
          
          <div className="relative space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`flex items-center group cursor-pointer ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
                onClick={() => setSelectedExperience(exp)}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[20px] lg:left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-10 h-10 rounded-full bg-data-dark border-2 border-data-green flex items-center justify-center group-hover:scale-110 group-hover:bg-data-green group-hover:text-data-dark transition-all duration-500 shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                    {index === 0 ? <Briefcase size={18} /> : index === 1 ? <Database size={18} /> : <Code size={18} />}
                  </div>
                  {/* Glowing Pulse */}
                  <div className="absolute inset-0 rounded-full bg-data-green animate-ping-slow opacity-10"></div>
                </div>
                
                {/* Content Card */}
                <div className={`w-full lg:w-[45%] ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className={`
                    p-6 rounded-2xl bg-data-light/40 backdrop-blur-md border border-white/5 
                    group-hover:border-data-green/40 group-hover:bg-data-light/60 transition-all duration-500
                    relative overflow-hidden group-hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]
                  `}>
                    {/* Background Shine */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-data-green/5 blur-[50px] rounded-full group-hover:bg-data-green/10 transition-colors"></div>
                    
                    <div className="flex flex-col gap-2 relative z-10">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-data-green font-bold text-xs uppercase tracking-widest bg-data-green/10 px-2 py-1 rounded-md">
                          {exp.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-white group-hover:text-data-green transition-colors leading-tight">
                        {exp.title}
                      </h4>
                      <div className="flex items-center text-sm text-gray-400 font-medium">
                        <Building2 size={14} className="mr-1.5 text-data-green" />
                        {exp.company}
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mt-3">
                        {exp.descriptionPreview}
                      </p>
                      
                      <div className="mt-5 flex items-center text-data-green text-xs font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                        <span className="mr-2">Ver detalles del puesto</span>
                        <div className="h-[1px] w-8 bg-data-green"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Empty Space for Desktop layout */}
                <div className="hidden lg:block lg:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Detail Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-data-dark/95 backdrop-blur-md">
          <div className="bg-data-light w-full max-w-2xl rounded-2xl glow-border overflow-hidden animate-fade-in">
            {/* Modal Header */}
            <div className="p-6 border-b border-data-green/20 flex justify-between items-start">
              <div className="flex items-center space-x-4">
                <div className="bg-data-green/20 p-3 rounded-xl text-data-green">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white leading-tight">
                    {selectedExperience.title}
                  </h4>
                  <div className="flex flex-wrap gap-y-2 gap-x-4 mt-2">
                    <div className="flex items-center text-data-green text-sm">
                      <Building2 size={14} className="mr-1" />
                      <span>{selectedExperience.company}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>{selectedExperience.year}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedExperience(null)}
                className="text-gray-400 hover:text-white bg-data-dark/50 p-2 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <h5 className="text-data-green font-semibold mb-4 flex items-center">
                <Target size={16} className="mr-2" />
                Responsabilidades y Logros
              </h5>
              <ul className="space-y-4">
                {selectedExperience.fullDescription.map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="mt-1.5 mr-3 w-1.5 h-1.5 bg-data-green rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <span className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-data-dark/50 border-t border-data-green/10 text-center">
              <button 
                onClick={() => setSelectedExperience(null)}
                className="px-8 py-2 bg-data-green text-data-dark rounded-lg font-bold hover:bg-neon-green transition-all"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default About 