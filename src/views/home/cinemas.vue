<template>
  <div class="page-city-cinemas">
   <!-- 二级路由页面，影院列表页 -->
   <!-- 影院头部 -->
    <div class="cinemas-header">
      <h1 class="nav-header">影院</h1>
    </div>
    <!-- 影院地区，搜索 -->
    <div class="cinemas-serch">
     <div class="city-enty" >
       <span class="city-name">
         <router-link to="../city">深圳</router-link>
       </span>
       <i class="iconfont iconxiajiantou_huaban"></i>
     </div>
     <div class="place-serch">
       <!-- <input type="text" placeholder="搜索影院关键词" v-model="serchVal"> -->
       <router-link to="/search"><van-search placeholder="搜索影院关键词" v-model="serchVal" /></router-link>
     </div>
    </div>
    <!-- 下拉列表和影院列表 -->
    <div class="page-wrap">
      <div class="cinemas-list">
          <div class="item">
            <i>
              <van-dropdown-menu active-color="red">
              <van-dropdown-item v-model="value1" :options="option1" />
              </van-dropdown-menu>
            </i>
          </div>
          <div class="item">
            <i>
              <van-dropdown-menu>
              <van-dropdown-item v-model="value2" :options="option2" />
              </van-dropdown-menu>
            </i>
          </div>
          <div class="item">
            <i>
              <van-dropdown-menu>
              <van-dropdown-item v-model="value3" :options="option3" />
              </van-dropdown-menu>
            </i>
          </div>
          <div class="list-right" ></div>
      </div>
      <!-- 影院列表数据，获取动态数据 -->
      <!-- <component is = "cinemasList" /> -->
      <div class="page-cinemas-list" style="overflow-x:hidden">
        <div class="list-detail" >
            <div class="cinemas-detail" v-for="item in cinemasList" :key="item.id">
              <router-link :to="`/cinemasDetail/${item.id}`">
                 <div class="box-middle">
                    <div class="cinemas-title">
                      <span>{{item.nm}}</span>
                      <span class="price-block">
                         <span class="price">{{item.sellPrice}}</span>
                         <span class="q">元起</span>
                      </span>
                    </div>
                    <div class="cinemas-location">
                      <div class="location">
                        {{item.addr}}
                      </div>
                      <div class="distance">{{item.distance}}</div>
                    </div>
                    <div class="flex"></div>
                    <div class="cinemas-lable">
                      <div class="allowRefund">退</div>
                      <div class="write">改签</div>
                      <div class="snack">小吃</div>
                      <div class="hallType">杜比全景声厅</div>
                      <div class="discount">
                        <div class="cinemas-card">
                          <img src="" >
                        </div>
                      </div>
                    </div>
                 </div>
              </router-link>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import cinemasList from '../../components/cinemasList.vue'
// import { mapActions } from 'vuex'
import axios from 'axios'
export default {
  name: 'Cinemes',
  // components:{
  //   cinemasList
  // },
  data () {
    return {
      cinemasList:[],
      locationList:[],
      id:111,
      serchVal: '',
      value1: 0,
      value2: 'a',
      value3: 'A',
      option1: [
        { text: '全城', value: 0 },
      ],
      option2: [
        { text: '品牌', value: 'a' },
      ],
      option3: [
        { text: '特色', value: 'A' },
        // { text: '全部', value: 'C' },
        // { text: '小吃', value: 'B' },
        // { text: '可改签', value: 'D' },
        // { text: '退票', value: 'E' },
      ]
    }
   },
   created () {
     let _this=this
    //  console.log(this.$route)
     axios.get("/maoyan/ajax/cinemaList?",{
       params: {
        // day: 2019-10-16,
        // offset: 0,
        // limit: 20,
        // districtId: -1,
        // lineId: -1,
        // hallType: -1,//影院配置
        // brandId: -1,
        // serviceId: -1,
        // areaId: -1,
        // stationId: -1,
        // item:'',
        // updateShowDay: true,
        // reqId: 1571191114871,
        // cityId: 30//城市ID
        day: 2019-10-18,
        offset: 0,
        limit: 20,
        districtId: 23420,
        lineId: -1,
        hallType: -1,
        brandId: -1,
        serviceId: -1,
        areaId: -1,
        stationId: -1,
        item: '',
        updateShowDay: false,
        reqId: 1571388626611,
        cityId: 30
      }
     }).then(response =>{
      _this.cinemasList= response.data.cinemas
      // console.log(_this.cinemasList)
     })
     axios.get("/maoyan/ajax/filterCinemas?",{
       params:{
         ci:30
      }
    }).then(response =>{
      _this.locationList = response.data
      //数据处理
      //地区
      console.log(_this.locationList)
      let arr = _this.locationList.district.subItems
      //品牌
      let brr = _this.locationList.brand.subItems
      //服务
      let crr = _this.locationList.hallType.subItems
      //地区一层层剥开
      let a=[]
      let b=[]
      let c=[]
      arr.forEach(element => {
        a.push(element.name)
      });
      a.forEach(element => {
         b.push({text:element,value:String(element)})
      });
      //复制元素从第二项开始
      c= b.slice(1);
      c.forEach(element => {
       _this.option1.push(element)
      });
      //品牌一层层剥开
      let aa = []
      let ab = []
      let ac = []
      brr.forEach(element =>{
        aa.push(element.name)
      });
      aa.forEach(element => {
         ab.push({text:element,value:String(element)})
      });
      ac= ab.slice(1);
      ac.forEach(element => {
       _this.option2.push(element)
      });
      //特色一层层剥开
      let ba = []
      let bb = []
      let bc = []
      crr.forEach(element =>{
        ba.push(element.name)
      });
      ba.forEach(element => {
         bb.push({text:element,value:String(element)})
      });
      bc= bb.slice(1);
      bc.forEach(element => {
       _this.option3.push(element)
      });
    })
   }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/common/mixins.scss';
.page-city-cinemas{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
    .cinemas-header{
      height:52px;
      background:#e54847;
      border-bottom:1px solid #e54847;
      .nav-header{
      font-size:18px;
      line-height:50px;
      text-align: center;
      color:#fff;
      }
    }
    .cinemas-serch{
      height:44px;
      background:#fff;
      border-bottom: 1px solid #e6e6e6;
      display:flex;
      .city-enty{
        width:80px;
        display:flex;
        .city-name{
          //  white-space: nowrap;
          //  overflow: hidden;
          //  text-overflow: ellipsis;
          padding-left:17px;
          font-size:15px;
          line-height: 44px;
          color:#666;
        }
        i{
          padding-left:3px;
          font-size:10px;
          line-height: 44px;
          color:#777;
        }
      }
      .place-serch{
        flex:1;
        justify-content: center;
        height:28px;
        line-height: 44px;
        background:#777;
        .van-search{
          padding:5px 0px;
          .van-cell{
            padding:5px 15px 5px 8px;
          }
        }
      }
    }
    .page-wrap{
      display: flex;
      flex-direction: column;
      width:100%;
      // overflow:auto;
      // position:absolute;
      flex:1;
      overflow: hidden;
      .cinemas-list{
        height:40px;
        width:375px;
        display: flex;
        .item{
          flex:1;
          line-height: 40px;
          @include border-cinemas;
          .van-dropdown-menu{
            height:40px;
          }
        .list-right{
          height:40px;
          width:17px;
          visibility: hidden;
          // background:pink;
        }
       }
      }
      .page-cinemas-list{
        width:100%;
        flex:1;
        overflow-y:auto;
        .list-detail{
         width:97%;
        .cinemas-detail{
          height:124px;
          // background:pink;
          margin-left:10px;
          @include border-cinemas;
          .box-middle{
            width:328px;
            height:94px;
            display: flex;
            justify-content: center;
            margin:0px 12px 8px;
            transform: translateY(13px);
            // background: blue;
            display: block;
            .cinemas-title{
              height:25px;
              display: inline-block;
              line-height: 25px;
              font-size:17px;
              color:#000;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              >span{
                display: inline-block;
                width:190px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .price-block{
                 padding-left:9px;
                 padding-top:3px;
                 .price{
                   font-size:18px;
                   color:#f03d37;
                 }
                 .q{
                   margin-left:3px;
                   font-size:11px;
                   color:#f03d37;
                 }
              }
            }
            .cinemas-location{
              margin-top:7px;
              font-size:14px;
              color:#666;
              width: 328px;
              display: flex;
              .location{
                width: 275px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .distance{
                margin-left: 5px;
              }
            }
            .cinemas-lable{
              height:25px;
              margin-top:8px;
              margin-bottom: 2px;
              overflow: hidden;
              .allowRefund{
                color:#589daf;
                border:1px solid #589daf;
                border-radius: 2px;
                display: inline-block;
                padding:0 3px;
                height:16px;
                font-size: 12px;
                line-height: 16px;
              }
              .write{
                color:#589daf;
                border:1px solid #589daf;
                border-radius: 2px;
                display: inline-block;
                padding:0 3px;
                height:16px;
                font-size: 12px;
                line-height: 16px;
                margin-left:5px;
              }
              .snack{
                color: #f90;
                border:1px solid #f90;
                border-radius: 2px;
                display: inline-block;
                padding:0 3px;
                height:16px;
                font-size: 12px;
                line-height: 16px;
                margin-left:5px;
              }
              .hallType{
                color:#589daf;
                border:1px solid #589daf;
                border-radius: 2px;
                display: inline-block;
                padding:0 3px;
                height:16px;
                font-size: 12px;
                line-height: 16px;
                margin-left:5px;
              }
            }
          }
        }
       }
      }
   }
}
</style>
