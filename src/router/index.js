import { createRouter, createWebHashHistory } from 'vue-router'
import pageRouter from './page'
import viewsRouter from './views'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...pageRouter, ...viewsRouter]
})

export default router