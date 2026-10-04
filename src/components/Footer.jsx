import React from 'react'
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => (
  <footer className="border-t border-white/[0.06] bg-slate-950/40">
    <div className="container-custom flex flex-col items-center justify-between gap-6 px-5 py-8 text-center sm:px-8 md:flex-row md:text-left lg:px-10">
      <div>
        <p className="font-semibold text-white">Elias Carmin</p>
        <p className="mt-1 text-sm text-slate-500">Cloud & Software Engineer · © {new Date().getFullYear()}</p>
      </div>
      <div className="flex items-center gap-3">
        <a href="mailto:eliasjesuscarmin@gmail.com" aria-label="Email" className="rounded-lg border border-white/[0.08] p-2.5 text-slate-400 transition hover:border-cyan-300/30 hover:text-cyan-300"><Mail size={18} /></a>
        <a href="https://github.com/EliasCarmin" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg border border-white/[0.08] p-2.5 text-slate-400 transition hover:border-cyan-300/30 hover:text-cyan-300"><Github size={18} /></a>
        <a href="https://www.linkedin.com/in/elias-carmin/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg border border-white/[0.08] p-2.5 text-slate-400 transition hover:border-cyan-300/30 hover:text-cyan-300"><Linkedin size={18} /></a>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Volver arriba" className="ml-2 rounded-lg bg-white p-2.5 text-slate-950 transition hover:bg-cyan-200"><ArrowUp size={18} /></button>
      </div>
    </div>
  </footer>
)

export default Footer
