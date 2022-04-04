import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'
import authRoutes from './authRoutes'
import menu from './menu'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   meta:{ title: '首页' },
  //   component: Layout,
  //   children:[
  //     ...systemRoutes
  //   ]
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


// 动态路由
function dynamicRouter(routers) {
  const list = []
  routers.forEach((itemRouter,index) => {
    const authRoute = authRoutes.find(i=>i.path==itemRouter.path)
    list.push({
      ...itemRouter,
      component: authRoute?.component || Layout
    })
    // 是否存在子集
    if (itemRouter.children && itemRouter.children.length) {
      list[index].children = dynamicRouter(itemRouter.children);
    }
  })

  return list
}

// 挂载完路由需要重进一次
let registerRouteFresh = true
router.beforeEach((to, from, next) => {
  if (registerRouteFresh) {
    dynamicRouter(menu).forEach((itemRouter) => {
      router.addRoute(itemRouter)
    })
    next({ ...to, replace: true })
    registerRouteFresh = false
  } else {
    next()
  }
})

export default router
