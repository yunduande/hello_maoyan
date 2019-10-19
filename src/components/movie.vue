<template>
  <!-- 正文 -->
  <router-link to="/place">
    <div class="cinema" v-for="item in cinemasList" :key="item.id">
      <div class="all">
        <div class="title">
          {{ item.nm }}
          <span class="price-block">
            <span class="price">{{ item.sellPrice }}{{ item.showTimes }}</span>
            <span class="q">元起</span>
          </span>
        </div>
        <div class="add">
          <div class="address">{{ item.addr }}</div>
          <div class="distance">{{ item.distance }}</div>
        </div>
        <div class="meta">
          <div class="allowRefuse">退</div>
          <div class="endorse">改签</div>
          <div class="snack">小吃</div>
          <div class="vip">折扣卡</div>
          <div class="hallType">4k厅</div>
        </div>
        <div class="card">
          <span class="iconfont iconqiaquan"></span>
          {{item.promotion.cardPromotionTag}}
        </div>
        <div class="time">近期场次: {{ item.showTimes }}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Film',

  computed: {
    ...mapState('cinemas', ['cinemasList'])
  },
  filters: {
    formatImg (value) {
      return value.replace('w.h', '128.180')
    }
  },
  methods: {
    ...mapActions('cinemas', ['getCinemasList']),

    goBack () {
      this.$router.back()
    }
  },
  created () {
    this.getCinemasList()
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common/mixins.scss';

.cinema {
  display: block;
  // height: 142px;
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
    // 影院地址
    .add {
      display: flex;
      overflow: hidden;
      .address {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        // 溢出出现省略号
        line-height: 19px;
        font-size: 13px;
        color: #666;
        width: 280px;
      }
      .distance {
        line-height: 19px;
        font-size: 13px;
        color: #666;
      }
    }
    // 一系列标签
    .meta {
      display: flex;
      height: 17px;
      line-height: 17px;
      margin: 4px 0;
      // 退票
      .allowRefuse {
        line-height: 15px;
        border-radius: 2px;
        padding: 0 3px;
        font-size: 12px;
        color: #589daf;
        border: 1px solid #589daf;
      }
      // 改签
      .endorse {
        line-height: 15px;
        border-radius: 2px;
        padding: 0 3px;
        font-size: 12px;
        color: #589daf;
        border: 1px solid #589daf;
      }
      // 小吃
      .snack {
        line-height: 15px;
        border-radius: 2px;
        padding: 0 3px;
        font-size: 12px;
        color: #f90;
        border: 1px solid #f90;
      }
      .vip {
        line-height: 15px;
        border-radius: 2px;
        padding: 0 3px;
        font-size: 12px;
        color: #f90;
        border: 1px solid #f90;
      }
      // 放映厅
      .hallType {
        line-height: 15px;
        border-radius: 2px;
        padding: 0 3px;
        font-size: 12px;
        color: #589daf;
        border: 1px solid #589daf;
      }
    }
    // 优惠卡
    .card {
      line-height: 18px;
      color: #999;
      margin-bottom: 4px;
      font-size: 11px;
      span {
        color: #33ccff;
      }
    }
    // 上映时间
    .time {
      line-height: 18px;
      color: #777;
    }
  }
}
</style>
