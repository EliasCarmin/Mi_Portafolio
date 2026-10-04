import React from 'react'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'

const Contact = () => (
  <section id="contact" className="section-padding relative overflow-hidden">
    <div className="absolute bottom-0 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-[120px]" />
    <div className="container-custom relative">
      <div className="surface overflow-hidden rounded-[2rem]">
        <div className="grid lg:grid-cols-[1.15fr_.85fr]">
          <div className="p-7 sm:p-10 lg:p-14">
            <span className="section-kicker">05 / Contacto</span>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">¿Construimos la próxima <span className="gradient-text">solución?</span></h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">Si tienes una idea, un proceso que necesita automatización o una plataforma que debe migrar y crecer en cloud, conversemos.</p>
            <a href="mailto:eliasjesuscarmin@gmail.com?subject=Proyecto%20Cloud%20o%20Software" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-200">
              <Mail size={18} /> Escribirme por email <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="border-t border-white/[0.07] bg-white/[0.025] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <p className="font-data text-xs uppercase tracking-[0.2em] text-slate-500">Canales directos</p>
            <div className="mt-7 space-y-3">
              <a href="mailto:eliasjesuscarmin@gmail.com" className="group flex items-center justify-between rounded-xl border border-white/[0.07] bg-slate-950/30 p-4 transition hover:border-cyan-300/30">
                <span className="flex items-center gap-3 text-sm text-slate-300"><Mail className="text-cyan-300" size={19} /> Email</span><ArrowUpRight className="text-slate-600 group-hover:text-white" size={17} />
              </a>
              <a href="https://www.linkedin.com/in/elias-carmin/" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-xl border border-white/[0.07] bg-slate-950/30 p-4 transition hover:border-cyan-300/30">
                <span className="flex items-center gap-3 text-sm text-slate-300"><Linkedin className="text-cyan-300" size={19} /> LinkedIn</span><ArrowUpRight className="text-slate-600 group-hover:text-white" size={17} />
              </a>
              <a href="https://github.com/EliasCarmin" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-xl border border-white/[0.07] bg-slate-950/30 p-4 transition hover:border-cyan-300/30">
                <span className="flex items-center gap-3 text-sm text-slate-300"><Github className="text-cyan-300" size={19} /> GitHub</span><ArrowUpRight className="text-slate-600 group-hover:text-white" size={17} />
              </a>
            </div>
            <div className="mt-7 flex items-center gap-3 text-sm text-slate-500"><MapPin size={17} /> Lima, Perú · Colaboración remota</div>
            <p className="mt-3 text-sm leading-6 text-slate-500">Disponible para conversar sobre productos cloud, backend, automatización e integraciones.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
