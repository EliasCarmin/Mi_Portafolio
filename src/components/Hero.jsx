import React from 'react'
import { ArrowDown, ArrowRight, Cloud, Code2, Database, Github, Linkedin, MapPin, ServerCog } from 'lucide-react'
import eliasImage from '../assets/Elias.jpg'

const Hero = () => {
  const scrollTo = (selector) => document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="bg-grid absolute inset-0 opacity-70" />
      <div className="absolute left-[8%] top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="absolute right-[5%] top-36 h-80 w-80 rounded-full bg-violet-500/10 blur-[110px]" />

      <div className="container-custom section-padding relative z-10 grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 font-data text-xs text-cyan-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            Disponible para proyectos cloud & software
          </div>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Construyo productos digitales que viven y escalan en la <span className="gradient-text">nube.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            Soy Elias, Cloud & Software Engineer. Construyo APIs, aplicaciones web y sistemas de datos sobre Google Cloud, convirtiendo necesidades operativas en productos mantenibles.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => scrollTo('#projects')} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-cyan-500/30">
              Explorar proyectos <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollTo('#contact')} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition hover:border-violet-400/40 hover:bg-white/[0.07]">
              Trabajemos juntos
            </button>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2"><MapPin size={15} /> Lima, Perú · Remoto</span>
            <a href="https://github.com/EliasCarmin" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-cyan-300"><Github size={16} /> GitHub</a>
            <a href="https://www.linkedin.com/in/elias-carmin/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-cyan-300"><Linkedin size={16} /> LinkedIn</a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-cyan-500/10 to-violet-500/10 blur-3xl" />
          <div className="surface relative overflow-hidden rounded-[2rem] p-3 shadow-2xl">
            <div className="relative overflow-hidden rounded-[1.45rem] bg-gradient-to-br from-slate-800 to-slate-950">
              <img src={eliasImage} alt="Elias Carmin, Cloud & Software Engineer" className="aspect-[4/5] w-full object-cover object-top opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-data-dark via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-slate-950/75 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-data text-xs text-cyan-300">CURRENT_FOCUS</p>
                    <p className="mt-1 font-semibold text-white">GCP · Python · Cloud Native</p>
                  </div>
                  <ServerCog className="text-violet-300" size={25} />
                </div>
              </div>
            </div>
          </div>
          <div className="surface absolute -left-8 top-20 hidden rounded-2xl p-3 text-cyan-300 shadow-xl sm:block"><Cloud size={24} /></div>
          <div className="surface absolute -right-7 top-36 hidden rounded-2xl p-3 text-violet-300 shadow-xl sm:block"><Code2 size={24} /></div>
          <div className="surface absolute -left-5 bottom-24 hidden rounded-2xl p-3 text-sky-300 shadow-xl sm:block"><Database size={24} /></div>
        </div>
      </div>

      <button onClick={() => scrollTo('#about')} className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-cyan-300 md:block" aria-label="Conocer más">
        <ArrowDown className="animate-bounce" size={22} />
      </button>
    </section>
  )
}

export default Hero
