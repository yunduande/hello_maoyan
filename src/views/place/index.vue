<template>
  <div class="all">
    <div class="one">
      <h1>作业还没写完就想看电影</h1>
    </div>
    <div class="two">
      <h2>你是不是飘了</h2>
    </div>
    <div class="three">
      <img
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3307220295,1913502787&fm=15&gp=0.jpg"
        alt
      />
    </div>
    <router-link to="/film/:id" class="four">
      <button>我要回去</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.all {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: green;
  .one {
    height: 50px;
    background: red;
    text-align: center;
    h1 {
      font-size: 30px;
      color: #fff;
      line-height: 50px;
      font-weight: 700;
    }
  }
  .two {
    margin-top: -2px;
    height: 30px;
    background: red;
    text-align: center;
    // position: relative;
    // bottom: 0;
    h2 {
      font-size: 24px;
      color: #fff;
      line-height: 30px;
      font-weight: 500;
    }
  }
  .three {
    flex: 1;

    // overflow-y: auto;
    height: 1000px;
    img {
      width: 100%;
    }
  }
  .four {
    flex: 1;
    text-align: center;
    display: block;
    margin-top: 150px;
    button {
      background: blue;
      font-size: 18px;
      border: none;
      line-height: 30px;
      height: 30px;
      border-radius: 5px;
      color: #fff;
    }
  }
}
</style>
