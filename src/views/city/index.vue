<template>
  <div class="page-city">
    <!-- 一级路由页面，城市选择页 -->
    <van-nav-bar title="城市选择">
      <template v-slot:left>
        <i class="iconfont iconshanchu" @click="goBack"></i>
      </template>
    </van-nav-bar>
    <van-search placeholder="请输入搜索关键词" v-model="searchVal" />

    <div class="box">
      <div class="left">
        <div style="height:200px;background:#f5f5f5"></div>
        <div class="city-title-letter" v-for="item in cityList" :key="item.py">
          <p>{{ item.py }}</p>
          <ul>
            <li v-for="city in item.list" :key="city.cityId">{{ city.name }}</li>
          </ul>
        </div>
      </div>
      <div class="right">
        <ul>
          <li v-for="item in pys" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'City',
  data() {
    return {
      searchVal: ''
    }
  },

  computed: {
    ...mapGetters('city', ['cityList', 'pys'])
  },

  methods: {
    ...mapActions('city', ['getCities']),
    goBack() {
      this.$router.back()
    }
  },
  created() {
    this.getCities()
  }
}
</script>


<style lang='scss'>
.page-city {
  display: flex;
  flex-direction: column;
  height: 100%;
  .van-nav-bar__title {
    color: #000;
  }
  .box {
    display: flex;
    flex: 1;
    overflow: hidden;
    .right {
      width: 35px;
      background: #ebebeb;
      font-size: 12px;
      color: #333;
      display: flex;
      align-items: center;

      li {
        height: 20px;
        line-height: 20px;
        text-align: center;
      }
    }
    .left {
      flex: 1;
      overflow-y: auto;
    }
  }
  .city-title-letter {
    p {
      height: 30px;
      line-height: 30px;
      color: #333;
      background: #ebebeb;
      padding: 0 0 0 25px;
    }
    ul {
      margin-left: 15px;
    }
    li {
      height: 45px;
      line-height: 45px;
      border-bottom: 1px solid #ccc;
      font-size: 14px;
    }
  }
}
</style>