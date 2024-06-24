import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  plugins: [ 
    vue({
    template: { transformAssetUrls }
  }),
  quasar({
    sassVariables: 'src/quasar-variables.sass'
  }),
  VueDevTools,
],
  optimizeDeps: {
    include: ['parallax-js'],
  },
    build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@' : fileURLToPath(new URL('./src', import.meta.url))
    },
  },
});
