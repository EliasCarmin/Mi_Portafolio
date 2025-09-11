import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/port_folio_vr_2.0/',
  server: {
    port: 3000,
    open: true
  }
}) 