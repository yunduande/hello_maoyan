import axios from 'axios'

export default {
  namespaced: true,
  state: {
    info: [] // 所有影院的集合
  },
  getters: {
    infoCount (state) {
      return state.info.length
    }
  },
  mutations: {
    setInfo (state, payload) {
      state.info = payload
    }
  },
  actions: {
    getInfo ({ commit }, payload) {
      console.log('你进来没有,介绍一下自己')
      axios
        .get('/maoyan/ajax/detailmovie?', {
          params: {
            movieId: this.$route.id
          },
          headers: {
            'X-Client-Info':
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"156999712018279380812110"}',
            'X-Host': 'mall.film-ticket.city.list'
          }
        })
        .then(response => {
          let result = response.data
          console.log(result)
          console.log('这部片子讲的啥')
          commit('setInfo', result.detailMovie)
        })
    }
  }
}
