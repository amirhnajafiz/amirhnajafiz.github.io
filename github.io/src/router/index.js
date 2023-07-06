import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "../views/HomeView/index.vue"
import BlogView from "../views/BlogView/index.vue"
import ContactView from "../views/ContactView/index.vue"

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
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
