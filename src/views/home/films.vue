<template>
  <div class="page-city-films">
    <!-- 二级路由页面，影片列表页 -->

    <!-- 标题栏 -->
    <h1>猫眼电影</h1>
    <!-- 头像 -->
    <!-- <div class="header">
      <div class="west">
        <img src alt />
        <div class="middle">
          <h5>猫眼</h5>
          <p>0元看电影，天天领现金</p>
        </div>
      </div>
      <div class="east"></div>
    </div>-->

    <div class="tabs">
      <!-- 城市选择 -->
      <div class="left">
        城市
        <span class="iconfont iconxiajiantou_huaban"></span>
      </div>
      <!-- tabs 切换 -->
      <ul>
        <!-- 这时active是写死的，我们想办法让她和什么变化的东西联系起来 -->
        <li :class="{'active':curFilmtype === 'nowPlaying'}" @click="chgFilmtype('nowPlaying')">正在热映</li>
        <li :class="{'active':curFilmtype === 'comingSoon'}" @click="chgFilmtype('comingSoon')">即将上映</li>
        <div class="active-line" :style="{'left':curFilmtype === 'nowPlaying'?'0':'50%'}">
          <span></span>
        </div>
      </ul>
      <!-- 搜索 -->
      <div class="right">
        <span class="iconfont iconsousu"></span>
      </div>
    </div>

    <!-- 电影列表 -->
    <!-- <div class="list">
      <img src alt />
      <div class="details">
        <h3></h3>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>-->
    <component :is="curFilmtype" />
  </div>
</template>


<script>
import comingSoon from '../../components/comingSoon'
import nowPlaying from '../../components/nowPlaying'
// import "../../assets/styles/common/mixins.scss"
import axios from 'axios'

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
  },
  created() {
    axios
      .get('http://m.maoyan.com/ajax/movieOnInfoList?token=')
      .then(response => {
        let result = response.data
        console.log(result)
      })
  }
}
</script>

<style lang="scss" scoped>
html,
body {
  height: 100%;
}
.page-city-films {
  // 标题
  h1 {
    height: 52px;
    background: #f03d37;
    color: #fff;
    font-size: 18px;
    line-height: 52px;
    text-align: center;
  }

  // tabs 的切换
  .tabs {
    height: 44px;
    display: flex;

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
