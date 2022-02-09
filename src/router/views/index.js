
import menuList from '@/utils/leftMenu'
const viewsRouter = [
  {
    path: '/',
    name: '主页',
    component: () => import('@/views/Home.vue'),
    redirect: { name: 'index' },
    children: []
  }
]

function handlerMenuData(menuList) {
  const list = []
  menuList.forEach(item => {
    if(item.children && item.children.length) {
      list.push(...handlerMenuData(item.children))
    }else {
      list.push(item)
    }
  })
  return list
}

handlerMenuData(menuList).forEach(item => {
  if(item.path && item.component) {
    viewsRouter[0].children.push({
      path: item.path.replace('/', ''),
      name: item.path.replace('/', ''),
      meta: {
        title: item.label
      },
      component: item.component
    })
  }
})

export default viewsRouter