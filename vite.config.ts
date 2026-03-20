import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // ✅ IMPORTANT: must match your GitHub repo name
  base: '/trovira/',

  build: {
    outDir: 'dist',

    // ✅ avoid chunk size warnings
    chunkSizeWarningLimit: 1500,

    // ✅ better performance (code splitting)
    rollupOptions: {
      output: {
        manualChunks: {
          reactVendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion'],
          ui: ['lucide-react', 'react-icons'],
          particles: ['@tsparticles/react', '@tsparticles/slim'],
          swiper: ['swiper']
        }
      }
    }
  },

  // ✅ dev server config (optional but useful)
  server: {
    port: 5173,
    open: true
  },

  // ✅ preview config
  preview: {
    port: 4173,
    open: true
  }
})