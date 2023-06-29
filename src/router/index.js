 /*jshint esversion: 6 */
 
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: { name: 'CryptoDashboard' },
  },
  {
    path: '/crypto',
    name: 'CryptoDashboard',
    component: () => import( /* webpackChunkName: "Dashboard" */ '../components/CryptoDashboard.vue'),
  },
  {
    path: '/forex',
    name: 'ForexDashboard',
    component: () => import( /* webpackChunkName: "FxDashboard" */ '../components/ForexDashboard.vue'),
  },
  {
    path: '/pse',
    name: 'PseStockDashboard',
    component: () => import( /* webpackChunkName: "PseStockDashboard" */ '../components/PseStockDashboard.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
