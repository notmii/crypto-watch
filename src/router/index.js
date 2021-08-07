 /*jshint esversion: 6 */
 
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: { name: 'CryptoDashboard' },
  },
  {
    path: '/#/',
    name: 'CryptoDashboard',
    component: () => import( /* webpackChunkName: "Dashboard" */ '../components/CryptoDashboard.vue'),
  },
  {
    path: '/#/forex',
    name: 'ForexDashboard',
    component: () => import( /* webpackChunkName: "FxDashboard" */ '../components/ForexDashboard.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: '/crypto-watch/',
  routes
})

export default router
