import React from 'react'
import { Braces, Cloud, Database, GitBranch, Server, Workflow } from 'lucide-react'

const groups = [
  { icon: Cloud, title: 'Cloud', description: 'Servicios usados para desplegar aplicaciones, gestionar acceso y conectar datos.', skills: ['Google Cloud', 'Cloud Run', 'Cloud Functions', 'Cloud SQL', 'BigQuery', 'IAM'] },
  { icon: Server, title: 'Backend & APIs', description: 'Servicios e integraciones orientados a automatización y productos web.', skills: ['Python', 'FastAPI', 'REST APIs', 'Autenticación', 'Web Scraping', 'Integraciones IA'] },
  { icon: Braces, title: 'Frontend', description: 'Interfaces web rápidas y adaptables para usuarios y equipos internos.', skills: ['React', 'Next.js', 'JavaScript', 'Vite', 'Tailwind CSS', 'Responsive UI'] },
  { icon: Database, title: 'Bases de datos', description: 'Persistencia operacional y preparación de información para análisis.', skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'BigQuery', 'Modelado SQL', 'ETL'] },
  { icon: Workflow, title: 'Automatización', description: 'Flujos que conectan herramientas, documentos y procesos cotidianos.', skills: ['Apps Script', 'AppSheet', 'VBA', 'OCR', 'Gmail API', 'Gemini API'] },
  { icon: GitBranch, title: 'Forma de trabajo', description: 'Prácticas para construir en equipo y mantener entregas trazables.', skills: ['Git', 'GitHub', 'Documentación', 'Revisión de código', 'Agile', 'AI-assisted dev'] }
]

const Skills = () => (
  <section id="skills" className="section-padding border-y border-white/[0.05] bg-data-gray/60">
    <div className="container-custom">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="section-kicker">02 / Stack</span>
          <h2 className="section-title">Herramientas para construir, conectar y <span className="gradient-text">operar.</span></h2>
          <p className="section-copy">Un stack formado en proyectos reales: desde la interfaz y la API hasta la persistencia, automatización y nube.</p>
        </div>
        <p className="max-w-sm font-data text-xs leading-6 text-slate-500">{'// Aplicaciones cloud · backend · bases de datos · automatización'}</p>
      </div>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ icon: Icon, title, description, skills }, index) => (
          <article key={title} className="surface card-hover group rounded-2xl p-6">
            <div className="flex items-center justify-between"><div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/20 transition group-hover:bg-violet-400/10 group-hover:text-violet-300"><Icon size={22} /></div><span className="font-data text-xs text-slate-600">0{index + 1}</span></div>
            <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-400">{description}</p>
            <div className="mt-6 flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-lg border border-white/[0.07] bg-slate-950/40 px-2.5 py-1.5 text-xs text-slate-300">{skill}</span>)}</div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
