import React from 'react'
import { Award, Users, Clock, Target, CheckCircle } from 'lucide-react'

const About = () => {
  const experiences = [
    {
      year: '2024 - Presente',
      title: 'Analista de Datos & Desarrollador de Soluciones Internas',
      company: 'Empresa Tecnológica',
      description: 'Analista de Datos y Desarrollador de Soluciones Internas, con enfoque en automatización, análisis, visualización y desarrollo de herramientas digitales para optimizar procesos empresariales.'
    },
    {
      year: '2023 - 2024',
      title: 'Practicante de Gestión de Proyectos',
      company: 'Agencia Embudo Consigue Ventas',
      description: 'Colaboración en la planificación de proyectos de software. Apoyo en el levantamiento de requerimientos funcionales y no funcionales.'
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
      description: '+1 años en análisis de datos'
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
            <div className="space-y-4 text-gray-300">
              <p>
                Soy un estudiante en su ultimo ciclo de la carrera de analista de datos apasionado con 1 año de experiencia en el campo del análisis de datos 
                y Business Intelligence. Mi enfoque se centra en transformar datos complejos en insights accionables 
                que impulsan la toma de decisiones estratégicas.
              </p>
              <p>
                He trabajado con empresas de diversos sectores, desde startups hasta corporaciones, ayudándolas a 
                implementar soluciones de análisis de datos que optimizan sus procesos y mejoran sus resultados.
              </p>
              <p>
                Mi expertise incluye el desarrollo de dashboards interactivos, análisis predictivo, y la implementación 
                de herramientas de Business Intelligence que permiten a las organizaciones aprovechar al máximo sus datos.
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
                  'Machine Learning',
                  'SQL y Bases de Datos',
                  'Visualización de Datos'
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
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Experiencia Profesional
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-start ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="lg:w-1/3">
                  <div className="bg-data-green/10 p-4 rounded-lg border border-data-green/30">
                    <div className="text-data-green font-bold text-lg">{exp.year}</div>
                    <div className="text-white font-semibold">{exp.title}</div>
                    <div className="text-gray-400 text-sm">{exp.company}</div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-data-light p-6 rounded-lg glow-border">
                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 