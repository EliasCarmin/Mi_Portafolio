import React from 'react'
import { ArrowRight, Bot, Cloud, Code2, Network } from 'lucide-react'

const capabilities = [
  {
    icon: Cloud,
    number: '01',
    title: 'Arquitectura & Soluciones Azure',
    text: 'Diseño, dimensionamiento y despliegue de infraestructura en Microsoft Azure con enfoque en seguridad y FinOps.',
    deliverables: ['Dimensionamiento de VMs y discos', 'Azure Backup y políticas de retención', 'Optimización de costos y presupuestos']
  },
  {
    icon: Network,
    number: '02',
    title: 'Networking & Conectividad Híbrida',
    text: 'Interconexión segura entre centros de datos on-premises y la nube mediante topologías empresariales.',
    deliverables: ['VPN Gateway Site-to-Site y BGP', 'Segmentación con VNets y Peering', 'Private Endpoints y control con NSGs']
  },
  {
    icon: Code2,
    number: '03',
    title: 'Backend & APIs en Python',
    text: 'Desarrollo de servicios robustos, contratos REST documentados y microservicios contenerizados.',
    deliverables: ['APIs de alto rendimiento con FastAPI', 'Control de acceso, tokens y roles', 'Web scraping y pipelines de extracción']
  },
  {
    icon: Bot,
    number: '04',
    title: 'Automatización & Soluciones con IA',
    text: 'Transformación de procesos manuales mediante flujos automatizados y asistentes inteligentes en la nube.',
    deliverables: ['Agentes en Azure AI Foundry', 'Pipelines en Python y bases relacionales', 'Dashboards analíticos en Power BI']
  }
]

const Services = () => (
  <section id="services" className="section-padding">
    <div className="container-custom">
      <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="section-kicker">03 / Capacidades</span>
          <h2 className="section-title">Acompañamiento técnico de extremo a extremo.</h2>
          <p className="section-copy">Desde el análisis de requerimientos y la propuesta técnica hasta la arquitectura cloud, el código y la operación continua.</p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/5">
            Conversemos sobre tu necesidad técnica <ArrowRight size={16} />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map(({ icon: Icon, number, title, text, deliverables }) => (
            <article key={title} className="surface card-hover rounded-2xl p-7">
              <div className="flex items-center justify-between">
                <Icon className="text-cyan-300" size={27} />
                <span className="font-data text-xs text-slate-600">{number}</span>
              </div>
              <h3 className="mt-7 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              <ul className="mt-6 space-y-2 border-t border-white/[0.06] pt-5">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="h-1 w-1 rounded-full bg-violet-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Services
