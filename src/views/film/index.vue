<template>
  <div class="page-film">
    <!-- 一级路由页面，影片详情页 -->
    <h1>我和我的祖国</h1>
    <div class="banner">
      <!-- 左大半部分 -->
      <div class="left">
        <div class="poster">
          <img
            src="//p0.meituan.net/148.208/moviemachine/b2c5c74d33e45745fd3462e44b3698e18336620.jpg"
          />
        </div>
        <div class="middle"></div>
      </div>
      <!-- 右小边部分 -->
      <div class="right"></div>
    </div>

    <!-- 日期 -->
    <div class="date">
      <ul>
        <li>今天10月15日</li>
        <li>明天10月16日</li>
        <li>后天10月17日</li>
      </ul>
    </div>

    <!-- 导航 -->
    <div class="nav-3">
      <div class="city">
        全城
        <span class="iconfont iconxiajiantou_huaban"></span>
      </div>
      <div class="brand">
        品牌
        <span class="iconfont iconxiajiantou_huaban"></span>
      </div>
      <div class="features">
        特色
        <span class="iconfont iconxiajiantou_huaban"></span>
      </div>
    </div>

    <!-- 正文 -->
    <div class="cinema">
      <div class="all">
        <div class="title">
          永乐国际影城 ( 青松路1号店 )
          <span>
            27.8
            <em>元起</em>
          </span>
        </div>
        <div class="address">青浦区青松路37号</div>
        <div class="meta">
          <div class="allowRefuse">退</div>
          <div class="endorse">改签</div>
          <div class="snack">小吃</div>
          <div class="vip">折扣卡</div>
          <div class="hallType">4k厅</div>
        </div>
        <div class="card">开卡特惠，首单两张最高立减6元</div>
        <div class="time">近期场次: 12:00 | 14:30 |15:20</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Film'
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/common/mixins.scss';

.page-film {
  background: yellow;
  height: 100%;
  h1 {
    height: 52px;
    background: #f03d37;
    color: #fff;
    font-size: 18px;
    line-height: 52px;
    text-align: center;
  }

  // 背景图
  .banner {
    display: flex;
    height: 188px;
    background: green;

    .left {
      display: flex;
      height: 150px;
      padding: 19px 30px 19px 15px;
      .poster {
        height: 150px;
        width: 110px;
        img {
          height: 100%;
        }
      }
      .middle {
        background: #f03d37;
        width: 208px;
        height: 150px;
        margin-left: 12px;
      }
    }
    .right {
    }
  }
  // 上映时间
  .date {
    height: 45px;
    background: pink;
    ul {
      display: flex;
      text-align: center;
      li {
        margin-left: 5px;
        line-height: 45px;
        width: 115px;
        // background: blue;
        border-right: #fff 1px solid;
      }
    }
  }
  // 导航栏
  .nav-3 {
    display: flex;
    // @include border-cinemas;
    @include border-top;

    div {
      flex: 1;
      height: 40px;
      display: flex;
      line-height: 40px;
      text-align: center;
      span {
        display: block;
        font-size: 10px;
        color: #b0b0b0;
      }
    }
  }
  .cinema {
    height: 142px;
    margin-left: 15px;
    .all {
      margin: 13px 15px 13px 0;
      background: brown;
      height: 116px;
      .title {
        font-weight: 600px;
        line-height: 23px;
        font-size: 16px;
        color: #000;
        display: flex;
        span {
          display: flex;
          display: inline-block;
          color: #f03d37;
          padding-left: 5px;
          font-size: 24px;
          height: 24px;
          width: 66px;
          em {
            display: inline-block;
            color: #f03d37;
            font-size: 16px;
          }
        }
      }
      .address {
        margin-top: 6px;
        font-size: 13px;
        color: #666;
      }
      .meta {
        display: flex;
        height: 17px;
        line-height: 17px;
        margin: 4px 0;
        .allowRefuse {
          line-height: 15px;
          border-radius: 2px;
          padding: 0 3px;
          font-size: 12px;
          color: #589daf;
          border: 1px solid #589daf;
        }
        .endorse {
          line-height: 15px;
          border-radius: 2px;
          padding: 0 3px;
          font-size: 12px;
          color: #589daf;
          border: 1px solid #589daf;
        }
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
        .hallType {
          line-height: 15px;
          border-radius: 2px;
          padding: 0 3px;
          font-size: 12px;
          color: #589daf;
          border: 1px solid #589daf;
        }
      }
      .card {
        line-height: 21px;
        color: #999;
        margin-bottom: 4px;
      }
      .time {
        line-height: 18px;
        color: #777;
      }
    }
  }
}
</style>
