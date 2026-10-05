import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiUrl = (process.env.VITE_CHAT_API_URL || env.VITE_CHAT_API_URL || '').trim()

  if ((command === 'build' || mode === 'production') && !apiUrl) {
    throw new Error(
      'Error de compilación: VITE_CHAT_API_URL no está configurada para el build de producción. ' +
      'Configura la variable de entorno en tu proveedor de despliegue, GitHub Actions o en el archivo .env antes de compilar.'
    )
  }

  return {
    plugins: [react()],
    base: '/Mi_Portafolio/',
    server: {
      port: 3000,
      open: true
    }
  }
})