import React from 'react'
import { ArrowUpRight, Award, CheckCircle2, Cloud, Code2, Database, GraduationCap, Network, ShieldCheck } from 'lucide-react'

const principles = [
  {
    icon: Cloud,
    title: 'Cloud con criterio y FinOps',
    text: 'Diseño en Azure y multicloud enfocado en alta disponibilidad, seguridad, dimensionamiento exacto y eficiencia de costos.'
  },
  {
    icon: Network,
    title: 'Conectividad & Networking',
    text: 'Topologías híbridas seguras: VPN Site-to-Site, BGP, peering de VNets, Private Endpoints y control estricto de tráfico.'
  },
  {
    icon: Code2,
    title: 'Software & Automatización',
    text: 'APIs limpias con Python y FastAPI, scripts en PowerShell/Bash y flujos que eliminan tareas repetitivas.'
  },
  {
    icon: Database,
    title: 'Datos & IA aplicada',
    text: 'Modelado relacional, analítica con SQL y Power BI, e integración de agentes inteligentes con Azure AI Foundry.'
  }
]

const azureHighlights = [
  'Conectividad híbrida: VPN Site-to-Site, BGP y escenarios Active-Active',
  'Networking Azure: VNets, subnets, NSGs, Private Endpoints y Route Tables',
  'Infraestructura y continuidad: VMs, Managed Disks y Azure Backup',
  'Gobernanza y seguridad: Microsoft Entra ID, RBAC, Azure Policy y Key Vault',
  'Optimización y FinOps: Cost Analysis, Reserved Instances y Hybrid Benefit',
  'Soluciones de IA generativa con Azure AI Foundry y Container Apps'
]

const zeusHighlights = [
  'Liderazgo de equipo de tres desarrolladores para sistema empresarial',
  'Diseño y programación de APIs de autenticación, usuarios y control de accesos',
  'Despliegue cloud en GCP: Cloud Run, Cloud SQL (MySQL), IAM y Google Functions',
  'Data Stream de datos operacionales hacia BigQuery para analítica y dashboards'
]

const certifications = [
  { name: 'Microsoft Certified: Azure Fundamentals (AZ-900)', issuer: 'Microsoft', status: 'Certificado' },
  { name: 'Ruta de preparación: Azure Administrator (AZ-104)', issuer: 'Microsoft', status: 'En preparación' },
  { name: 'Scrum Fundamentals Certified', issuer: 'ScrumStudy', status: 'Certificado' },
  { name: 'Lean Six Sigma White Belt Learner', issuer: 'CertiProf', status: 'Certificado' },
  { name: 'Especialización Data Analyst', issuer: 'Platzi', status: 'Completado' }
]

const About = () => (
  <section id="about" className="section-padding relative">
    <div className="container-custom">
      {/* Perfil Header */}
      <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <span className="section-kicker">01 / Perfil</span>
          <h2 className="section-title">Ingeniería cloud, código y <span className="gradient-text">visión operativa.</span></h2>
          <p className="section-copy">
            Soy <strong>Bachiller en Ingeniería de Sistemas</strong> (UTP, Tercio Superior) y me desempeño como <strong>Cloud & Software Engineer</strong>. Mi trayectoria une la consultoría e implementación en infraestructura cloud con el desarrollo de software y la ingeniería de datos.
          </p>
          <p className="mt-5 leading-7 text-slate-400">
            Actualmente me desempeño como <strong>Cloud Champion</strong> en el ecosistema de <strong>Ingram Micro e Integratel</strong>, participando en el levantamiento, diseño de arquitectura, despliegue, networking y optimización de costos en soluciones basadas en <strong>Microsoft Azure</strong>.
          </p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-white">
            Conversemos sobre tu infraestructura o proyecto <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map(({ icon: Icon, title, text }) => (
            <article key={title} className="surface card-hover rounded-2xl p-6">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-400/15 text-cyan-300 ring-1 ring-white/10">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Experiencia profesional */}
      <div id="experience" className="mt-24 scroll-mt-28">
        <span className="section-kicker">Trayectoria profesional</span>
        <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Experiencia técnica en entornos empresariales
        </h3>

        <div className="mt-10 space-y-8">
          {/* Experiencia 1: Cloud Champion */}
          <article className="surface rounded-2xl p-7 sm:p-9 border border-cyan-400/20 bg-gradient-to-b from-cyan-950/20 to-transparent">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 font-data text-xs font-semibold text-cyan-300">
                  ROL ACTUAL · ECOSISTEMA INGRAM MICRO / INTEGRATEL
                </span>
                <h4 className="mt-3 text-2xl font-bold text-white">Cloud Champion — Soluciones Microsoft Azure</h4>
                <p className="mt-1 text-sm text-slate-400">Arquitectura, consultoría técnica, conectividad híbrida y optimización cloud</p>
              </div>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-300">
              Participación técnica en diseño, dimensionamiento, despliegue y acompañamiento en implementaciones sobre Microsoft Azure. Trabajo directo en requerimientos de conectividad híbrida entre sedes locales y Azure, seguridad de redes, gobernanza, políticas de backup y análisis de inversión tecnológica (FinOps).
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {azureHighlights.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-white/[0.06] bg-slate-950/40 p-4 text-xs leading-5 text-slate-300">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
              {['Microsoft Azure', 'AZ-900 Certified', 'Azure VPN Gateway', 'BGP', 'VNet Peering', 'Virtual Machines', 'Azure Backup', 'Entra ID', 'Azure Policy', 'FinOps', 'Azure AI Foundry'].map((tag) => (
                <span key={tag} className="rounded-lg border border-cyan-400/20 bg-cyan-400/[0.05] px-2.5 py-1 text-xs text-cyan-200">{tag}</span>
              ))}
            </div>
          </article>

          {/* Experiencia 2: Zeus Safety */}
          <article className="surface rounded-2xl p-7 sm:p-9">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-data text-xs text-slate-400">
                  BUSINESS IMPORT ZEUS SAFETY
                </span>
                <h4 className="mt-3 text-2xl font-bold text-white">Analista de Datos, Automatización & Data Cloud GCP</h4>
                <p className="mt-1 text-sm text-slate-400">Liderazgo técnico de desarrollo, APIs backend, infraestructura cloud y analítica</p>
              </div>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-300">
              Evolución integral de procesos desde la automatización con VBA y AppSheet hasta liderar a un equipo de tres desarrolladores en la construcción de un sistema web empresarial con arquitectura desacoplada, backend Python en Cloud Run y persistencia en Cloud SQL conectada a BigQuery.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {zeusHighlights.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-white/[0.06] bg-slate-950/40 p-4 text-xs leading-5 text-slate-300">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-violet-300" size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
              {['Python', 'FastAPI', 'Google Cloud', 'Cloud Run', 'Cloud SQL', 'React / Next.js', 'MySQL', 'BigQuery', 'Power BI'].map((tag) => (
                <span key={tag} className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">{tag}</span>
              ))}
            </div>
          </article>
        </div>
      </div>

      {/* Formación y Certificaciones */}
      <div className="mt-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Educación */}
          <div className="surface rounded-2xl p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/20">
                <GraduationCap size={22} />
              </div>
              <div>
                <p className="font-data text-xs uppercase tracking-widest text-cyan-300">Formación Académica</p>
                <h4 className="text-xl font-bold text-white">Universidad Tecnológica del Perú (UTP)</h4>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="rounded-xl border border-white/[0.06] bg-slate-950/30 p-4">
                <p className="font-semibold text-white">Bachiller en Ingeniería de Sistemas</p>
                <p className="text-sm text-slate-400">Periodo: 2020 — 2025</p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  <Award size={14} /> Logro: Tercio Superior
                </div>
              </div>
            </div>
          </div>

          {/* Certificaciones */}
          <div className="surface rounded-2xl p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet-400/10 text-violet-300 ring-1 ring-violet-300/20">
                <ShieldCheck size={22} />
              </div>
              <div>
                <p className="font-data text-xs uppercase tracking-widest text-violet-300">Certificaciones & Especializaciones</p>
                <h4 className="text-xl font-bold text-white">Validación de capacidades técnicas</h4>
              </div>
            </div>
            <div className="mt-6 space-y-2.5">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-slate-950/30 p-3.5 text-xs">
                  <div>
                    <p className="font-medium text-slate-200">{cert.name}</p>
                    <p className="text-slate-500 font-data">{cert.issuer}</p>
                  </div>
                  <span className={`shrink-0 rounded-md px-2.5 py-1 font-data text-[10px] font-semibold ${
                    cert.status === 'En preparación'
                      ? 'border border-amber-400/30 bg-amber-400/10 text-amber-300'
                      : 'border border-cyan-400/30 bg-cyan-400/10 text-cyan-300'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
