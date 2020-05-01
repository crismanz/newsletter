import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/subscription',
    name: 'Subscription',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Subscription.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/Privacy.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
