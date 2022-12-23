import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "../views/HomeView/index.vue"
import HonorsView from "../views/HonorsView/index.vue"
import ProjectsView from "../views/ProjectsView/index.vue"
import OrganizationsView from "../views/OrganizationsView/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/honors',
      name: 'honors',
      component: HonorsView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/organizations',
      name: 'organizations',
      component: OrganizationsView
    }
  ]
})

export default router
