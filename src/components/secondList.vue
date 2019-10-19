<template>
<div claas="listHead">
  <!-- 明日日期 -->
  <div class="seat-wrap">
    <div class="discount-block">
      <a>
        <div class="lable">折扣</div>
        <div class="lable-title">开卡享优惠</div>
        <div class="process">9.9元起开卡</div>
      </a>
    </div>
    <ul class="film-item">
        <li >
          <div class="item-time">
            <div class="film-start">10:20</div>
            <div class="film-end">12:11散场</div>
          </div>
          <div class="item-location">
            <div class="type">国语</div>
            <div class="location">5号厅</div>
          </div>
          <div class="item-price">
            <div class="price">
              <span class="d">￥</span>
              <span class="sellPr">36.9</span>
            </div>
            <div class="discount">
              <span class="icon">折扣卡</span>
              <span class="num">
                 ￥33.9
              </span>
            </div>
          </div>
          <div class="item-button">购票</div>
        </li>
    </ul>
  </div>
  <div class="gap" style="height:10px;background-color:#f0f0f0;"></div>
  <div class="tuan-wrap">
    <div class="tuan-title">影院超值套餐</div>
    <ul class="tuan-item">
      <li>
        <div class="item-left">
          <img src="//p1.meituan.net/440.0/deal/9c11adf56ce2ab4d2d08f6aa9772135228573.jpg@90_0_279_279a%7C267h_267w_2e_90Q" alt="">
        </div>
        <div class="item-right">
          <div class="item-title">
            <span class="num">双人</span>
            <span class="title">16oz可乐2杯+46oz爆米花1桶</span>
          </div>
          <div class="item-middle">已售330</div>
          <div class="item-bottom">
            <span class="sell-price">
              <span>￥</span>
              <span class="num">24.5</span>
            </span>
            <div class="buy-botton">
              去购买
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name:'firstList',
  methods:{
    ...mapActions('date',['getfilmsDateList'])
  },
  computed:{
    ...mapState('date',['filmsDateList'])
  },
  created(){
    this.getfilmsDateList()
    // this.fn1()
  }
}
</script>
<style lang="scss">
@import '../assets/styles/common/mixins.scss';
.discount-block{
  height:42px;
  width: 100%;
  display: flex;
  background-color:#fff5ea;
  >a{
    display: inline-block;
    width: 345px;
    display: flex;
    margin-left: 30px;
    .lable{
      font-size:10px;
      height:15px;
      line-height: 15px;
      width:34px;
      margin-right:10px;
      margin-top: 13px;
      border-radius: 2px;
      text-align: center;
      background-color: #ff941a;
      color:#fff;
    }
    .lable-title{
      font-size:11px;
      color:#fa9600;
      flex:1 1 auto;
      line-height: 42px;
    }
    .process{
      flex:0 0 auto;
      line-height: 42px;
      color:#999;
      font-size:12px;
      margin-right:25px;
    }
  }
}
.film-item{
  margin-left:15px;
  // background:red;
  li{
    display: flex;
    padding:17px 0;
    width:95%;
    // background:coral;
    @include border-cinemas;
    .item-time{
      font-size:14px;
      color:#777;
      .film-start{
        font-size:20px;
        color:#333;
        white-space:nowrap;
      }
      .film-end{
        margin-top:10px;
        color:#999;
        font-size:11px;
        white-space: nowrap;
      }
    }
    .item-location{
      margin-left:17px;
      flex:1;
      overflow: hidden;
      .type{
        margin-top:2px;
        line-height: 18px;
        font-size:13px;
        color:#333;
        white-space:normal;
      }
      .location{
       margin-top:7px;
       font-size:11px;
       color:#999;
       white-space:normal;
      }
    }
    .item-price{
      flex: 0 1 auto;
      width:130px;
      margin-left:2px;
      // margin-left:20px;
      .price{
        display: inline-block;
        color:#f03d37;
        font-size:19px;
        .d{
          font-size:11px;
        }
        .sellPr{
          font-size:19px;
          color:#f03d37;
        }
      }
      .discount{
        display: inline-block;
        line-height: 15px;
        height:15px;
        margin-right:-16px;
        border:1px solid #ff9000;
        border-radius: 2px;
        font-size:12px;
        margin-left:5px;
        .icon{
          display: inline-block;
          padding:0 2px;
          color:#fff;
          background-color:#f90;
        }
        .num{
           display: inline-block;
           padding:0 2px;
           color:#f90;
           background-color:#fff;
        }
      }
    }
    .item-button{
      width:45px;
      margin-left:15px;
      height:27px;
      line-height: 27px;
      font-size:12px;
      background-color:#f03d37;
      color:#fff;
      border:1px solid #f03d37;
      border-radius: 4px;
      text-align: center;
    }
  }
}
.tuan-title{
  line-height: 45px;
  height:45px;
  font-size:15px;
  color:#666;
  margin-left:15px;
  @include border-cinemas;
}
.tuan-item{
  // display: flex;
  margin-top:15px;
  li{
    width:95%;
    display: flex;
    margin-top:15px;
    padding-bottom:15px;
    // background:coral;
    @include border-cinemas;
   .item-left{
    margin-left:15px;
    width:92px;
    img{
      display:inline-block;
      width:92px;
      height:92px;
    }
   }
  .item-right{
    margin-left:10px;
    position: relative;
    .item-title{
      .num{
        display: inline-block;
        vertical-align: top;
        margin-right:5px;
        padding:0 4px;
        margin-top:1px;
        font-size:10px;
        line-height: 15px;
        height:15px;
        background:#f90;
        border-radius: 2px;
        color:#fff;
      }
      .title{
        margin-left:10px;
        font-size:14px;
        line-height: 18px;
        color:#333;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .item-middle{
      display: inline-block;
      position:absolute;
      top:37px;
      right:8px;
      line-height: 16px;
      height:16px;
      font-size:12px;
      color:#999;
    }
    .item-bottom{
      .sell-price{
        display: inline-block;
        color:#f03d37;
        font-size:18px;
        margin-top:48px;
      }
      .buy-botton{
        margin-top:-20px;
        margin-left:175px;
        padding:0 8px;
        font-size:12px;
        line-height: 27px;
        width:40px;
        border-radius: 3px;
        color:#fff;
        background-color:#f03d37;
      }
    }
   }
  }
}
</style>