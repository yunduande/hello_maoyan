<template>
  <div class="page-city-center">
    <!-- 二级路由页面，个人中心页 -->
    <div class="cinemas-header">
      <h1 class="nav-header">我的</h1>
    </div>
    <div class="header">
      <img
        class="img"
        src="https://img.meituan.net/maoyanuser/23f19f4cdfe538bdf85f0ccd863346639437.png"
      />
    </div>

    <div class="container">
      <div class="group">
        <div class="orders">
          <div class="title">我的订单</div>
          <div class="list">
            <div class="order-item movie">
              <i class="iconfont icondianying1" style="font-size:40px;color:#e54847"></i>
              <p>电影</p>
            </div>
            <div class="order-item store">
              <i class="iconfont iconyingyuanb" style="font-size:40px;color:#47d3e5"></i>
              <p>商城</p>
            </div>
          </div>
        </div>
      </div>
      <div class="group">
        <div class="item scale-1px">
          <div>
            在线观影
            <i
              class="iconfont iconiconfontyoujiantou"
              style="float:right;font-size:20px;color:#ccc"
            ></i>
          </div>
        </div>
        <div class="item scale-1px">
          <div>
            优惠券
            <i
              class="iconfont iconiconfontyoujiantou"
              style="float:right;font-size:20px;color:#ccc"
            ></i>
          </div>
        </div>
        <div class="item scale-1px">
          <div>
            折扣卡
            <i
              class="iconfont iconiconfontyoujiantou"
              style="float:right;font-size:20px;color:#ccc"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-city-center {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .cinemas-header {
    height: 52px;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    .nav-header {
      font-size: 18px;
      line-height: 50px;
      text-align: center;
      color: #fff;
    }
  }
  .header {
    background: #e54847;
    height: 150px;
    overflow: hidden;
    text-align: center;
  }
  img {
    display: inline-block;
    margin-top: 30px;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    border: 3px solid #fff;
  }
  .container {
    flex: 1;
    .group {
      margin-top: 10px;
      background: #fff;
    }
    .item {
      position: relative;
      height: 44px;
      line-height: 44px;
      font-size: 15px;
      margin-left: 15px;
      padding-right: 15px;
    }

    .orders {
      padding: 0 15px;
      position: relative;
      overflow: hidden;
      text-align: center;
      .title {
        position: relative;
        margin: 13px 0 0;
        font-size: 15px;
        line-height: 21px;
        height: 21px;
        color: #333;
        z-index: 9;
        display: inline-block;
        width: 80px;
        background-color: #fff;
      }
      .list {
        overflow: hidden;
        .order-item {
          float: left;
          height: 97px;
          background-repeat: no-repeat;
          background-position: top;
          background-size: 42px auto;
          margin-top: 18px;
          width: 50%;
          p {
            position: relative;
            top: 15px;
            text-align: center;
            font-size: 15px;
            line-height: 21px;
            height: 21px;
            margin: 0;
            color: #333;
          }
        }
      }
    }
  }
}
</style>
