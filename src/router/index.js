<<<<<<< HEAD
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store';

Vue.use(VueRouter);
=======
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
>>>>>>> f72722b5068206c3f178987aa665124d47dae30b

const routes = [
  {
    path: '/',
    name: 'Home',
<<<<<<< HEAD
    component: Home,
    meta: {
      needsUser: true
    }
=======
    component: Home
>>>>>>> f72722b5068206c3f178987aa665124d47dae30b
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
<<<<<<< HEAD
];
=======
]
>>>>>>> f72722b5068206c3f178987aa665124d47dae30b

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
<<<<<<< HEAD
  routes,
});

router.beforeEach ((to, from, next) => {
    console.log("stara ruta", from.name, "Nova ruta", to.name, "Korisnik", store.name);

    const noUser = (store.currentUser === null);

    if (noUser && to.meta.needUser) {
        next('login');
    }
    else
    next();
  });

export default router;
=======
  routes
})

export default router
>>>>>>> f72722b5068206c3f178987aa665124d47dae30b
