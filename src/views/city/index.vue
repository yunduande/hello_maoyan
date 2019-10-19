<template>
  <div class="page-city">
    <!-- 一级路由页面，城市选择页 -->
    <van-nav-bar title="城市选择">
      <template v-slot:left>
        <i class="iconfont iconshanchu" @click="goBack"></i>
      </template>
    </van-nav-bar>
    <van-search placeholder="请输入搜索关键词" v-model="searchVal" show-action @focus="cancelText='取消'">
      <template v-slot:action>
        <span @click="searchCancel">{{ cancelText }}</span>
      </template>
    </van-search>

    <div class="box" v-if="!showSearchList">
      <div class="left" ref="box">
        <!-- 定位当前城市 -->
        <section>
          <div id="locate" class="city-title">定位城市</div>
          <div class="city-list-inline">
            <div class="location-city">
              <p>定位失败，请点击重试</p>
            </div>
          </div>
        </section>
        <!-- 热门城市的获取 -->
        <section>
          <div id="hot" class="city-title">热门城市</div>
          <div class="city-list-inline city-host">
            <router-link
              tag="div"
              class="city-item"
              v-for="city in hotList"
              :key="city.cityId"
              @click="cityId(city)"
              to="/films"
            >{{ city.name }}</router-link>
          </div>
        </section>
        <!-- 循环城市列表拼音 -->
        <div
          :id="`hello-${item.py}`"
          class="city-title-letter"
          v-for="item in cityList"
          :key="item.py"
        >
          <p>{{ item.py }}</p>
          <!-- 所有城市 -->
          <ul>
            <router-link
              tag="li"
              v-for="city in item.list"
              :key="city.cityId"
              to="/"
            >{{ city.name }}</router-link>
          </ul>
        </div>
      </div>
      <!-- 城市列表索引 -->
      <div class="right">
        <ul>
          <li id="locate" @click="fn2()">定位</li>
          <li id="hot" @click="fn4()">热门</li>
          <li v-for="item in pys" :key="item" @click="fn1(item)">{{ item }}</li>
        </ul>
      </div>
    </div>

    <!-- 互斥搜索结果页面 -->
    <div class="box" v-else>
      <ul v-if="searchList.length>0">
        <router-link
          tag="li"
          v-for="city in searchList"
          :key="city.cityId"
          to="/films"
          class="findList"
        >{{ city.name }}</router-link>
      </ul>
      <div class="noList" v-else>
        <p>没有找到相关内容</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'City',
  namespaced: true,

  data() {
    return {
      searchVal: '',
      cancelText: '',
      showSearchList: false
    }
  },
  watch: {
    searchVal() {
      this.showSearchList = true
    }
  },

  computed: {
    ...mapState('city', ['cities']),
    ...mapGetters('city', ['cityList', 'pys']),
    ...mapGetters('city', ['cityList', 'hotList']),

    searchList() {
      if (!this.searchVal) {
        return []
      }
      let tmp = this.cities.filter(city => {
        return (
          city.name.indexOf(this.searchVal) > -1 ||
          city.pinyin.indexOf(this.searchVal) > -1
        )
      })
      return tmp
    }
  },

  methods: {
    ...mapActions('city', ['getCities']),

    goBack() {
      this.$router.back()
    },
    fn1(py) {
      let dom = document.getElementById(`hello-${py}`)
      let top = dom.offsetTop
      this.$refs.box.scrollTop = top
    },
    fn2() {
      let dom = document.getElementById('locate')
      let top = dom.offsetTop
      this.$refs.box.scrollTop = top
    },
    fn3() {
      let dom = document.getElementById('history')
      let top = dom.offsetTop
      this.$refs.box.scrollTop = top
    },
    fn4() {
      let dom = document.getElementById('hot')
      let top = dom.offsetTop
      this.$refs.box.scrollTop = top
    },
    searchCancel() {
      this.cancelText = ''
      this.showSearchList = false
    },
    cityId(item) {
      this.$store.commit('setCityId', item.cityId)
      this.$store.commit('setCityName', item.name)
    }
  },
  created() {
    this.getCities()
  }
}
</script>

<style lang='scss'>
.page-city {
  display: flex;
  flex-direction: column;
  height: 100%;
  .van-nav-bar__title {
    color: #000;
  }
  .box {
    display: flex;
    flex: 1;
    overflow: hidden;
    height: 100%;
    .right {
      width: 35px;
      font-size: 12px;
      color: #333;
      display: flex;
      align-items: center;
      position: fixed;
      top: 100px;
      right: 0;
      z-index: 10;

      li {
        margin-left: 5px;
        height: 18px;
        text-align: center;
      }
    }
    .left {
      flex: 1;
      overflow-y: auto;
      position: relative;
      .city-title {
        height: 30px;
        line-height: 30px;
        padding-left: 15px;
        font-size: 14px;
      }
      .city-list-inline {
        height: 56px;
        background: #f5f5f5;

        .location-city,
        .city-item {
          width: auto;
          min-width: 30%;
          padding: 0 20px;
          float: left;
          background: #fff;
          height: 33px;
          line-height: 33px;
          margin-top: 15px;
          border: 1px solid #e6e6e6;
          border-radius: 3px;
          text-align: center;
          box-sizing: border-box;
          text-overflow: ellipsis;
          margin-left: 15px;
          font-size: 14px;
        }
      }
      .city-host {
        min-height: 120px;
      }
    }
  }
  .city-title-letter {
    p {
      height: 30px;
      line-height: 30px;
      color: #333;
      background: #ebebeb;
      padding: 0 0 0 25px;
    }
    ul {
      margin-left: 15px;
      :last-child {
        border-bottom: 0;
      }
    }
    li {
      height: 45px;
      line-height: 45px;
      border-bottom: 1px solid #ccc;
      font-size: 14px;
    }
  }
  .findList {
    height: 40px;
    width: 100%;
    margin-left: 40px;
    line-height: 40px;
  }
  .noList {
    width: 100%;
    p {
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      text-align: center;
      color: #999;
    }
  }
}
</style>
