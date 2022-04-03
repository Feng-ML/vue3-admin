import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: Layout,
    children:[
      
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
