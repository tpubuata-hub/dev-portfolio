import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path matches the GitHub Pages project URL: tpubuata-hub.github.io/dev-portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/dev-portfolio/',
});
