import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/playlists',
    name: 'playlists',
    component: () => import(/* webpackChunkName: "playlists" */ '../views/Playlists.vue'),
  },
  {
    path: '/embedded',
    name: 'embedded',
    component: () => import(/* webpackChunkName: "embedded" */ '../views/Embedded.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'page-not-found',
    component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
