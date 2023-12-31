import vue from '@vitejs/plugin-vue'
import  { transformAssetUrls } from 'vite-plugin-vuetify'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'
export default defineConfig({
  ssr: {
    noExternal: ['vuetify']
  },
  plugins: [
    VueRouter({
      dts: 'src/router.d.ts',
      routesFolder: './src/pages',
    }),
    vue({
      template: { transformAssetUrls }
    }),
   
    Components({
      dts: 'src/components.d.ts',
      directoryAsNamespace: true,
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
})
