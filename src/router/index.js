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
    name: 'detail-workplace',
    component: () => import('../components/detail-workplace')
  },
  {

    path: '/workplaces/edit',
    name: "edit-workplaces",
    component: () => import('../components/edit-workplaces')
  },
  {
    path: '/reservations',
    name: 'user-reservations',
    component: () => import('../views/user-reservations')
  },
  {
    path:'/workspace',
    name: 'workspace',
    component: () => import('../components/offices')
  },
  {
    path:'/workspace/new',
    name: 'add-office',
    component: () => import('../components/add-office')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
