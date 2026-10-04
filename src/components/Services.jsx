import React from 'react'
import { ArrowRight, Bot, Cloud, Code2, Database } from 'lucide-react'

const capabilities = [
  { icon: Cloud, number: '01', title: 'Aplicaciones cloud', text: 'Diseño soluciones con servicios administrados y serverless para reducir carga operativa.', deliverables: ['Arquitectura de aplicación', 'Despliegue en GCP', 'Identidad y permisos'] },
  { icon: Code2, number: '02', title: 'Backend & APIs', text: 'Construyo servicios en Python que conectan productos, datos y herramientas externas.', deliverables: ['APIs con FastAPI', 'Autenticación y accesos', 'Integración de servicios'] },
  { icon: Database, number: '03', title: 'Sistemas de datos', text: 'Modelo y conecto bases de datos para sostener operaciones y habilitar analítica.', deliverables: ['Modelado SQL', 'ETL y sincronización', 'Bases de datos cloud'] },
  { icon: Bot, number: '04', title: 'Automatización', text: 'Transformo tareas repetitivas en flujos claros mediante código, APIs e IA aplicada.', deliverables: ['Workflows automáticos', 'Scraping y OCR', 'Integraciones con IA'] }
]

const Services = () => (
  <section id="services" className="section-padding">
    <div className="container-custom">
      <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="section-kicker">03 / Capacidades</span>
          <h2 className="section-title">Puedo aportar de extremo a extremo.</h2>
          <p className="section-copy">Desde entender el proceso hasta construir una primera versión, conectarla con sus datos y llevarla a la nube.</p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/5">Conversemos sobre tu proyecto <ArrowRight size={16} /></a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map(({ icon: Icon, number, title, text, deliverables }) => (
            <article key={title} className="surface card-hover rounded-2xl p-7">
              <div className="flex items-center justify-between"><Icon className="text-cyan-300" size={27} /><span className="font-data text-xs text-slate-600">{number}</span></div>
              <h3 className="mt-7 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              <ul className="mt-6 space-y-2 border-t border-white/[0.06] pt-5">{deliverables.map((item) => <li key={item} className="flex items-center gap-2 text-xs text-slate-300"><span className="h-1 w-1 rounded-full bg-violet-300" />{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Services
