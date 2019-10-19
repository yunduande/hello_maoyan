<template>
  <div class="page-city-films">
    <!-- 二级路由页面，影片列表页 -->
    <div>
      <!-- 标题栏 -->
      <router-link to="/title" class="title">猫眼电影</router-link>

      <div class="tabs">
        <!-- 城市选择 -->
        <router-link to="/city" class="left">
          <!-- {{ this.$store.city.name }} -->
          城市
          <span class="iconfont iconxiajiantou_huaban"></span>
        </router-link>
        <!-- tabs 切换 -->
        <ul>
          <!-- 这时active是写死的，我们想办法让她和什么变化的东西联系起来 -->
          <li
            :class="{'active':curFilmtype === 'nowPlaying'}"
            @click="chgFilmtype('nowPlaying')"
          >正在热映</li>
          <li
            :class="{'active':curFilmtype === 'comingSoon'}"
            @click="chgFilmtype('comingSoon')"
          >即将上映</li>
          <div class="active-line" :style="{'left':curFilmtype === 'nowPlaying'?'0':'50%'}">
            <span></span>
          </div>
        </ul>
        <!-- 搜索 -->
        <router-link to="/search" class="right">
          <span class="iconfont iconsousu"></span>
        </router-link>
      </div>

      <component :is="curFilmtype" />
    </div>
  </div>
</template>

<script>
import comingSoon from '../../components/comingSoon'
import nowPlaying from '../../components/nowPlaying'
// import BScroll from 'better-scroll'

export default {
  name: 'Films',
  components: {
    comingSoon,
    nowPlaying
  },
  data() {
    return {
      curFilmtype: 'nowPlaying'
    }
  },
  methods: {
    /**
     * 切换当前的影片类型
     */
    chgFilmtype(type) {
      this.curFilmtype = type
    }
  }
  // mounted () {
  //   let bs = new BScroll(this.$refs.box, {
  //     probeType: 1,
  //     pullUpLoad: true // 开启上拉加载更多
  //   })
  //   bs.on('scroll', () => {
  //     console.log(123)
  //   })

  //   bs.on('pullingUp', () => {
  //     console.log(456)
  //     // this.getFilmList({
  //     //   type:newVal === 'nowPlaying',

  //     // })
  //   })
  // }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/common/mixins.scss';

html,
body {
  height: 100%;
}
.page-city-films {
  // 标题
  .title {
    display: block;
    font-weight: 400;
    height: 52px;
    background: #f03d37;
    color: #fff;
    font-size: 18px;
    line-height: 52px;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 999;
  }

  // tabs 的切换
  .tabs {
    @include border-cinemas;

    height: 44px;
    display: flex;
    position: sticky;
    top: 52px;
    background: #fff;
    z-index: 999;
    ul {
      flex: 1;
      display: flex;
      line-height: 44px;
      text-align: center;
      height: 44px;
      position: relative;
      li {
        flex: 1;
        font-size: 15px;
        font-weight: 700;
        color: #666;
        margin: 0 12px;
        &.active {
          color: #f03d37;
        }
      }
      .active-line {
        display: flex;
        height: 2px;
        transition: left 0.3s;
        position: absolute;
        margin-left: 12px;
        bottom: 0;
        span {
          display: block;
          height: 2px;
          width: 80px;
          background: #f03d37;
          margin: auto;
        }
      }
    }
    .left {
      width: 83px;
      height: 100%;
      text-align: center;
      line-height: 44px;
      color: #666;
      span {
        font-size: 10px;
        color: #b0b0b0;
      }
    }
    .right {
      width: 83px;
      height: 100%;

      position: relative;
      display: flex;
      align-items: center;
      span {
        display: block;
        text-align: center;
        color: #f03d37;
        font-size: 20px;
        position: absolute;
        right: 15px;
      }
    }
  }
}
</style>
