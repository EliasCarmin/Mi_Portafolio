import React from 'react'
import { Award, Cloud, Code2, Network } from 'lucide-react'

const pillars = [
  { icon: Cloud, label: 'Nube principal', value: 'Microsoft Azure (AZ-900) & GCP' },
  { icon: Code2, label: 'Desarrollo & Backend', value: 'Python, FastAPI & React' },
  { icon: Network, label: 'Infraestructura & Redes', value: 'VPN Híbrida, BGP & FinOps' },
  { icon: Award, label: 'Formación profesional', value: 'Bachiller Ing. de Sistemas · UTP' }
]

const Clients = () => (
  <section className="border-y border-white/[0.06] bg-white/[0.015]">
    <div className="container-custom grid grid-cols-2 divide-x divide-y divide-white/[0.06] px-5 sm:px-8 md:grid-cols-4 md:divide-y-0 lg:px-10">
      {pillars.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-center gap-3 px-3 py-7 sm:px-6">
          <Icon className="shrink-0 text-cyan-300" size={22} />
          <div>
            <p className="font-data text-[10px] uppercase tracking-widest text-slate-500">{label}</p>
            <p className="mt-1 text-sm font-semibold text-slate-200">{value}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Clients
