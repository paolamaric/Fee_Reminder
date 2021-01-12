import Vue from 'vue'
import VueRouter from 'vue-router'
import Home1 from '../views/HomeClient.vue'
import Home2 from '../views/HomeHost.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/HomeClient',
    name: 'HomeClient',
    component: Home1
  },
  {
    path: '/HomeHost',
    name: 'HomeHost',
    component: Home2
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Registration" */ '../views/Registration.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
