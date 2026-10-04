export const projects = [
  {
    id: 'enterprise-cloud',
    title: 'Sistema empresarial en Google Cloud',
    category: 'cloud',
    categoryLabel: 'Cloud application',
    summary: 'Evolución de procesos internos dispersos hacia una aplicación empresarial con APIs, control de acceso y datos centralizados.',
    challenge: 'Marketing, logística, ventas y administración trabajaban con procesos y fuentes desconectadas que dificultaban la operación.',
    solution: 'Lideré un equipo de tres desarrolladores y participé en el backend, autenticación, permisos, base de datos y despliegue cloud del nuevo sistema.',
    architecture: ['Frontend React/Next.js desplegado en Vercel', 'Backend Python ejecutándose en Cloud Run', 'Cloud SQL con MySQL e IAM para accesos', 'Data Stream hacia BigQuery para analítica'],
    technologies: ['GCP', 'Cloud Run', 'Cloud SQL', 'Python', 'React', 'BigQuery'],
    outcome: 'Una base técnica unificada para operar procesos internos y habilitar análisis posteriores en Power BI o Looker Studio.',
    accent: 'cyan'
  },
  {
    id: 'payments-pipeline',
    title: 'Pipeline serverless de pagos',
    category: 'cloud',
    categoryLabel: 'Serverless & AI',
    summary: 'Flujo automatizado que transforma notificaciones de pago recibidas por correo en registros financieros consultables.',
    challenge: 'Extraer información consistente desde correos con formatos variables y dejarla disponible para una aplicación financiera.',
    solution: 'Construí un pipeline que captura mensajes de Gmail, procesa el contenido con reglas de NLP y utiliza Gemini como mecanismo de respaldo.',
    architecture: ['Captura de correos asociados a pagos', 'Procesamiento y extracción de entidades', 'Fallback con Gemini para casos ambiguos', 'Persistencia PostgreSQL y consumo vía API'],
    technologies: ['Python', 'Cloud Functions', 'PostgreSQL', 'Gemini API', 'REST API'],
    outcome: 'Un flujo reutilizable que reduce la intervención manual y entrega datos estructurados a una aplicación personal de finanzas.',
    accent: 'violet'
  },
  {
    id: 'sunat-api',
    title: 'API de consulta RUC SUNAT',
    category: 'backend',
    categoryLabel: 'Backend API',
    summary: 'Servicio en Python que consulta información empresarial pública y la entrega mediante una interfaz REST consistente.',
    challenge: 'Integrar datos del portal de SUNAT en otros sistemas sin obligar a cada aplicación a interpretar la fuente original.',
    solution: 'Diseñé una API con FastAPI y web scraping, incorporando normalización de respuestas, validación y manejo explícito de errores.',
    architecture: ['Endpoint de consulta por RUC', 'Extracción desde la fuente pública', 'Normalización a un contrato JSON', 'Validaciones y respuestas de error predecibles'],
    technologies: ['Python', 'FastAPI', 'Web Scraping', 'REST', 'JSON'],
    outcome: 'Una capa de integración simple para reutilizar información empresarial en aplicaciones y automatizaciones.',
    accent: 'sky'
  },
  {
    id: 'gcp-study',
    title: 'Plataforma de estudio GCP',
    category: 'software',
    categoryLabel: 'Web product',
    summary: 'Aplicación web enfocada en practicar conceptos de Google Cloud mediante preguntas, feedback y seguimiento por categorías.',
    challenge: 'Convertir un banco de preguntas en una experiencia de preparación clara, rápida y utilizable desde cualquier dispositivo.',
    solution: 'Desarrollé una interfaz responsive con modos de estudio y examen, navegación enfocada y retroalimentación inmediata.',
    architecture: ['SPA construida con React y Vite', 'Experiencia responsive con Tailwind CSS', 'Modos de práctica y simulación', 'Despliegue continuo en Vercel'],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    outcome: 'Un producto disponible públicamente que convierte contenido técnico en una experiencia de aprendizaje estructurada.',
    demo: 'https://goocle-cloud-bank-questions.vercel.app/',
    accent: 'blue'
  },
  {
    id: 'elections-platform',
    title: 'Portal Elecciones Perú 2026',
    category: 'software',
    categoryLabel: 'Information platform',
    summary: 'Producto web que organiza información electoral para facilitar la exploración de candidatos y propuestas.',
    challenge: 'Presentar una gran cantidad de información pública sin perder claridad, jerarquía ni facilidad de comparación.',
    solution: 'Construí una experiencia responsive centrada en perfiles, navegación comprensible y acceso directo a la información.',
    architecture: ['Frontend modular con React', 'Componentes y layout responsive', 'Integración de fuentes de datos', 'Hosting y entrega mediante Vercel'],
    technologies: ['React', 'Tailwind CSS', 'APIs', 'Vercel'],
    outcome: 'Una interfaz pública que hace más accesible la consulta de información electoral desde web y móvil.',
    demo: 'https://elecciones-peru-2026-frontend.vercel.app/',
    accent: 'indigo'
  },
  {
    id: 'recommendation-engine',
    title: 'Motor de recomendaciones',
    category: 'data',
    categoryLabel: 'Data engineering',
    summary: 'Sistema que prepara datos y aplica filtrado colaborativo para generar recomendaciones explorables en una capa visual.',
    challenge: 'Transformar un dataset de interacciones en señales útiles para recomendar productos con comportamientos similares.',
    solution: 'Implementé el flujo ETL, persistencia SQL y un modelo basado en similitud del coseno, acompañado de visualización en Power BI.',
    architecture: ['ETL con Python y Pandas', 'Persistencia y consultas en SQL Server', 'Filtrado colaborativo con Scikit-learn', 'Exploración de resultados en Power BI'],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'SQL Server', 'Power BI'],
    outcome: 'Un proyecto de extremo a extremo que conecta preparación de datos, modelado y comunicación visual de resultados.',
    accent: 'purple'
  }
]

export const projectFilters = [
  { id: 'all', label: 'Todos' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'backend', label: 'Backend' },
  { id: 'software', label: 'Software' },
  { id: 'data', label: 'Data systems' }
]
