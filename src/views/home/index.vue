<template>

  <div class="page-home">
   <!-- 一级路由页面，首页 -->

   <!-- 二级路由页面 -->
    <router-view></router-view>
    <ul>
      <li>
        <router-link to='/films'>电影</router-link>
      </li>
        <li>
        <router-link to='/cinemas'>影院</router-link>
      </li>
        <li>
        <router-link to='/center'>我的</router-link>
      </li>
    </ul>
   </div>
</template>
<style lang="scss" >
.page-home{
  height:100%;
  display:flex;
  flex-direction:column;
  overflow:hidden;
  > div:first-child{
    flex:1;
    overflow-y: auto;
  }
}
</style>
