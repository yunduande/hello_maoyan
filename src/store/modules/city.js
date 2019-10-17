import axios from 'axios'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state: {
    cities: [] // 所有城市的集合
  },
  getters: {
    cityList(state) {
      let res = []
      let hot = []
      state.cities.forEach(city => {
        let hotCity = city.isHot
        let hotname = city.name

        if (hotCity > 0) {
          hot.push(hotname)
          console.log(hotname)
        }
      })

      state.cities.forEach(city => {
        let py = city.pinyin.charAt(0).toUpperCase()
        let index = res.findIndex(item => item.py === py)
        if (index > -1) {
          res[index].list.push(city)
        } else {
          let obj = {
            py: py,
            list: [city]
          }
          res.push(obj)
        }
      })
      return res.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt()
      })
    },
    pys(status, getters) {
      return getters.cityList.map(item => item.py)
    }
  },
  mutations: {
    setCities(state, payload) {
      state.cities = payload
    }
  },
  actions: {
    getCities({ commit }, payload) {
      Toast.loading({
        // mask: true,
        message: '加载中',
        duration: 0
      })

      axios
        .get('https://m.maizuo.com/gateway?k=1819892', {
          headers: {
            'X-Client-Info':
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"156999712018279380812110"}',
            'X-Host': 'mall.film-ticket.city.list'
          }
        })
        .then(response => {
          let result = response.data
          if (result.status === 0) {
            commit('setCities', result.data.cities)
            Toast.clear()
          }
        })
    }
  }
}
