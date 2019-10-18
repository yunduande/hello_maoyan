import axios from 'axios'

export default {
  namespaced: true,
  state: {
    filmsDateList: [],// 所有电影时间的集合
    shopList : [] //套餐集合
  },
  getters: {
    // cinemasCount(state) {
    //   return state.cinemasList.length
    // }
  },
  mutations: {
    setfilmsDateList(state, payload) {
      state.filmsDateList = payload
    }
  },
  actions: {
    getfilmsDateList({ commit }, payload) {
      axios
        .get("/maoyan/ajax/cinemaDetail?cinemaId=15813&movieId=1230121", {
          params:{
            cinemaId:15813,//影院ID
            movieId:1230121 //电影ID
          }
        })
        .then(response => {
          let result = response.data
          commit('setfilmsDateList', result.showData.movies)
          // let a=''
          // result.showData.movies.forEach(element => {
          //   a=element
          //   console.log(a)
          // });
          // let b=a.shows[0].plist[0].lang
          // console.log(a.shows[0].plist[0].lang)
        })
    }
  }
}