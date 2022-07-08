import { createRouter, createWebHashHistory } from 'vue-router'
import pageRouter from './page'
import viewsRouter from './views'
import menuList from '@/utils/leftMenu'
import { defineAsyncComponent } from 'vue'
const modules = import.meta.glob('../views/pages/**/*.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...pageRouter, ...viewsRouter]
})

function filterInMenu(tree) {
  const list = []
  tree.forEach(item => {
    if(item.children && item.children.length) {
      list.push(...filterInMenu(item.children))
    } else {
      list.push(item)
    }
  })
  return list
}

export const flatMenuRoutes = filterInMenu(menuList)

flatMenuRoutes.forEach(item => {
  if(item.path) {
    const o = {}
    o.path = item.path.replace('/', '')
    o.name = o.path.split('/')[o.path.split('/').length - 2]
    o.meta = {title: item.label}
    // o.component = defineAsyncComponent(() => import(/* @vite-ignore */`@/views/pages${item.path}.vue`))
    o.component = modules[`../views/pages${item.path}.vue`]
    router.addRoute('Main', o)
  }
})

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('_v3_token')
//   if(token) {
//     next()
//   }else {
//     if(to.path != '/login') {
//       next({ path: '/login' })
//     }else {
//       next()
//     }
//   }
// })

export default router