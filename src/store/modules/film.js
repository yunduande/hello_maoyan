import axios from 'axios'

export default {
  namespaced: true,
  state: {
    filmList: [] // 所有城市的集合
  },
  getters: {
    filmCount(state) {
      return state.filmList.length
    }
  },
  mutations: {
    setFilmList(state, payload) {
      state.filmList = payload
    }
  },
  actions: {
    getFilmList({ commit }, payload) {
      // console.log('你进来没有')
      axios
        .get('/maoyan/ajax/movieOnInfoList?', {
          params: {
            token: '',
            id: 503342
          },
          headers: {
            'X-Client-Info':
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"156999712018279380812110"}',
            'X-Host': 'mall.film-ticket.city.list'
          }
        })
        .then(response => {
          let result = response.data
          // console.log(result)
          // console.log('你在哪')
          commit('setFilmList', result.movieList)
          // if (result.status === 0) {
          //   console.log(result.movieList)
          //   console.log('你在哪ee')
          // }
        })
    }
  }
}
