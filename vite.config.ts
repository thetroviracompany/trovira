import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // default base for non-GitHub deployments
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1500
  }
});
