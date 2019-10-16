import axios from 'axios'

export default {
  namespaced: true,
  state: {
    cinemasList: [] // 所有影院的集合
  },
  getters: {
    cinemasCount(state) {
      return state.cinemasList.length
    }
  },
  mutations: {
    setCinemasList(state, payload) {
      state.cinemasList = payload
    }
  },
  actions: {
    getCinemasList({ commit }, payload) {
      console.log('你进来没有')
      axios
        .post('/maoyan/ajax/movie?forceUpdate=1571206630428', {
          headers: {
            'X-Client-Info':
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"156999712018279380812110"}',
            'X-Host': 'mall.film-ticket.city.list'
          }
        })
        .then(response => {
          let result = response.data
          console.log(result)
          console.log('你在哪家电影院')
          commit('setCinemasList', result.cinemas)
        })
    }
  }
}
