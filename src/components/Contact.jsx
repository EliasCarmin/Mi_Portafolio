import React from 'react'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react'

const Contact = () => (
  <section id="contact" className="section-padding relative overflow-hidden">
    <div className="absolute bottom-0 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-[120px]" />
    <div className="container-custom relative">
      <div className="surface overflow-hidden rounded-[2rem]">
        <div className="grid lg:grid-cols-[1.15fr_.85fr]">
          <div className="p-7 sm:p-10 lg:p-14">
            <span className="section-kicker">05 / Contacto</span>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              ¿Conversamos sobre tu próximo <span className="gradient-text">proyecto?</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Si tienes una propuesta profesional, un requerimiento de arquitectura en Azure, una API por construir o un proceso que necesita automatización, contáctame directamente.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://wa.me/51956224010"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-cyan-500/30"
              >
                <MessageCircle size={18} /> Escribirme por WhatsApp <ArrowUpRight size={17} />
              </a>
              <a
                href="mailto:eliasjesuscarmin@gmail.com?subject=Contacto%20Profesional%20-%20Elias%20Carmin"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3.5 font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/[0.08]"
              >
                <Mail size={18} /> Enviar email
              </a>
            </div>
          </div>

          <div className="border-t border-white/[0.07] bg-white/[0.025] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <p className="font-data text-xs uppercase tracking-[0.2em] text-slate-500">Canales directos</p>
            <div className="mt-7 space-y-3">
              <a
                href="https://wa.me/51956224010"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-cyan-400/20 bg-cyan-400/[0.04] p-4 transition hover:border-cyan-400/50"
              >
                <span className="flex items-center gap-3 text-sm text-slate-200">
                  <MessageCircle className="text-cyan-300" size={19} />
                  <span>WhatsApp <span className="text-xs text-slate-400 font-data">(+51 956 224 010)</span></span>
                </span>
                <ArrowUpRight className="text-slate-500 group-hover:text-cyan-300" size={17} />
              </a>
              <a
                href="mailto:eliasjesuscarmin@gmail.com"
                className="group flex items-center justify-between rounded-xl border border-white/[0.07] bg-slate-950/30 p-4 transition hover:border-cyan-300/30"
              >
                <span className="flex items-center gap-3 text-sm text-slate-300">
                  <Mail className="text-cyan-300" size={19} /> Email
                </span>
                <ArrowUpRight className="text-slate-600 group-hover:text-white" size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/elias-carmin/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/[0.07] bg-slate-950/30 p-4 transition hover:border-cyan-300/30"
              >
                <span className="flex items-center gap-3 text-sm text-slate-300">
                  <Linkedin className="text-cyan-300" size={19} /> LinkedIn
                </span>
                <ArrowUpRight className="text-slate-600 group-hover:text-white" size={17} />
              </a>
              <a
                href="https://github.com/EliasCarmin"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/[0.07] bg-slate-950/30 p-4 transition hover:border-cyan-300/30"
              >
                <span className="flex items-center gap-3 text-sm text-slate-300">
                  <Github className="text-cyan-300" size={19} /> GitHub
                </span>
                <ArrowUpRight className="text-slate-600 group-hover:text-white" size={17} />
              </a>
            </div>
            <div className="mt-7 flex items-center gap-3 text-sm text-slate-500">
              <MapPin size={17} /> Lima, Perú · Colaboración remota
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Abierto a propuestas de arquitectura cloud, desarrollo de soluciones, integraciones y consultoría.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
