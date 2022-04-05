export default [
  {
    label: '主页',
    id: '1',
    children: [
      {
        label: '首页',
        id: '1-1',
        children: [],
        path: '/index',
        component: () => import('@/views/pages/index/index.vue')
      }
    ]
  },
  {
    label: '其他',
    id: '2',
    children: [
      {
        label: '测试',
        id: '2-1',
        children: [],
        path: '/test',
        component: () => import('@/views/pages/test/test.vue')
      }
    ]
  },
  {
    label: '图表',
    id: '3',
    children: [
      {
        label: 'echarts-5',
        id: '3-1',
        children: [],
        path: '/chart',
        component: () => import('@/views/pages/chart/chart.vue')
      }
    ]
  },
  {
    label: '用户',
    id: '4',
    children: [
      {
        label: '用户列表',
        id: '4-1',
        children: [],
        path: '/user',
        component: () => import('@/views/pages/user/user.vue')
      }
    ]
  },
  {
    label: '拖拽',
    id: '5',
    children: [
      {
        label: '拖拽',
        id: '5-1',
        children: [],
        path: '/drag',
        component: () => import('@/views/pages/Drag/Drag.vue')
      }
    ]
  },
  {
    label: 'VMODEL',
    id: '6',
    children: [
      {
        label: 'VMODEL',
        id: '6-1',
        children: [],
        path: '/vModel',
        component: () => import('@/views/pages/vModel/vModel.vue')
      }
    ]
  },
  {
    label: 'TABLE',
    id: '7',
    children: [
      {
        label: 'TABLE',
        id: '7-1',
        children: [],
        path: '/table',
        component: () => import('@/views/pages/table/tableList.vue')
      }
    ]
  },
  {
    label: 'Teleport-video',
    id: '8',
    children: [
      {
        label: 'Teleport-video',
        id: '8-1',
        children: [],
        path: '/TeleportVideo',
        component: () => import('@/views/pages/TeleportVideo/TeleportVideo.vue')
      }
    ]
  }
]