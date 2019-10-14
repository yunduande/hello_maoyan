import Vue from 'vue'
import Vuex from 'vuex'

import CityModule from './modules/city'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    city: CityModule
  },
  state: {},
  mutations: {},
  actions: {}
})
