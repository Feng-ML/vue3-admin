export default [
  {
    path: '',
    name: '首页',
    // component: () => import('@/layout'),
  },
  {
    path: '/system/role',
    name: '角色管理',
    component: () => import('@/views/system/role/index.vue')
  },
  {
    path: '/system/account',
    name: '账号管理',
    component: () => import('@/views/system/account/index.vue')
  },
]