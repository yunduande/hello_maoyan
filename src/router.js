import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index.vue'
import Center from './views/home/center.vue'
import Cinemas from './views/home/cinemas.vue'
import Films from './views/home/films.vue'

import City from './views/city/index.vue'
import Login from './views/login/index.vue'
import Shopping from './views/shopping/index.vue'
import FilmInfo from './views/film/index.vue'
import Search from './views/search/index.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'films',
          component: Films
        },
        {
          path: 'cinemas',
          component: Cinemas
        },
        {
          path: 'center',
          component: Center
        },
        {
          path: '',
          redirect: '/films'
        }
      ]
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/film/:id',
      component: FilmInfo
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shopping',
      component: Shopping
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
export default router
