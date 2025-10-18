import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [],
  output: 'static',
  adapter: node({
    mode: 'standalone'
  }),
  vite: {
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }
  }
});