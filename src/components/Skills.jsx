import React from 'react'
import { Bot, Cloud, Cpu, Database, Network, Terminal } from 'lucide-react'

const groups = [
  {
    icon: Cloud,
    title: 'Microsoft Azure',
    description: 'Infraestructura, computación, almacenamiento y gobernanza con certificación AZ-900.',
    skills: ['Azure Virtual Machines', 'Storage Accounts', 'Azure Backup', 'Microsoft Entra ID', 'RBAC & Azure Policy', 'FinOps & Cost Analysis', 'Defender for Cloud', 'Key Vault']
  },
  {
    icon: Network,
    title: 'Networking & Conectividad',
    description: 'Topologías híbridas y seguridad de red entre entornos on-premises y Azure.',
    skills: ['Azure VNet & Subnets', 'VPN Gateway (S2S / P2S)', 'BGP & Active-Active', 'VNet Peering', 'Private Link & Endpoints', 'NSG & Route Tables', 'DNS en Azure']
  },
  {
    icon: Cpu,
    title: 'Backend & APIs',
    description: 'Servicios en Python y arquitecturas de microservicios contenerizados.',
    skills: ['Python', 'FastAPI', 'Flask', 'REST APIs', 'Web Scraping', 'Docker', 'Swagger / OpenAPI', 'Tokens & JWT']
  },
  {
    icon: Database,
    title: 'Bases de datos & Analítica',
    description: 'Persistencia operacional relacional y flujos de análisis de información.',
    skills: ['SQL Server', 'Azure SQL Database', 'PostgreSQL', 'MySQL', 'Google BigQuery', 'Power BI', 'Looker Studio', 'Modelado relacional']
  },
  {
    icon: Terminal,
    title: 'Scripting & Automatización',
    description: 'Herramientas de línea de comandos y flujos que optimizan la operación diaria.',
    skills: ['PowerShell', 'Bash', 'Azure CLI', 'Git / GitHub', 'Pandas & NumPy', 'DuckDB', 'AppSheet', 'VBA & Macros']
  },
  {
    icon: Bot,
    title: 'IA Aplicada & Multicloud',
    description: 'Integración práctica de modelos de lenguaje e infraestructura complementaria.',
    skills: ['Azure AI Foundry', 'Agentes & Knowledge Bases', 'Azure Container Apps', 'Google Cloud (Cloud Run)', 'Scrum Fundamentals', 'Lean Six Sigma']
  }
]

const Skills = () => (
  <section id="skills" className="section-padding border-y border-white/[0.05] bg-data-gray/60">
    <div className="container-custom">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="section-kicker">02 / Stack</span>
          <h2 className="section-title">Tecnologías para diseñar, conectar y <span className="gradient-text">operar.</span></h2>
          <p className="section-copy">Un repertorio técnico forjado en proyectos reales: desde la arquitectura cloud hasta el código y la analítica.</p>
        </div>
        <p className="max-w-sm font-data text-xs leading-6 text-slate-500">{'// Microsoft Azure · Networking · Backend Python · Datos & Automatización'}</p>
      </div>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ icon: Icon, title, description, skills }, index) => (
          <article key={title} className="surface card-hover group rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/20 transition group-hover:bg-violet-400/10 group-hover:text-violet-300">
                <Icon size={22} />
              </div>
              <span className="font-data text-xs text-slate-600">0{index + 1}</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-400">{description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-lg border border-white/[0.07] bg-slate-950/40 px-2.5 py-1.5 text-xs text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
