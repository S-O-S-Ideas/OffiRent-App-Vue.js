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
    path: '/profile',
    name: 'detail-account',
    component: () => import('../components/detail-account')

  },
  {
    path: '/profile/edit',
    name:'edit-account',
    component: () => import('../components/edit-account')
  },
  {
    path: '/workplaces',
    name: 'workplaces',
    component: () => import('../views/Offices')
  },

  {

    path: '/workplaces/edit',
    name: "edit-workplaces",
    component: () => import('../components/edit-workplaces')

  },
  // {
  //   path: '/reservations',
  //   name: 'user-reservations',
  //   component: () => import('../views/user-reservations')
  // },
  {
    path:'/myworkplaces/',
    name: 'workspace',
    component: () => import('../components/offices')
  },
  {
    path: '/workspace/new',
    name: 'add-office',
    component: () => import('../components/add-office')

  },
  {
    path: '/workplaces/:officeId',  //encontrar detalle de la oficina utilizando id de proveedor y de oficina
    name: 'detail-office',
    component: () => import('../components/detail-office')
  },
  {
    path: '/reservations',
    name: 'user-reservations',
    component: () => import('../views/user-reservations')
  },
  {
    path: '/workplaces/:id/reservations',
    name: 'office-reservations',
    component: () => import('../views/office-reservations')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
