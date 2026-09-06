import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import ProjectsView from '../views/projects.vue'
import { applyPageMeta } from '../composables/usePageMeta'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Sharyar Naveed, Web and Creative Developer',
        description:
          'Sharyar Naveed is a web and creative developer based in Pakistan. Building full stack web and mobile products with clean code, thoughtful design, and AI powered features.',
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: {
        title: 'Projects Playground, Sharyar Naveed',
        description:
          'Open source experiments and repositories by Sharyar Naveed, fetched live from GitHub.',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return savedPosition ?? { top: 0 }
  },
})

router.afterEach((to) => {
  applyPageMeta({
    title: to.meta.title,
    description: to.meta.description,
    path: to.path,
  })
})

export default router
