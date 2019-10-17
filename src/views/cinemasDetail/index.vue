<template>
  <!-- 一级路由页面，影院详情页面 -->
  <div class="cinemasList">
      <!-- 影院详情头部 -->
      <div class="head">
         <i class="iconfont iconmjiantou-copy"></i>
         <router-link to='/cinemas'>
           <span class="detail-title">橙天国际影城（嘉邻中心双机巨幕店)</span>
         </router-link>
      </div>
      <div class="dev-location">
          <div class="location-left">
            <span class="first-title">橙天国际影城（嘉邻中心双机巨幕店)</span>
            <span class="second-title">坪山区坪山新区坑梓街道翠景路56号嘉邻中心三楼</span>
          </div>
          <div class="location-right">
             <i class="iconfont icondizhi2"></i>
          </div>
      </div>
      <div class="film-banner">
         <div class="film-pic"></div>
         <div class="film-mom"></div>
      </div>
      <div class="tabs">
        <ul>
          <li class="active">今天10月16日</li>
          <li>明天10月17日</li>
        </ul>
        <div class="active-line">
          <span></span>
        </div>
      </div>
      <!-- 影片播放列表数据，动态组件控制 -->

  </div>
</template>
<style lang="scss" scoped>
@import '../../assets/styles/common/mixins.scss';
html,body{
  width:100%;
  height:100%;
  .cinemasList{
    width: 100%;
    .head{
      height:50px;
      background:#e54847;
      display: flex;
      .iconmjiantou-copy{
        display: block;
        font-size:20px;
        color:#fff;
        line-height: 50px;
        margin-left:10px;

      }
      .detail-title{
        display: inline-block;
        width: 272px;
        font-size:18px;
        line-height: 50px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right:53px;
        margin-left:25px;
        color:#fff;
      }
    }
    .dev-location{
      height:74px;
      display:flex;
      .location-left{
        width:260px;
        height:40px;
        margin-left:15px;
        // background:blue;
        transform: translateY(20px);
        .first-title{
          width: 260px;
          white-space: nowrap;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size:17px;
          line-height: 24px;
          font-weight:700;
          color:#333;
        }
        .second-title{
          width: 260px;
          height:18px;
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size:14px;
          margin-top:1px;
          color:#999;
        }
      }
      .location-right{
        display: inline-block;
        margin-left:28px;
        width: 71px;
        height:31px;
        // background: green;
        transform: translateY(24px);
        @include border-left;
        .icondizhi2{
          text-align: center;
          font-size:21px;
          line-height: 31px;
          margin-left:22px;
          color:blueviolet;
        }
      }
    }
    .film-banner{

      background: pink;
      .film-pic{
        height: 135px;
        background: blue;
      }
      .film-mom{
        height:66px;
        // background: green;
        @include border-bottom;
      }
    }
    .tabs{
      height:45px;
      ul{
        height:45px;
        display: flex;
        position:relative;
        li{
           line-height: 45px;
           font-size:14px;
           margin-left:15px;
           color:#666;
           &.active{
             color:#f03d37;
           }
        }
         .active-line{
          position:absolute;
          height:2px;
          bottom:0;
          transition: left 0.3s;
          display: flex;
          span{
            display: flex;
            display: block;
            margin:auto;
            width:80px;
            background: #f03d37;
          }
         }
        }
      }
    }
  }

</style>