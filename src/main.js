import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'

import { Search, NavBar, Toast, DropdownMenu, DropdownItem } from 'vant'
Vue.use(Search)
  .use(NavBar)
  .use(Toast)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(BaiduMap, {
    ak: 't9Mdhd3nRuUiOajcw9UzbVMoB6jQfK3s'
  })

// 全局引入 vant
// import Vant from 'vant'
// import 'vant/lib/index.css'

// Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
