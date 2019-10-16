<template>
  <!-- 影院列表 -->
      <div class="page-cinemas-list">
        <div class="list-detail">
            <div class="cinemas-detail">
                 <div class="box-middle">
                    <div class="cinemas-title">
                      <span>凤凰国际影城</span>
                      <span class="price-block">
                         <span class="price">38</span>
                         <span class="q">元起</span>
                      </span>
                    </div>
                    <div class="cinemas-location">
                      <div class="location">
                        宝安区西乡街道宝安大道5010号西部硅谷（后瑞地铁站旁）B坐1楼
                      </div>
                      <div class="distance">1.1km</div>
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
            </div>
        </div>
      </div>
</template>
<script>
export default {
  name:'cinemasList'
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/common/mixins.scss';
 .page-cinemas-list{
        width:100%;
        flex:1;
        overflow-y:auto;

        .list-detail{
        width:97%;
        .cinemas-detail{
          max-height:98px;
          min-height:124px;
          // background:pink;
          margin-left:10px;
          @include border-cinemas;
          .box-middle{
            width:328px;
            max-height:69px;
            display: flex;
            justify-content: center;
            margin:0px 12px 8px;
            transform: translateY(13px);
            // background: blue;
            display: block;
            .cinemas-title{
              height:23px;
              line-height: 23px;
              font-size:16px;
              color:#000;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
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
              margin-top:5px;
              font-size:13px;
              color:#666;
              width: 328px;
              display: flex;
              .location{
                width: 285px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .distance{
                margin-left: 5px;
              }
            }
            .cinemas-lable{
              height:17px;
              line-height: 17px;
              margin-top:5px;
              margin-bottom: 2px;
              overflow: hidden;
              .allowRefund{
                color:#589daf;
                border:1px solid #589daf;
                border-radius: 2px;
                display: inline-block;
                padding:0 2px;
                height:14px;
                font-size: 11px;
              }
              .write{
                color:#589daf;
                border:1px solid #589daf;
                border-radius: 2px;
                display: inline-block;
                padding:0 2px;
                height:14px;
                font-size: 11px;
                margin-left:5px;
              }
              .snack{
                color: #f90;
                border:1px solid #f90;
                border-radius: 2px;
                display: inline-block;
                padding:0 2px;
                height:14px;
                font-size: 11px;
                margin-left:5px;
              }
              .hallType{
                color:#589daf;
                border:1px solid #589daf;
                border-radius: 2px;
                display: inline-block;
                padding:0 2px;
                height:14px;
                font-size: 11px;
                margin-left:5px;
              }
            }
          }
        }
       }
      }
</style>

