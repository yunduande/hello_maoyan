<template>
  <div class="page-search">
    <!-- 一级路由页面，搜索列表页 -->
    <div class="nav">
      <van-nav-bar title="猫眼电影" left-arrow />
    </div>
  </div>
</template>

<style lang="scss">
.page-search {
  .van-nav-bar {
    height: 52px;
    background: #e54847;
    text-align: center;
    line-height: 52px;
    .van-nav-bar__title {
      color: #fff;
      font-size: 18px;
    }
    .van-icon-arrow-left:before {
      color: #fff;
      font-size: 30px;
    }
  }
}
</style>