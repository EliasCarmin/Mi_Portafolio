export const projects = [
  {
    id: 'azure-ai-assistant',
    title: 'Agente de IA profesional en Azure',
    category: 'cloud',
    categoryLabel: 'Azure AI & Cloud',
    summary: 'Arquitectura y despliegue de un asistente virtual inteligente integrado con Azure AI Foundry, FastAPI y Azure Container Apps.',
    challenge: 'Exponer un modelo de lenguaje con base de conocimiento personalizada mediante una API de streaming segura y costo-eficiente.',
    solution: 'Diseñé una solución desacoplada utilizando Azure AI Foundry para orquestación del agente y una API FastAPI en Azure Container Apps con streaming SSE.',
    architecture: [
      'Agente configurado en Azure AI Foundry con base de conocimiento',
      'Backend FastAPI empaquetado en contenedor Docker',
      'Despliegue serverless sobre Azure Container Apps con escalado bajo demanda',
      'Streaming de eventos Server-Sent Events (SSE) y consumo reactivo en frontend'
    ],
    technologies: ['Microsoft Azure', 'Azure AI Foundry', 'Azure Container Apps', 'Docker', 'FastAPI', 'Python'],
    outcome: 'Un asistente profesional en producción capaz de responder sobre perfil técnico con latencia mínima y estricto control de contexto.',
    accent: 'cyan'
  },
  {
    id: 'hybrid-networking',
    title: 'Conectividad híbrida y redes en Azure',
    category: 'cloud',
    categoryLabel: 'Cloud Networking',
    summary: 'Diseño e implementación de topologías seguras de red en Azure para interconexión on-premises y aislamiento de cargas de trabajo.',
    challenge: 'Garantizar comunicación segura, tolerante a fallos y enrutamiento dinámico entre sucursales locales y recursos en Azure.',
    solution: 'Configuré VPN Gateways Site-to-Site con BGP y alta disponibilidad Active-Active, segmentación con VNets, NSGs y Private Endpoints.',
    architecture: [
      'Azure Virtual Network con arquitectura segmentada y Route Tables personalizadas',
      'VPN Gateway S2S de alta disponibilidad y BGP para aprendizaje dinámico de rutas',
      'Aislamiento de servicios mediante Private Endpoints y Private DNS Zones',
      'Políticas de tráfico y seguridad con Network Security Groups (NSGs)'
    ],
    technologies: ['Azure VNet', 'VPN Gateway', 'BGP', 'Private Link', 'NSG', 'Route Tables'],
    outcome: 'Infraestructura de red resiliente que asegura el tráfico corporativo entre entornos híbridos cumpliendo estándares de gobernanza.',
    accent: 'violet'
  },
  {
    id: 'enterprise-cloud',
    title: 'Sistema empresarial en Google Cloud',
    category: 'cloud',
    categoryLabel: 'Cloud application',
    summary: 'Evolución de procesos internos dispersos hacia una aplicación empresarial con APIs, control de acceso y datos centralizados.',
    challenge: 'Marketing, logística, ventas y administración trabajaban con procesos y fuentes desconectadas que dificultaban la operación.',
    solution: 'Lideré un equipo de tres desarrolladores y participé en el backend, autenticación, permisos, base de datos y despliegue cloud del nuevo sistema.',
    architecture: [
      'Frontend React/Next.js desplegado en Vercel',
      'Backend Python ejecutándose en Cloud Run',
      'Cloud SQL con MySQL e IAM para control de accesos',
      'Data Stream hacia BigQuery para analítica posterior'
    ],
    technologies: ['GCP', 'Cloud Run', 'Cloud SQL', 'Python', 'React', 'BigQuery'],
    outcome: 'Una base técnica unificada para operar procesos internos y habilitar análisis posteriores en Power BI o Looker Studio.',
    accent: 'sky'
  },
  {
    id: 'mining-scraping',
    title: 'Automatización y web scraping sector minero',
    category: 'backend',
    categoryLabel: 'Automation & Data',
    summary: 'Solución automatizada en Python para extracción, estructuración y validación de información pública sectorial.',
    challenge: 'Recopilar y procesar periódicamente datos dispersos en diversas fuentes web públicas con formatos no estandarizados.',
    solution: 'Desarrollé un pipeline automatizado de web scraping en Python con validación de esquemas, manejo de fallos y transformación a estructuras analíticas.',
    architecture: [
      'Módulos modulares de extracción con rotación de cabeceras y control de tasas',
      'Normalización y limpieza con Pandas y DuckDB',
      'Validación de datos y persistencia estructurada',
      'Ejecución programada con alertas de seguimiento'
    ],
    technologies: ['Python', 'Web Scraping', 'Pandas', 'DuckDB', 'Automatización'],
    outcome: 'Ahorro sustancial en recolección manual de información y disponibilidad inmediata de datos confiables para toma de decisiones.',
    accent: 'blue'
  },
  {
    id: 'sunat-api',
    title: 'API de consulta RUC SUNAT',
    category: 'backend',
    categoryLabel: 'Backend API',
    summary: 'Servicio en Python que consulta información empresarial pública y la entrega mediante una interfaz REST consistente.',
    challenge: 'Integrar datos del portal de SUNAT en otros sistemas sin obligar a cada aplicación a interpretar la fuente original.',
    solution: 'Diseñé una API con FastAPI y web scraping, incorporando normalización de respuestas, validación y manejo explícito de errores.',
    architecture: [
      'Endpoint de consulta por RUC con validación de entrada',
      'Extracción y parseo desde la fuente oficial pública',
      'Normalización a un contrato JSON documentado con OpenAPI',
      'Estrategias de caché y respuestas de error predecibles'
    ],
    technologies: ['Python', 'FastAPI', 'Web Scraping', 'REST APIs', 'JSON'],
    outcome: 'Una capa de integración ágil para reutilizar información tributaria en aplicaciones de facturación y automatizaciones.',
    accent: 'indigo'
  },
  {
    id: 'payments-pipeline',
    title: 'Pipeline serverless de notificaciones de pago',
    category: 'backend',
    categoryLabel: 'Serverless & AI',
    summary: 'Flujo automatizado que transforma notificaciones de pago recibidas por correo en registros financieros estructurados.',
    challenge: 'Extraer información consistente desde correos con formatos variables y dejarla disponible para una aplicación financiera.',
    solution: 'Construí un pipeline que captura mensajes de Gmail, procesa el contenido con reglas de NLP y utiliza modelos de lenguaje como mecanismo de respaldo.',
    architecture: [
      'Captura de correos asociados a pagos mediante API',
      'Procesamiento y extracción de entidades transaccionales',
      'Fallback inteligente con IA generativa para correos ambiguos',
      'Persistencia en PostgreSQL y consumo vía API segura'
    ],
    technologies: ['Python', 'Cloud Functions', 'PostgreSQL', 'NLP', 'REST API'],
    outcome: 'Un flujo continuo que elimina el registro manual y alimenta una aplicación personal de finanzas.',
    accent: 'purple'
  }
]

export const projectFilters = [
  { id: 'all', label: 'Todos' },
  { id: 'cloud', label: 'Cloud & Azure' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'data', label: 'Automatización & Datos' }
]
