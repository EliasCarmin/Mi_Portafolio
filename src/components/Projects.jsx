import React, { useState } from 'react'
import { ArrowUpRight, Braces, Cloud, Code2, Database, ExternalLink, Layers } from 'lucide-react'
import { projectFilters, projects } from '../data/projects'
import ProjectDetail from './ProjectDetail'

const categoryIcons = { cloud: Cloud, backend: Code2, software: Braces, data: Database }
const accentStyles = {
  cyan: 'from-cyan-400/25 to-sky-500/5 text-cyan-200',
  violet: 'from-violet-400/25 to-fuchsia-500/5 text-violet-200',
  sky: 'from-sky-400/25 to-cyan-500/5 text-sky-200',
  blue: 'from-blue-400/25 to-cyan-500/5 text-blue-200',
  indigo: 'from-indigo-400/25 to-violet-500/5 text-indigo-200',
  purple: 'from-purple-400/25 to-violet-500/5 text-purple-200'
}

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const visibleProjects = filter === 'all' ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="section-padding border-y border-white/[0.05] bg-data-gray/60">
      <div className="container-custom">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="section-kicker">04 / Casos seleccionados</span>
            <h2 className="section-title">Del problema a una solución <span className="gradient-text">que funciona.</span></h2>
            <p className="section-copy">Proyectos explicados desde el reto, las decisiones técnicas y el resultado; no solo desde las herramientas utilizadas.</p>
          </div>
          <div className="flex max-w-2xl flex-wrap gap-2" aria-label="Filtrar proyectos">
            {projectFilters.map((item) => (
              <button key={item.id} onClick={() => setFilter(item.id)} aria-pressed={filter === item.id} className={`rounded-lg px-3.5 py-2 text-xs font-medium transition ${filter === item.id ? 'bg-cyan-300 text-slate-950' : 'border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:text-white'}`}>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => {
            const Icon = categoryIcons[project.category] || Layers
            return (
              <article key={project.id} className="surface card-hover group flex flex-col overflow-hidden rounded-2xl">
                <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${accentStyles[project.accent]}`}>
                  <div className="bg-grid absolute inset-0 opacity-50" />
                  <div className="absolute -bottom-16 -right-10 h-44 w-44 rounded-full border border-current/10" />
                  <div className="absolute -bottom-8 -right-2 h-28 w-28 rounded-full border border-current/10" />
                  <div className="absolute inset-0 flex items-center justify-between p-6">
                    <Icon size={42} strokeWidth={1.3} />
                    <span className="font-data text-5xl font-semibold text-white/[0.06]">0{index + 1}</span>
                  </div>
                  <span className="absolute bottom-4 left-6 font-data text-[10px] uppercase tracking-[0.2em] text-current">{project.categoryLabel}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
                    {project.technologies.slice(0, 4).map((technology) => <span key={technology} className="font-data text-[11px] text-slate-500">{technology}</span>)}
                  </div>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                    <button onClick={() => setSelectedProject(project)} className="inline-flex flex-1 items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-white">Ver caso <ArrowUpRight size={16} /></button>
                    {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.title}`} className="rounded-lg p-1.5 text-slate-500 transition hover:bg-white/5 hover:text-white"><ExternalLink size={18} /></a>}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
      {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}

export default Projects
