import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/news',
    name: 'news',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/pages/NewsPage.vue')
  },
  {
    path: '/information',
    name: 'information',
    component: () => import(/* webpackChunkName: "about" */ '../components/pages/InformationPage.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../components/pages/ContactPage.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import(/* webpackChunkName: "about" */ '../components/pages/PrivacypolicyPage.vue')
  },
  {
    path: '/news1',
    name: 'news1',
    component: () => import(/* webpackChunkName: "about" */ '../components/modules/news-list/NewsList1.vue')
  },
  {
    path: '/news2',
    name: 'news2',
    component: () => import(/* webpackChunkName: "about" */ '../components/modules/news-list/NewsList2.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
