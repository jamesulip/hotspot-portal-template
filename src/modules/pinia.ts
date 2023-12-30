
// Setup Pinia
// https://pinia.vuejs.org/
import { createPinia } from 'pinia'
export const install: any = ({ isClient, initialState, app }) => {
  const pinia = createPinia()
  app.use(pinia)
}