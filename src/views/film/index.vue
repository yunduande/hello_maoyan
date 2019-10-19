<template>
  <div class="page-film">
    <!-- 一级路由页面，影片详情页 -->
    <!-- <h1>我和我的祖国</h1> -->
    <div class="ex">
      <van-nav-bar :title="info.nm">
        <template v-slot:left>
          <router-link to="/" class="iconfont iconmjiantou-copy" @click="goBack"></router-link>
        </template>
      </van-nav-bar>

      <!-- 背景图 -->
      <router-link to="/place" class="bgr">
        <!-- 遮罩层 -->
        <div class="movie-filter"></div>
        <div
          class="brr"
          style="background-image:url(//p0.meituan.net/71.100/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg)"
        ></div>
        <div class="banner">
          <!-- 左大半部分 -->
          <div class="left">
            <div class="poster">
              <img :src="info.albumImg " />
            </div>
            <div class="middle">
              <div class="nm">{{ info.nm }}</div>
              <div class="py">{{ info.enm }}</div>
              <div class="sc">
                {{info.sc}}
                <span>({{info.watched}}人评)</span>
              </div>
              <div class="type">{{ info.cat }}</div>
              <div class="country">{{info.fra}} | {{info.episodeDur}}分钟</div>
              <div class="time">{{info.pubDesc}}</div>
            </div>
          </div>
          <!-- 右小边部分 -->
          <div class="right">
            <span class="iconfont iconiconfontyoujiantou-copy"></span>
          </div>
        </div>
      </router-link>
    </div>
    <!-- 吸顶效果 -->
    <div class="all-3">
      <!-- 粘性定位 -->
      <div class="bar">
        <!-- 日期 -->
        <div class="date">
          <ul>
            <li class="active">明天10月15日</li>
            <li>明天10月16日</li>
            <li>后天10月17日</li>
            <div class="active-line">
              <span></span>
            </div>
          </ul>
        </div>

        <!-- 导航 -->
        <div class="page-wrap">
          <div class="cinemas-list">
            <div class="item">
              <i>
                <van-dropdown-menu active-color="red">
                  <van-dropdown-item v-model="value1" :options="option1" />
                </van-dropdown-menu>
              </i>
            </div>

            <div class="item">
              <i>
                <van-dropdown-menu>
                  <van-dropdown-item v-model="value2" :options="option2" />
                </van-dropdown-menu>
              </i>
            </div>

            <div class="item">
              <i>
                <van-dropdown-menu>
                  <van-dropdown-item v-model="value3" :options="option3" />
                </van-dropdown-menu>
              </i>
            </div>

            <div class="list-right"></div>
          </div>
        </div>
      </div>

      <!-- 影院列表 -->
      <component is="movie" />
    </div>
    <!-- <div class="arr" style="height:800px;background:green"></div> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import movie from '../../components/movie'

export default {
  name: 'Film',
  components: {
    movie
  },
  // data() {
  //   return {
  //     curFilmtype: 'movie'
  //   }
  // },
  computed: {
    ...mapState('cinemas', ['cinemasList']),
    ...mapState('introduce', ['info'])
  },
  // filters: {
  //   formatImg (value) {
  //     return value.replace('w.h', '128.180')
  //   }
  // },
  methods: {
    ...mapActions('cinemas', ['getCinemasList']),
    ...mapActions('introduce', ['getInfo']),

    goBack () {
      this.$router.back()
    }
  },
  created () {
    this.getCinemasList(), console.log(this.$store), this.getInfo()
  },
  data () {
    return {
      serchVal: '',
      value1: 0,
      value2: 'a',
      value3: 'A',
      option1: [
        { text: '全城', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '品牌', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ],
      option3: [
        { text: '特色', value: 'A' },
        { text: '好评排序', value: 'B' },
        { text: '销量排序', value: 'C' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/common/mixins.scss';

.page-film {
  // background: yellow;
  // height: 100%;
  // position: relative;
  // display: flex;
  // flex-direction: column;
  .van-nav-bar {
    height: 52px;
    background: #e54847;
    .van-nav-bar__title {
      color: #fff;
      line-height: 52px;
      text-align: center;
      font-size: 18px;
    }
    .iconmjiantou-copy {
      display: block;
      color: #fff;
      font-size: 30px;
    }
  }

  // 背景图
  .bgr {
    height: 188px;
    display: block;
    .movie-filter {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 188px;
      background-color: #333;
    }

    .brr {
      background-size: cover;
      position: absolute;
      background-repeat: no-repeat;
      opacity: 0.18;
      z-index: -1;
      height: 188px;
      width: 100%;
      overflow: hidden;
    }
    .banner {
      display: flex;
      height: 100%;
      // 左边海报
      .left {
        display: flex;
        height: 150px;
        padding: 19px 0 19px 15px;
        .poster {
          height: 150px;
          width: 110px;
          img {
            height: 150px;
            width: 100%;
          }
        }
        // 中间部分信息
        .middle {
          width: 208px;
          height: 150px;
          margin-left: 12px;
          color: #fff;
          .nm {
            font-size: 20px;
            margin-top: 2px;
            font-weight: 700;
          }
          .py {
            margin-top: 10px;
            font-size: 12px;
            color: #fff;
            opacity: 0.8;
          }
          .sc {
            font-size: 18px;
            font-weight: 700;
            color: #fc0;
            margin-top: 11px;
            span {
              margin-top: 10px;
              font-size: 12px;
              color: #fff;
              opacity: 0.8;
            }
          }
          .type {
            margin-top: 10px;
            font-size: 12px;
            color: #fff;
            opacity: 0.8;
          }
          .country {
            margin-top: 10px;
            font-size: 12px;
            color: #fff;
            opacity: 0.8;
          }
          .time {
            margin-top: 10px;
            font-size: 12px;
            color: #fff;
            opacity: 0.8;
          }
        }
      }
      .right {
        height: 100%;
        width: 30px;
        display: flex;
        align-items: center;
        span {
          color: #fff;
          font-size: 24px;
          display: block;
        }
      }
    }
  }
  .all-3 {
    // flex: 1;
    // overflow: hidden;
    // position: relative;
    // 粘性定位
    .bar {
      height: 85px;
      position: sticky;
      top: 0;
      background: #fff;
      z-index: 999;
      overflow-y: hidden;
      // 上映时间
      .date {
        height: 44px;
        display: flex;
        @include border-cinemas;
        ul {
          display: flex;
          text-align: center;
          .active {
            color: red;
          }
          li {
            margin-left: 5px;
            line-height: 45px;
            width: 115px;
            // background: blue;
            border-right: #fff 1px solid;
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
              width: 100px;
              background: red;
              margin: auto;
            }
          }
        }
      }
      // 导航栏

      .page-wrap {
        flex-direction: column;
        width: 100%;
        // display: flex;
        // position: sticky;
        // top: 45px;
        // background: #fff;
        // z-index: 10;
        // overflow: auto;
        // position:absolute;
        // flex: 1;
        // overflow: hidden;

        // 影院列表
        .cinemas-list {
          height: 40px;
          width: 375px;
          display: flex;
          .item {
            flex: 1;
            line-height: 40px;
            @include border-left;
            @include border-cinemas;
            .van-dropdown-menu {
              height: 40px;
            }
            .list-right {
              height: 40px;
              width: 17px;
              visibility: hidden;
            }
          }
        }
      }
    }

    .cinema {
      display: block;
      height: 142px;
      margin-left: 15px;
      .all {
        @include border-cinemas;
        padding: 13px 15px 13px 0;
        // background: brown;
        height: 116px;
        // 影院名
        .title {
          font-weight: 900px;
          line-height: 23px;
          font-size: 16px;
          color: #000;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          // 溢出出现省略号
          // display: flex;
          .price-block {
            padding-left: 9px;
            padding-top: 3px;
            .price {
              font-size: 18px;
              color: #f03d37;
            }
            .q {
              margin-left: 3px;
              font-size: 11px;
              color: #f03d37;
            }
          }
        }
      }
    }
  }
}
</style>
