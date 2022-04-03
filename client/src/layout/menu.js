export default [
  {
    id: 'home',
    name: 'home',
    path: '/',
    meta:{
      title: '首页',
      icon: 'home-filled',
    },
    children: []
  },
  {
    id: 'system-manage',
    name: 'system-manage',
    path: '/system',
    meta:{
      title: '系统管理',
      icon: 'setting',
    },
    children: [
      {
        id: 'role',
        name: 'role',
        path: '/system/role',
        meta:{
          title: '角色管理',
          icon: 'user-filled',
        },
        children: []
      },
      {
        id: 'account',
        name: 'account',
        path: '/system/account',
        meta:{
          title: '账号管理',
          icon: 'document-copy',
        },
        children: [{
          id: 'login',
          name: 'login',
          path: '/login',
          meta:{
            title: '登录',
            icon: 'login',
          },
          children: []
        }]
      }
    ]
  }
]