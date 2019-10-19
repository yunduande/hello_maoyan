import axios from 'axios'

export default {
  namespaced: true,
  state: {
    filmList: [] // 所有城市的集合
  },
  getters: {
    filmCount (state) {
      return state.filmList.length
    }
  },
  mutations: {
    setFilmList (state, payload) {
      state.filmList = payload
    }
  },
  actions: {
    getMovieList ({ commit }, payload) {
      // console.log('你进来没有，快开始了')
      axios
        .get('/maoyan/ajax/comingList?ci=10&token=&limit=10', {
          headers: {
            'X-Client-Info':
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"156999712018279380812110"}',
            'X-Host': 'mall.film-ticket.city.list'
          }
        })
        .then(response => {
          let result = response.data
          // console.log(result)
          // console.log('你啥时候才能上映啊？')
          commit('setFilmList', result.coming)
          // if (result.status === 0) {
          //   console.log(result.movieList)
          //   console.log('你在哪ee')
          // }
        })
    }
  }
}
