<template>
  <div class="page-search">
    <!-- 一级路由页面，搜索列表页 -->
    <div class="nav">
      <van-nav-bar title="猫眼电影" left-arrow />
    </div>
    <div class="search-wrapper">
      <div class="search-header">
        <form action="/">
          <van-search placeholder="搜电影、搜影院" show-action />
        </form>
      </div>
      <div class="search-all-list">
        <ul>
          <li class="search-list">
            <i class="iconfont iconshijian"></i>
            <span>魔咒</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.page-search {
  display: flex;
  flex-direction: column;
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
  .search-wrapper {
    background: #f5f5f5;
    height: 100vh;
    .van-search__action {
      color: #f03d37;
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      font-size: 16px;
      // border-bottom: 1px solid #f5f5f5;
    }
    .van-search {
      border-bottom: 1px solid #e5e5e5;
    }
    .search-all-list {
      .search-list {
        i {
          margin-left: 15px;
          margin-right: 15px;
        }
        height: 44px;
        border-bottom: 1px solid #e5e5e5;
        line-height: 44px;
        font-size: 15px;
        color: #333;
      }
    }
  }
}
</style>