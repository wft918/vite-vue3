import { createRouter, createWebHashHistory } from 'vue-router'
import pageRouter from './page'
import viewsRouter from './views'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...pageRouter, ...viewsRouter]
})


router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if(token) {
    next()
  }else {
    if(to.path != '/login') {
      next({ path: '/login' })
    }else {
      next()
    }
  }
})

export default router