<template>
  <div class="film-list">
    <!-- <h2>正在热映</h2> -->
    <ul>
      <li>
        <div class="left">
          <img
            src="https://p0.meituan.net/128.180/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg"
          />
        </div>
        <div class="center">
          <div class="name">中国机长</div>
          <div class="grade">
            观众评分：
            <span>9.6</span>
          </div>
          <div class="actor">主演：张涵予、欧豪、杜江...</div>
          <div class="show-info">
            今天
            {{336}}家影院放映
            {{3799}}场
          </div>
        </div>
        <div class="right">
          <button>购票</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Filmlists'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common/mixins.scss';

.film-list {
  li {
    @include border-bottom;
    background: yellow;
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
      button {
        height: 27px;
        width: 47px;
        border: none;
        background: #f03d37;
        color: white;
        border: 1px solid #f03d37;
        border-radius: 3px;
      }
    }
  }
}
</style>
