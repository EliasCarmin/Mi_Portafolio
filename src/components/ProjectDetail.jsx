import React, { useEffect, useRef } from 'react'
import { ArrowUpRight, CheckCircle2, ExternalLink, X } from 'lucide-react'

const ProjectDetail = ({ project, onClose }) => {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-slate-950/85 p-0 backdrop-blur-md sm:items-center sm:p-6" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <article role="dialog" aria-modal="true" aria-labelledby="project-title" className="custom-scrollbar max-h-[94vh] w-full max-w-4xl overflow-y-auto rounded-t-[2rem] border border-white/10 bg-[#0b1120] shadow-2xl sm:rounded-[2rem]">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-white/[0.07] bg-[#0b1120]/90 px-6 py-4 backdrop-blur-xl sm:px-8">
          <span className="font-data text-[11px] uppercase tracking-[0.2em] text-cyan-300">{project.categoryLabel}</span>
          <button ref={closeButtonRef} onClick={onClose} aria-label="Cerrar detalle" className="rounded-xl border border-white/10 p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"><X size={20} /></button>
        </header>

        <div className="p-6 sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="font-data text-xs text-slate-500">CASE STUDY / {project.id.toUpperCase()}</p>
            <h2 id="project-title" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">{project.title}</h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">{project.summary}</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {project.technologies.map((technology) => <span key={technology} className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.05] px-3 py-1.5 text-xs text-cyan-100">{technology}</span>)}
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <section className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">
              <p className="font-data text-[10px] uppercase tracking-[0.2em] text-violet-300">El reto</p>
              <p className="mt-4 leading-7 text-slate-300">{project.challenge}</p>
            </section>
            <section className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">
              <p className="font-data text-[10px] uppercase tracking-[0.2em] text-cyan-300">Mi contribución</p>
              <p className="mt-4 leading-7 text-slate-300">{project.solution}</p>
            </section>
          </div>

          <section className="mt-5 rounded-2xl border border-white/[0.07] bg-slate-950/40 p-6 sm:p-8">
            <p className="font-data text-[10px] uppercase tracking-[0.2em] text-slate-500">Arquitectura y decisiones</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.architecture.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={17} /><span>{item}</span></div>)}
            </div>
          </section>

          <section className="mt-5 rounded-2xl border border-violet-300/15 bg-gradient-to-r from-violet-400/[0.07] to-cyan-400/[0.05] p-6 sm:p-8">
            <p className="font-data text-[10px] uppercase tracking-[0.2em] text-violet-200">Resultado</p>
            <p className="mt-4 text-lg leading-8 text-slate-200">{project.outcome}</p>
          </section>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">Abrir proyecto <ExternalLink size={17} /></a>}
            <a href="#contact" onClick={onClose} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/[0.04]">Conversemos <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ProjectDetail
