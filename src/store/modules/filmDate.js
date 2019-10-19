import axios from 'axios'

export default {
  namespaced: true,
  state: {
    filmsDateList: [], // 所有电影时间的集合
    shopList: [] // 套餐集合
  },
  getters: {
    // cinemasCount(state) {
    //   return state.cinemasList.length
    // }
  },
  mutations: {
    setfilmsDateList (state, payload) {
      state.filmsDateList = payload
    }
  },
  actions: {
    getfilmsDateList ({ commit }, payload) {
      axios
        .get('/maoyan/ajax/cinemaDetail?', {
          params: {
            cinemaId: 15863
            // cinemaId:15863//影院ID
            // movieId:1230121 //电影ID
          }
        })
        .then(response => {
          let result = response.data
          commit('setfilmsDateList', result.dealList.dealList)
          console.log(result.dealList.dealList)
          // console.log(result)
          // console.log(this.$route)
        })
    }
  }
}
