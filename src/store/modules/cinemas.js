import axios from 'axios'

export default {
  namespaced: true,
  state: {
    cinemasList: [] // 所有影院的集合
  },
  getters: {
    cinemasCount (state) {
      return state.cinemasList.length
    }
  },
  mutations: {
    setCinemasList (state, payload) {
      state.cinemasList = payload
    }
  },
  actions: {
    getCinemasList ({ commit }, payload) {
      console.log('你进来没有')
      axios
        .post(`/maoyan/ajax/movie?forceUpdate=${new Date().getTime()}`, {
          movieId: 503342,
          day: '2019-10-18',
          offset: 0,
          limit: 20,
          districtId: -1,
          lineId: -1,
          hallType: -1,
          brandId: -1,
          serviceId: -1,
          areaId: -1,
          stationId: -1,
          item: '',
          updateShowDay: true,
          reqId: 1571408224318,
          cityId: 10
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
