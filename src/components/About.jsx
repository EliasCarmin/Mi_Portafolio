import React from 'react'
import { ArrowUpRight, CheckCircle2, Cloud, Code2, Database, Layers } from 'lucide-react'

const principles = [
  { icon: Cloud, title: 'Cloud con criterio', text: 'Servicios administrados y serverless cuando simplifican la operación y permiten crecer.' },
  { icon: Code2, title: 'Software mantenible', text: 'Interfaces claras, APIs bien definidas y decisiones técnicas fáciles de explicar.' },
  { icon: Database, title: 'Datos conectados', text: 'Bases de datos y flujos que sostienen tanto la operación como la analítica.' },
  { icon: Layers, title: 'Visión de producto', text: 'Conecto necesidades de negocio, experiencia de usuario y arquitectura en una misma solución.' }
]

const experienceHighlights = [
  'Liderazgo de un equipo de tres desarrolladores',
  'APIs de autenticación, usuarios y control de accesos',
  'Cloud Run, Cloud SQL, IAM y funciones en Google Cloud',
  'Data Stream desde MySQL hacia BigQuery'
]

const About = () => (
  <section id="about" className="section-padding relative">
    <div className="container-custom">
      <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <span className="section-kicker">01 / Perfil</span>
          <h2 className="section-title">Convierto procesos reales en <span className="gradient-text">software útil.</span></h2>
          <p className="section-copy">Mi recorrido comenzó automatizando tareas y organizando datos. Esa cercanía con la operación me llevó a construir aplicaciones, APIs y sistemas desplegados en la nube.</p>
          <p className="mt-5 leading-7 text-slate-400">Hoy trabajo entre backend con Python, interfaces React, bases de datos SQL y servicios de Google Cloud. Mi enfoque combina ejecución técnica, entendimiento del negocio y ownership de extremo a extremo.</p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-white">Cuéntame sobre tu reto <ArrowUpRight size={17} /></a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map(({ icon: Icon, title, text }) => (
            <article key={title} className="surface card-hover rounded-2xl p-6">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-400/15 text-cyan-300 ring-1 ring-white/10"><Icon size={22} /></div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </div>

      <div id="experience" className="mt-24 scroll-mt-28">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <span className="section-kicker">Experiencia destacada</span>
            <h3 className="text-3xl font-bold tracking-tight text-white">Business Import Zeus Safety</h3>
            <p className="mt-2 font-data text-xs uppercase tracking-wider text-violet-300">Analista de Datos, Automatización & Data Cloud GCP</p>
          </div>
          <article className="surface rounded-2xl p-7 sm:p-9">
            <p className="text-lg leading-8 text-slate-300">Evolucioné desde la automatización con VBA y AppSheet hasta participar en la construcción de un sistema web empresarial moderno, integrando backend, cloud, datos y coordinación técnica.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {experienceHighlights.map((item) => <div key={item} className="flex gap-3 rounded-xl border border-white/[0.06] bg-slate-950/30 p-4 text-sm leading-6 text-slate-300"><CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={17} /><span>{item}</span></div>)}
            </div>
            <div className="mt-7 flex flex-wrap gap-2">{['Python', 'GCP', 'Cloud Run', 'Cloud SQL', 'React / Next.js', 'MySQL', 'BigQuery', 'GitHub'].map((tag) => <span key={tag} className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">{tag}</span>)}</div>
          </article>
        </div>
      </div>
    </div>
  </section>
)

export default About
