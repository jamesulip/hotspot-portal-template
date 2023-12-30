import App from './App.vue'
import { ViteSSG } from 'vite-ssg'

import { routes } from 'vue-router/auto/routes'

console.log({routes});

export const createApp = ViteSSG(
    App,
    { routes, base: import.meta.env.BASE_URL },
    (ctx) => {
      // install all modules under `modules/`
      Object.values(import.meta.glob<{ install: any }>('./modules/*.ts', { eager: true }))
        .forEach(i => i.install?.(ctx))
      // ctx.app.use(Previewer)
    },
  )