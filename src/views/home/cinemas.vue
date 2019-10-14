<template>
  <div class="page-city-cinemas">
   <!-- 二级路由页面，影院列表页 -->
   <!-- 影院头部 -->
   <div class="cinemas-header">
   <h1 class="nav-header">影院</h1>
   </div>
   <!-- 影院地区，搜索 -->
   <div class="cinemas-serch">
     <div class="city-enty">
       <span class="city-name">深圳</span>
       <i class="iconfont iconxiajiantou_huaban"></i>
     </div>
     <div class="place-serch">
       <!-- <input type="text" placeholder="搜索影院关键词" v-model="serchVal"> -->
       <van-search placeholder="搜索影院关键词" v-model="serchVal" />
     </div>
   </div>
   <!-- 下拉列表 -->
   <div class="cinemas-list">
       <!-- <div class="item">
         <span>全城</span>
         <i class="iconfont">
           <van-dropdown-menu>
           <van-dropdown-item v-model="value1" :options="option1" />
           </van-dropdown-menu>
         </i>
       </div>
       <div class="item">
         <span>品牌</span>
         <i class="iconfont">
           <van-dropdown-menu>
           <van-dropdown-item v-model="value2" :options="option2" />
           </van-dropdown-menu>
         </i>
       </div>
       <div class="item">
         <span>特色</span>
         <i class="iconfont">
           <van-dropdown-menu>
           <van-dropdown-item v-model="value3" :options="option3" />
           </van-dropdown-menu>
         </i>
       </div> -->
       <van-dropdown-menu>
       <van-dropdown-item v-model="value1" :options="option1" />
       <van-dropdown-item v-model="value2" :options="option2" />
       <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
   </div>
  </div>
</template>
<script>
export default {
  name:'Cinemes',
  data(){
       return{
         serchVal:''
       }
     },
  data(){
     return{
          value1: 0,
          value2: 'a',
          value3: 'A',
          option1: [
            { text: '全城', value: 0 },
            { text: '新款商品', value: 1 },
            { text: '活动商品', value: 2 },
          ],
          option2: [
            { text: '品牌', value: 'a' },
            { text: '好评排序', value: 'b' },
            { text: '销量排序', value: 'c' },
          ],
          option3: [
            { text: '特色', value: 'A' },
            { text: '好评排序', value: 'B' },
            { text: '销量排序', value: 'C' },
          ],

        }
  }

}
</script>
<style lang="scss" scoped>
.cinemas-header{
  height:52px;
  background:#e54847;
  border-bottom:1px solid #e54847;
}
.nav-header{
  font-size:18px;
  line-height:50px;
  text-align: center;
  color:#fff;
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
.cinemas-list{
  height:40px;
  display: flex;
  .van-dropdown-menu{
    display:flex;
    justify-content: space-around;
    .van-dropdown-menu__item{
      flex:1;
    }
  }
}
</style>
