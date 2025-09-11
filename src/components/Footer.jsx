import React from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter,
  ArrowUp,
  Heart
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    servicios: [
      'Desarrollo de Dashboards',
      'Análisis de Datos',
      'Machine Learning',
      'Automatización',
      'Consultoría BI'
    ],
    recursos: [
      'Blog de Datos',
      'Tutoriales',
      'Casos de Estudio',
      'Herramientas Gratuitas',
      'Guías de Mejores Prácticas'
    ],
    empresa: [
      'Sobre Mí',
      'Proyectos',
      'Testimonios',
      'Política de Privacidad',
      'Términos de Servicio'
    ]
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="text-data-green" size={20} />,
      url: 'https://www.linkedin.com/in/elias-carmin/'
    },
    {
      name: 'GitHub',
      icon: <Github className="text-data-green" size={20} />,
      url: 'https://github.com/EliasCarmin'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="text-data-green" size={20} />,
      url: 'https://twitter.com/elias_datos'
    }
  ]

  const contactInfo = [
    {
      icon: <Mail className="text-data-green" size={16} />,
      text: 'eliasjesuscarmin@gmail.com'
    },
    {
      icon: <Phone className="text-data-green" size={16} />,
      text: '+51 956224010'
    },
    {
      icon: <MapPin className="text-data-green" size={16} />,
      text: 'Lima Metropolitana, Perú'
    }
  ]

  return (
    <footer className="bg-data-dark border-t border-gray-800">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-data-green rounded-lg flex items-center justify-center">
                <span className="text-data-dark font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold gradient-text">Elias</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformando datos en decisiones inteligentes. Especialista en análisis de datos, 
              desarrollo de dashboards y soluciones de Business Intelligence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-data-light rounded-lg border border-gray-600 hover:border-data-green hover:bg-data-green/10 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-data-green transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Recursos</h3>
            <ul className="space-y-2">
              {footerLinks.recursos.map((resource, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-data-green transition-colors text-sm"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {contact.icon}
                  <span className="text-gray-400 text-sm">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Elias - Analista de Datos. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-data-green transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-data-green transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-data-green transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-data-green text-data-dark rounded-full flex items-center justify-center hover:bg-neon-green transition-colors shadow-lg hover:shadow-xl"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      {/* Made with Love */}
      <div className="bg-data-gray py-4 text-center">
        <p className="text-gray-400 text-sm">
          Hecho con <Heart className="inline text-red-500" size={14} /> por Elias usando React y TailwindCSS (Cursor IA)
        </p>
      </div>
    </footer>
  )
}

export default Footer 