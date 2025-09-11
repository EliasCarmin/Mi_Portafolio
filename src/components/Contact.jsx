import React, { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  Twitter,
  MessageSquare,
  Clock,
  CheckCircle
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío de formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })
      
      // Resetear mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Mail className="text-data-green" size={24} />,
      title: 'Email',
      value: 'elias@datosanalytics.com',
      link: 'mailto:elias@datosanalytics.com'
    },
    {
      icon: <Phone className="text-data-green" size={24} />,
      title: 'Teléfono',
      value: '+51 956-224-010',
      link: 'tel:+51956224010'
    },
    {
      icon: <MapPin className="text-data-green" size={24} />,
      title: 'Ubicación',
      value: 'Lima, Perú',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="text-data-green" size={20} />,
      url: 'https://www.linkedin.com/in/elias-carmin/',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: <Github className="text-data-green" size={20} />,
      url: 'https://github.com/EliasCarmin',
      color: 'hover:bg-gray-700'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="text-data-green" size={20} />,
      url: 'https://twitter.com/elias_datos',
      color: 'hover:bg-blue-400'
    }
  ]

  const availability = [
    {
      day: 'Lunes - Viernes',
      hours: '9:00 AM - 6:00 PM',
      status: 'Disponible'
    },
    {
      day: 'Sábados',
      hours: '10:00 AM - 2:00 PM',
      status: 'Consultas'
    },
    {
      day: 'Domingos',
      hours: 'Cerrado',
      status: 'Descanso'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-data-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Contáctame</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy aquí para ayudarte a transformar tus datos en insights valiosos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-data-light p-8 rounded-lg glow-border">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Envíame un Mensaje
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="text-data-green mx-auto mb-4" size={48} />
                <h4 className="text-xl font-bold text-white mb-2">¡Mensaje Enviado!</h4>
                <p className="text-gray-400">
                  Gracias por contactarme. Te responderé en las próximas 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-data-dark border border-gray-600 rounded-lg focus:border-data-green focus:outline-none text-white placeholder-gray-400"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-data-dark border border-gray-600 rounded-lg focus:border-data-green focus:outline-none text-white placeholder-gray-400"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-data-dark border border-gray-600 rounded-lg focus:border-data-green focus:outline-none text-white placeholder-gray-400"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-data-dark border border-gray-600 rounded-lg focus:border-data-green focus:outline-none text-white placeholder-gray-400"
                      placeholder="¿En qué puedo ayudarte?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-data-dark border border-gray-600 rounded-lg focus:border-data-green focus:outline-none text-white placeholder-gray-400 resize-none"
                    placeholder="Cuéntame sobre tu proyecto y cómo puedo ayudarte..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-data-green text-data-dark px-6 py-3 rounded-lg hover:bg-neon-green transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-data-dark"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-data-light p-6 rounded-lg glow-border">
              <h3 className="text-xl font-bold mb-6 gradient-text">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-data-green/10 transition-colors"
                  >
                    {info.icon}
                    <div>
                      <div className="text-white font-medium">{info.title}</div>
                      <div className="text-gray-400 text-sm">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-data-light p-6 rounded-lg glow-border">
              <h3 className="text-xl font-bold mb-6 gradient-text">
                Sígueme en Redes
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 bg-data-dark rounded-lg border border-gray-600 hover:border-data-green transition-colors ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-data-light p-6 rounded-lg glow-border">
              <h3 className="text-xl font-bold mb-6 gradient-text">
                Horarios de Disponibilidad
              </h3>
              <div className="space-y-3">
                {availability.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-data-dark rounded-lg">
                    <div>
                      <div className="text-white font-medium">{schedule.day}</div>
                      <div className="text-gray-400 text-sm">{schedule.hours}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        schedule.status === 'Disponible' ? 'bg-data-green' : 
                        schedule.status === 'Consultas' ? 'bg-yellow-500' : 'bg-gray-500'
                      }`}></div>
                      <span className="text-gray-400 text-sm">{schedule.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-r from-data-green/10 to-neon-green/10 p-6 rounded-lg border border-data-green/30">
              <div className="flex items-center space-x-3 mb-3">
                <MessageSquare className="text-data-green" size={24} />
                <h4 className="text-lg font-semibold text-white">Respuesta Rápida</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Normalmente respondo en menos de 24 horas. Para consultas urgentes, 
                puedes contactarme directamente por WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-data-light p-8 rounded-lg glow-border">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              ¿Prefieres una llamada?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Agenda una videollamada de 30 minutos para discutir tu proyecto sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-data-green text-data-dark px-8 py-3 rounded-lg hover:bg-neon-green transition-colors font-medium">
                Agendar Llamada
              </button>
              <a href="/CV_Analista_Datos_Elías_Carmin.pdf" download className="border border-data-green text-data-green px-8 py-3 rounded-lg hover:bg-data-green hover:text-data-dark transition-colors font-medium text-center">
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 