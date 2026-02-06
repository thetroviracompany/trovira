import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/trovira/',   // GitHub repo name
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1500
  }
});
