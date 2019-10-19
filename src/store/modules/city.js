import axios from 'axios'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state: {
    cities: [], // 所有城市的集合
    cityIdList: [],
    cityId: 440300,
    cityName: '深圳'
  },

  getters: {
    cityList(state) {
      let res = [] //获取所有城市
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
        //按字母排序
        return a.py.charCodeAt() - b.py.charCodeAt()
      })
    },

    pys(status, getters) {
      return getters.cityList.map(item => item.py)
    },
    hotList(state) {
      let hotListcity = [] //获取热门城市空数组
      state.cities.forEach(city => {
        let ishotCity = city.isHot
        if (ishotCity > 0) {
          hotListcity.push(city)
        }
      })
      console.log(hotListcity)
      return hotListcity
    }
  },

  mutations: {
    setCities(state, payload) {
      state.cities = payload
    },
    setCityId(state, payload) {
      state.CityId = payload
    }
  },
  actions: {
    getCities({ commit }, payload) {
      Toast.loading({
        // mask: true,   //整个遮罩层
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
