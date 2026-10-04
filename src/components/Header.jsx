import React, { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  { name: 'Perfil', href: '#about' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Stack', href: '#skills' },
  { name: 'Capacidades', href: '#services' },
  { name: 'Proyectos', href: '#projects' }
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    const onKeyDown = (event) => event.key === 'Escape' && setOpen(false)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const navigate = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'border-b border-white/[0.07] bg-data-dark/80 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="container-custom flex h-20 items-center justify-between px-5 sm:px-8 lg:px-10">
        <button onClick={() => navigate('#home')} className="flex items-center gap-3" aria-label="Ir al inicio">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 font-data font-bold text-slate-950 shadow-lg shadow-cyan-500/10">EC</span>
          <span className="text-left leading-tight"><span className="block text-sm font-bold text-white">Elias Carmin</span><span className="block font-data text-[10px] uppercase tracking-wider text-slate-500">Cloud & Software</span></span>
        </button>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {links.map((link) => <button key={link.href} onClick={() => navigate(link.href)} className="text-sm font-medium text-slate-400 transition hover:text-white">{link.name}</button>)}
          <button onClick={() => navigate('#contact')} className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">Hablemos <ArrowUpRight size={16} /></button>
        </nav>

        <button onClick={() => setOpen((current) => !current)} className="rounded-xl border border-white/10 p-2.5 text-slate-300 lg:hidden" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="mx-4 mb-4 space-y-1 rounded-2xl border border-white/10 bg-data-gray/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden" aria-label="Navegación móvil">
          {links.map((link) => <button key={link.href} onClick={() => navigate(link.href)} className="block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-300 hover:bg-white/5 hover:text-white">{link.name}</button>)}
          <button onClick={() => navigate('#contact')} className="mt-2 block w-full rounded-xl bg-cyan-300 px-4 py-3 text-left text-sm font-semibold text-slate-950">Hablemos</button>
        </nav>
      )}
    </header>
  )
}

export default Header
