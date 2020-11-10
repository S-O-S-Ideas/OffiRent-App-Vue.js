import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Offices',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Offices')
  },
  {
    path: '/tutorials',
    name: 'tutorials',
    component: () => import('../components/tutorials')
  },
  {
    path: '/tutorials/new',
    name: 'add-tutorial',
    component: () => import('../components/add-tutorial')
  },
  {
    path: '/tutorials/:id',
    name: 'edit-tutorial',
    component: () => import('../components/edit-tutorial')
  },
  {
    path: '/reservations',
    name: 'user-reservations',
    component: () => import('../views/user-reservations')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
