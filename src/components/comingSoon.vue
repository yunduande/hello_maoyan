<template>
  <router-link to="/film/:id" class="film-list">
    <!-- <h2>即将上映</h2> -->

    <ul v-for="item in filmList" :key="item.id">
      <!-- 星期几上映 -->
      <!-- :style="{visibility:time === "item.comingTitle"?'hidden' : 'initial' -->
      <span v-if="item.comingTitle === '10月25日 周五'" class="fir"></span>
      <span class="week" v-else>{{ item.comingTitle }}</span>
      <li>
        <div class="left">
          <!-- <img src="http://p0.meituan.net/w.h/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg" /> -->
          <img :src="item.img | formatImg" alt />
        </div>
        <div class="center">
          <div class="name">{{ item.nm }}</div>
          <div class="grade">
            <span>{{ item.wish }}</span>人想看
          </div>
          <div class="actor">主演：{{ item.star }}</div>
          <div class="show-info">{{ item.rt }}上映</div>
        </div>
        <router-link to="/place" class="right">
          <button v-if="item.sc !== 0" class="now">购票</button>
          <button v-else class="wait">想看</button>
        </router-link>
      </li>
    </ul>
  </router-link>
</template>

<script>
// import axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ComingSoon',
  computed: {
    ...mapState('movie', ['filmList'])
  },
  filters: {
    formatImg (value) {
      return value.replace('w.h', '128.180')
    }
  },
  methods: {
    ...mapActions('movie', ['getMovieList'])
    // goBack() {
    //   this.$router.back()
    // }
  },

  created () {
    this.getMovieList()
    console.log(this.$store)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common/mixins.scss';

.film-list {
  // @include border-top;
  .week {
    display: block;
    height: 31px;
    padding: 12px 0 0 15px;
    color: #666;
    box-sizing: border-box;
  }
  li {
    position: relative;

    @include border-bottom;
    // background: yellow;
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
        width: 100%;
      }
    }
    // 主演  电影名
    .center {
      width: 202px;
      height: 100%;
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
          color: #faaf00;
          font-size: 15px;
          font-weight: 700;
          margin-right: 3px;
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

      .now {
        height: 27px;
        width: 47px;
        border: none;
        background: #f03d37;
        color: white;
        border: 1px solid #f03d37;
        border-radius: 3px;
        font-size: 12px;
      }
      .wait {
        height: 27px;
        width: 47px;
        border: none;
        background: #faaf00;
        color: white;
        border: 1px solid #faaf00;
        border-radius: 3px;
        font-size: 12px;
      }
    }
  }
}
</style>
