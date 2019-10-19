import Vue from 'vue'
import Vuex from 'vuex'

import CityModule from './modules/city'
import FilmModule from './modules/film'
import CinemasModule from './modules/cinemas'
import MovieModule from './modules/movie'
import InforModule from './modules/introduce'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    city: CityModule,
    film: FilmModule,
    cinemas: CinemasModule,
    movie: MovieModule,
    introduce: InforModule
  },
  state: { title: 'zhangsan' },
  mutations: {},
  actions: {}
})
