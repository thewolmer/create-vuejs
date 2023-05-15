import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NProgress from 'nprogress';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/docs',
      name: 'About',
      component: () => import('../views/DocsView.vue')
    },
    { path: '/:pathMatch(.*)*',
     name: '404 Not Found',
    component: () => import('../views/NotFound.vue') },
  ],

	scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { 
        top: 0,
        behavior: 'smooth',
       }
      
    }
  }

})

router.beforeResolve((to, from, next) => {
   document.title = `${ to.name } - Wol App`
  if (to.name) {
      NProgress.start()
  }
  next()
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from, faliure ) => {
  NProgress.done()
})


export default router
