<template>
  <!-- 一级路由页面，影院详情页面 -->
  <div class="cinemasList" style="overflow-x:auto">
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
         <div class="film-pic">
             <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">Slide 1</div>
                  <div class="swiper-slide">Slide 2</div>
                  <div class="swiper-slide">Slide 3</div>
                  <div class="swiper-slide">Slide 4</div>
                  <div class="swiper-slide">Slide 5</div>
                  <div class="swiper-slide">Slide 6</div>
                </div>
            </div>
         </div>
         <div class="film-mom">
           <div class="movie-title">
             <span class="title">中国机长</span>
             <span class="grade">
               <span>
                 9.4
                 <span class="store">分</span>
               </span>
             </span>
           </div>
           <div class="movie-desc">
                111分钟 | 剧情 | 张涵予,欧豪,杜江
           </div>
         </div>
      </div>
      <div class="tabs">
        <ul>
          <li :class="{'active':curFilmsDate === 'firstList'}" @click="chgFilmsDate('firstList')">今天10月16日</li>
          <li :class="{'active':curFilmsDate === 'secondList'}" @click="chgFilmsDate('secondList')">明天10月17日</li>
        </ul>
        <div class="active-line" :style="{'left':curFilmsDate === 'firstList' ? '0' : '27.5%' }">
          <span></span>
        </div>
      </div>
      <!-- 影片播放列表数据，动态组件控制 -->
      <component :is="curFilmsDate"/>
  </div>
</template>
<script>
import firstList from '../../components/firstList'
import secondList from '../../components/secondList'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'filmsDate',
  components:{
    firstList,
    secondList
  },
  data(){
    return{
      curFilmsDate:'firstList' //当前影片上映日期
    }
  },
  methods:{
    chgFilmsDate(date){
       this.curFilmsDate = date
    },
    fn1(){
       var swiper = new Swiper('.swiper-container', {
       slidesPerView: 3,
       spaceBetween: 30,
	     centeredSlides: true,
	     loop: true,
       pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    }
  },
   mounted () {
      this.fn1()
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/common/mixins.scss';
html,body{
  width:100%;
  height:100%;
  // display: flex;
  // overflow-x: auto;
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

      // background: pink;
      .film-pic{
        height: 135px;
        background: blue;
      }
      .film-mom{
        height:66px;
        // background: green;
        @include border-bottom;
        .movie-title{
          height:24px;
          // margin-top:5px;
          transform: translateY(10px);
          text-align: center;
          .title{
            display: inline-block;
            line-height: 24px;
            font-size:18px;
            color:#333;
            font-weight: 700;
          }
          .grade{
            display: inline-block;
            color:#ffb400;
            font-size:16px;
            margin-left:8px;
            .store{
              display: inline-block;
              color:#ffb400;
              font-size:10px;
            }
          }
        }
        .movie-desc{
          margin-top:12px;
          height:18.5px;
          line-height: 18.5px;
          font-size:14px;
          color:#999;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
        }
      }
    }
    .tabs{
      height:45px;
      // @include border-bottom;
      overflow: hidden;
      position:relative;
      ul{
        height:45px;
        display: flex;
        li{
           line-height: 45px;
           font-size:14px;
           margin-left:15px;
           color:#666;
           &.active{
             color:#f03d37;
           }
        }

      }
      .active-line{
          position:absolute;
          // left:27.5%;
          width: 32%;
          height:2px;
          bottom:0;
          height:2px;
          transition: all 0.3s;
          display: flex;
          span{
            display: flex;
            display: block;
            margin:auto;
            width:90px;
            height:2px;
            background: #f03d37;
          }
         }
       }
    }
  }
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
	    transition: 300ms;
	    transform: scale(0.8);
    }
	   .swiper-slide-active,.swiper-slide-duplicate-active{
      transform: scale(1);
	  }
</style>