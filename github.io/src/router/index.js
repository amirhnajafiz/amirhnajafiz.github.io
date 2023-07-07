import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "../views/HomeView/index.vue"
import BlogView from "../views/BlogView/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    }
  ]
})

export default router
