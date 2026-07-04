import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: './',
  publicDir: false,
  server: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
  },
});
