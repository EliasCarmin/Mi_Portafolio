# Portfolio de Elias - Analista de Datos

Un portfolio web moderno y profesional desarrollado con React, Vite y TailwindCSS, diseñado específicamente para un analista de datos y especialista en Business Intelligence.

## 🚀 Características

- **Diseño Moderno**: Interfaz elegante con temática de análisis de datos
- **Responsive**: Optimizado para todos los dispositivos
- **Animaciones**: Efectos visuales suaves y profesionales
- **SEO Optimizado**: Estructura semántica y meta tags
- **Performance**: Carga rápida y optimizada

## 🎨 Secciones del Portfolio

1. **Hero Section**: Introducción impactante con animaciones
2. **Sobre Mí**: Información profesional y experiencia
3. **Habilidades**: Tecnologías y herramientas con iconos
4. **Proyectos**: Portafolio de trabajos realizados
5. **Servicios**: Oferta de servicios profesionales
6. **Contacto**: Formulario de contacto y información
7. **Footer**: Enlaces y información adicional

## 🛠️ Tecnologías Utilizadas

- **React 18**: Framework de JavaScript
- **Vite**: Build tool y servidor de desarrollo
- **TailwindCSS**: Framework de CSS utility-first
- **Lucide React**: Iconos modernos
- **PostCSS**: Procesamiento de CSS

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/port_folio_vr_2.0.git
cd port_folio_vr_2.0
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 🎨 Paleta de Colores

- **Verde Principal**: `#00ff88` (data-green)
- **Verde Neón**: `#39ff14` (neon-green)
- **Fondo Oscuro**: `#0a0a0a` (data-dark)
- **Gris Oscuro**: `#1a1a1a` (data-gray)
- **Gris Claro**: `#2a2a2a` (data-light)

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.jsx      # Navegación principal
│   ├── Hero.jsx        # Sección de introducción
│   ├── About.jsx       # Información profesional
│   ├── Skills.jsx      # Habilidades y tecnologías
│   ├── Projects.jsx    # Portafolio de proyectos
│   ├── Services.jsx    # Servicios ofrecidos
│   ├── Contact.jsx     # Formulario de contacto
│   └── Footer.jsx      # Pie de página
├── assets/             # Recursos estáticos
│   └── EliasPNG.png    # Imagen de perfil
├── App.jsx             # Componente principal
├── main.jsx            # Punto de entrada
└── index.css           # Estilos globales
```

## 🔧 Personalización

### Cambiar Información Personal

1. **Datos Personales**: Edita los componentes `Hero.jsx` y `About.jsx`
2. **Proyectos**: Modifica el array de proyectos en `Projects.jsx`
3. **Servicios**: Actualiza los servicios en `Services.jsx`
4. **Contacto**: Cambia la información de contacto en `Contact.jsx`

### Cambiar Imagen de Perfil

Reemplaza `src/assets/EliasPNG.png` con tu imagen de perfil.

### Modificar Colores

Edita las variables de color en `tailwind.config.js`:

```javascript
colors: {
  'data-green': '#00ff88',
  'neon-green': '#39ff14',
  // ... más colores
}
```

## 📱 Responsive Design

El portfolio está optimizado para:
- **Desktop**: 1024px y superior
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura el comando de build: `npm run build`
3. Configura el directorio de salida: `dist`

### Netlify

1. Sube tu código a GitHub
2. Conecta el repositorio a Netlify
3. Configura el comando de build: `npm run build`
4. Configura el directorio de publicación: `dist`

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request.

## 📞 Contacto

- **Email**: elias@datosanalytics.com
- **LinkedIn**: [Elias Datos](https://linkedin.com/in/elias-datos)
- **GitHub**: [elias-datos](https://github.com/elias-datos)

---

Hecho con ❤️ por Elias usando React y TailwindCSS 