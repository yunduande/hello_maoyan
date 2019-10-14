<template>
  <div class="page-login">
    <!-- 一级路由页面，登录页页 -->
    <header class="navbar">
      <div class="nav-left">
        <router-link tag="li" class="iconfont iconmjiantou-copy" to="/films"></router-link>
      </div>
      <h1 class="nav-header">猫眼电影</h1>
    </header>
    <!-- tab切换 -->
    <div class="login">
      <ul>
        <li  :class="{'active':tabType ==='login'}"    @click="chgType('login')">美团账号登录</li>

        <li  :class="{'active':tabType ==='register'}"  @click="chgType('register')">美团账号注册</li>
      </ul>
     
      <div class="slide" :style="{'left':tabType==='login'? '0': '50%' }">
      <span></span>
      </div>
    </div>
    <!-- 影片列表的数据，使用动态组件来控制 -->
      <!-- 这里我们放的组件名字，不是死的 -->
    <component :is="tabType"/>
  </div>

</template>
<script>
import register from '../../components/register'
import login from '../../components/login'
export default {
   name: 'Login',
  components: {
    register,
    login
  },
  data () {
    return {
      tabType: 'login'// 当前的页面组件
    }
  },
  methods: {
  // 切换当前的页面
    chgType (type) {
      this.tabType = type
    }
  }
}
</script>
<style lang="scss">
.navbar {
  background: #df2d2d;
  height: 50px;
  line-height: 50px;
  text-align: center;
  
  .nav-left {
    float: left;
    width: 50px;
    height: 50px;
    text-decoration: none;
    list-style: none;
  }

  .nav-header {
    color: #fff;
  }

  li {
    color: #fff;
    font-size: 20px;
  }
}
//登录界面

.login {
  
  background: #fff;
  position:relative;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    // background:#d6d6d6;

    li {
      height: 50px;
      font-size: 14px;
      line-height: 50px;
      align-items: center;
      &.active {
        color: #df2d2d;
      }
    }
  }
  .slide {
    height:2px;
    width:50%;
    position:absolute;
    bottom:0;
  
    
  
    span{

      display:block;
      height:2px;
      width:100px;
      margin:auto;
      background:#df2d2d;

    }
  }
}
</style>
