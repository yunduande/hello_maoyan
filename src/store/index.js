import Vue from 'vue'
import Vuex from 'vuex'

import CityModule from './modules/city'
import FilmModule from './modules/film'
import CinemasModule from './modules/cinemas'
<<<<<<< HEAD
import FilmDate from './modules/filmDate'
=======
import MovieModule from './modules/movie'
>>>>>>> 95ba065795e7fd8a0a28de1a7fcd2b3521a14bd2

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    city: CityModule,
    film: FilmModule,
    cinemas: CinemasModule,
<<<<<<< HEAD
    date:FilmDate
=======
    movie: MovieModule
>>>>>>> 95ba065795e7fd8a0a28de1a7fcd2b3521a14bd2
  },
  state: { title: 'zhangsan' },
  mutations: {},
  actions: {}
})
