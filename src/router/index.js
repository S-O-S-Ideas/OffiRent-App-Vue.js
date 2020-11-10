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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
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
  },



  {
    path: '/offices/:id',
    name: 'detail-office-user',
    component: () => import('../components/detail-office-user')
  },
  {
    path: '/offices/:providerId/:officeId',  //encontrar detalle de la oficina utilizando id de proveedor y de oficina
    name: 'detail-office-provider',
    component: () => import('../components/detail-office-provider')
  },
  {
    path: '/offices/:officeId/reservations/:reservationId',
    name: 'detail-reservation-user',
    component: () => import('../components/detail-reservation-user')
  },

  {
    path: '/offices/:providerId/:officeId/reservations/:reservationId', //encontrar detalle de la reservacion utilizando id de proveedor, de oficina y de reservacion
    name: 'detail-reservation-provider',
    component: () => import('../components/detail-reservation-provider')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
