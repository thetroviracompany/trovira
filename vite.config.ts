import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/trovira/', // 👈 must match your GitHub repo name
  build: {
    outDir: 'dist', // output folder
    chunkSizeWarningLimit: 1500 // increase limit to silence 500KB warning
  }
});
