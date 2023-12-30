
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import vue from '@vitejs/plugin-vue'
import  { transformAssetUrls } from 'vite-plugin-vuetify'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'
const __unconfig_default =  defineConfig({
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

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;