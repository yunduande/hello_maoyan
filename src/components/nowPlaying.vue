<template>
  <div class="film-list">
    <!-- <h2>正在热映</h2> -->
    <ul>
      <li v-for="item in filmList" :key="item.id">
        <div class="left">
          <!-- <img src="http://p0.meituan.net/w.h/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg" /> -->
          <img :src="item.img | formatImg " alt />
        </div>
        <div class="center">
          <div class="name">{{ item.nm }}</div>
          <div class="grade">
            观众评分：
            <span>{{ item.sc }}</span>
          </div>
          <div class="actor">主演：{{ item.star }}</div>
          <div class="show-info">{{ item.showInfo }}</div>
        </div>
        <div class="right">
          <router-link to="/film/:id">
            <button :v-if="`{item.sc!== 0}`" v-show="!isShow">购票</button>
            <button :v-else-if="`{item.sc === 0}`" v-show="!isShow">预售</button>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'NowPlaying',
  computed: {
    ...mapState('film', ['filmList'])
  },
  filters: {
    formatImg(value) {
      return value.replace('w.h', '128.180')
    }
  },
  methods: {
    ...mapActions('film', ['getFilmList'])
    // fn() {
    //   if (!$store.movieList.sc === 0) {
    //     return 1
    //   } else {
    //     return 0
    //   }
    // }
  },
  data() {
    return {
      isShow: false
    }
  },

  created() {
    this.getFilmList()
    console.log(this.$store)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common/mixins.scss';

.film-list {
  li {
    position: relative;

    @include border-bottom;

    height: 100%;
    display: flex;
    padding: 12px 0 15px 12px;
    // 海报
    .left {
      width: 64px;
      height: 90px;
      padding-right: 14px;
      img {
        height: 100%;
      }
    }
    // 主演  电影名
    .center {
      width: 202px;
      height: 100%;
      overflow: hidden;
      .name {
        color: #333;
        font-size: 17px;
        font-weight: 700;
        line-height: 24px;
        margin-bottom: 7px;
      }
      // 观众评分
      .grade {
        display: flex;
        color: #666;
        font-size: 13px;
        line-height: 15px;

        span {
          display: block;
          color: blue;
          font-size: 15px;
          font-weight: 700;
        }
      }
      .actor {
        color: #666;
        font-size: 13px;
        line-height: 15px;
        margin-top: 6px;
        // 文本溢出出现省略号
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
      }
      .show-info {
        color: #666;
        font-size: 13px;
        line-height: 15px;
        margin-top: 6px;
      }
    }
    // 购票按钮
    .right {
      height: 90px;
      display: flex;
      align-items: center;
      position: absolute;
      right: 33px;

      button {
        height: 27px;
        width: 47px;
        border: none;
        background: #f03d37;
        color: white;
        border: 1px solid #f03d37;
        border-radius: 3px;
        font-size: 12px;
      }
    }
  }
}
</style>
