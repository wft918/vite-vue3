
const viewsRouter = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main.vue'),
    redirect: { name: 'index' },
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          title: '主页'
        },
        component: () => import('@/views/pages/index/index.vue')
      }
    ]
  }
]

export default viewsRouter