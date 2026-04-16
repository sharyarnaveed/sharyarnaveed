import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import ProjectsView from '../views/projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    }
  ]
})

export default router
