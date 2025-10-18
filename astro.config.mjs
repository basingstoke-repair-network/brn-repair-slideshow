import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [],
  output: 'static',
  vite: {
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }
  }
});