<template>

  <div class="page-home">
   <!-- 一级路由页面，首页 -->
   <!-- 二级路由页面 -->
    <router-view></router-view>
    <ul class="navbar">
        <router-link to='/films' tag="li">
        <i class="iconfont icondianying1"></i>
        <span>电影</span>
        </router-link>
        <router-link to='/cinemas' tag="li">
        <i class="iconfont iconyingyuanb"></i>
        <span>影院</span>
        </router-link>
        <router-link to='/center' tag="li">
        <i class="iconfont iconwode"></i>
        <span>我的</span>
        </router-link>
    </ul>
   </div>
</template>
<style lang="scss" >
@import '../../assets/styles/common/mixins.scss';
.page-home{
  height:100%;
  display:flex;
  flex-direction:column;
  overflow:hidden;
  > div:first-child{
    flex:1;
    overflow-y: auto;
  }
  .navbar{
    @include border-top;
    height:48px;
    display:flex;
    li{
      display:flex;
      flex-direction: column;
      flex:1;
      text-align: center;
      height:48px;
      justify-content: center;
      color:#696969;
      i{
        font-size:24px;
        margin-bottom: 2px;
      }
      span{
        font-size: 12px;
      }
      &.router-link-active{
        color: #f03d37;
      }
    }
  }
}
</style>