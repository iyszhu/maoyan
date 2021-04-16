import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/movies',
    children: [
      {
        path: 'movies',
        name: 'movies',
        component: () => import('@/views/home/movies/Movies'),
        redirect: '/home/movies/hot',
        children: [
          {
            path: 'hot',
            name: 'hot',
            component: () => import('@/views/home/movies/Hot')
          },
          {
            path: 'comingSoon',
            name: 'comingSoon',
            component: () => import('@/views/home/movies/ComingSoon')
          }
        ]
      },
      {
        path: 'theaters',
        name: 'theaters',
        component: () => import('@/views/home/theaters/Theaters')
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/views/home/profile/Profile')
      }
    ]
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('../views/city/CityPicker')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
