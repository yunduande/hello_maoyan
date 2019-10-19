<template>
  <div class="page-search">
    <!-- 一级路由页面，搜索列表页 -->
    <div class="nav">
      <van-nav-bar title="猫眼电影">
        <template v-slot:left>
          <i class="iconfont iconmjiantou-copy" @click="goBack"></i>
        </template>
      </van-nav-bar>
    </div>
    <div class="search-wrapper">
      <div class="search-header" v-if="!searchVal">
        <form action="/">
          <van-search placeholder="搜电影、搜影院" show-action v-model="searchVal" />
        </form>
      </div>
      <!-- 默认不可见 搜索结果的展示 -->
      <div class="box" v-else>
        <form action="/">
          <van-search placeholder="搜电影、搜影院" show-action v-model="searchVal" />
        </form>
        <ul class="search-all-list">
          <li class="search-list" @click="remove">
            <i class="iconfont iconshijian" @click="remove"></i>
            <span>魔咒</span>
            <div class="iconfont iconshanchu" style="
    margin-left: 250px"></div>
          </li>
          <li class="search-list">
            <i class="iconfont iconshijian"></i>
            <span>biu</span>
            <div class="iconfont iconshanchu" style="
    margin-left: 250px"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'City',
  data () {
    return {
      searchVal: ''
    }
  },
  methods: {
    // 返回上一页
    goBack () {
      this.$router.back()
    },
    remove () {
      remove(this)
    }
  }
}
</script>

<style lang="scss">
.page-search {
  display: flex;
  flex-direction: column;
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
        display: flex;
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
