 /*jshint esversion: 6 */
 
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'CryptoDashboard',
    component: () => import( /* webpackChunkName: "Dashboard" */ '../components/CryptoDashboard.vue')
  },
  {
    path: '/fx',
    name: 'FxDashboard',
    component: () => import( /* webpackChunkName: "FxDashboard" */ '../components/ForexDashboard.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
