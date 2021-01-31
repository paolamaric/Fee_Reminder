import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPage from '../views/FirstPage.vue'
import Home from '../views/Home.vue'
import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FirstPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/FirstPage.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta: {
      requiresAuth: true
      }
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
    component: () => import(/* webpackChunkName: "Registration" */ '../views/Registration.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  
  {
    path: '/InvoiceHost',
    name: 'InvoiceHost',
    component: () => import(/* webpackChunkName: "ListOfUpcomingBills" */ '../views/InvoiceHost.vue'),
    meta: {
      requiresAuth: true
      }
  },
  {
    path: '/list',
    name: 'List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ListOfUpcomingBills.vue'),
    meta: {
      requiresAuth: true
      }
  },
  {
    path: '/Categories',
    name: 'Categories',
    component: () => import(/* webpackChunkName: "Categories" */ '../views/Categories.vue'),
   
  },
  {
    path: '/ClientsHost',
    name: 'ClientsHost',
    component: () => import(/* webpackChunkName: "ClientsHost" */ '../views/ClientsHost.vue'),
   
  },
  {
    path: '/HistoryPaid',
    name: 'HistoryPaid',
    component: () => import(/* webpackChunkName: "HistoryPaid" */ '../views/HistoryPaid.vue'),
   
  },
  {
    path: '/Reports',
    name: 'Reports',
    component: () => import(/* webpackChunkName: "Reports" */ '../views/Reports.vue'),
   
  },
  {
    path: '/ReportHost',
    name: 'ReportHost',
    component: () => import(/* webpackChunkName: "ReportHost" */ '../views/ReportHost.vue'),
  },
  {
    path: '/MembershipFees',
    name: 'MembershipFees',
    component: () => import(/* webpackChunkName: "MembershipFees" */ '../views/MembershipFees.vue'),
  },
  {
    path: '/Car_Moto',
    name: 'Car_Moto',
    component: () => import(/* webpackChunkName: "Car_Moto" */ '../views/Car_Moto.vue'),
  },
  {
    path: '/Dining',
    name: 'Dining',
    component: () => import(/* webpackChunkName: "Dining" */ '../views/Dining.vue'),
  },
  {
    path: '/Utilities',
    name: 'Utilities',
    component: () => import(/* webpackChunkName: "Utilities" */ '../views/Utilities.vue'),
  },
  {
    path: '/Rent',
    name: 'Rent',
    component: () => import(/* webpackChunkName: "Rent" */ '../views/Rent.vue'),
  },
  {
    path: '/Other',
    name: 'Other',
    component: () => import(/* webpackChunkName: "Other" */ '../views/Other.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  if (requiresAuth && !auth.currentUser) {
    next('/login');
    }
  else {
    next();
    }
  })

export default router
