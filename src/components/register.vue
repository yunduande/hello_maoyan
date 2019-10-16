<template>
  <div id="app">
    <form>
      <input
        type="text/css"
        placeholder=" 账户名/手机号"
        class="form1"
        minlength="6"
        maxlength="20"
        id="user"
        v-model="phone"
      />
      <br />
      <input
        type="password"
        placeholder="请输入你的密码"
        class="form2"
        minlength="6"
        maxlength="20"
        id="pwd"
        @blur="checkpwd"
        v-model="pwd"
      />
      <br />
      <input
        type="submit"
        value="注册"
        class="btn"
        id="btn"
        minlength="3"
        maxlength="15"
        @click="checkuser"
      />
    </form>
    <!-- <p>密码不能为空</p> -->
  </div>
</template>


<script>
import axios from 'axios'
import { setFlagsFromString } from 'v8'
export default {
  name: 'register',
  data() {
    return {
      phone: '',
      pwd: ''
    }
  },
  methods: {
    checkuser() {
      let user = document.getElementById('user')
      let btn = document.getElementById('btn')
      let uval = user.value
      let flaguser = false
      btn.onclick = function() {
        fnCheckuser()
      }
      function fnCheckuser() {
        let userpass = /^1(3|4|5|6|7|8|9)\d{9}$/

        if (uval === '') {
          alert('用户名不能为空')
          return false
          flaguser = false
        }

        if (uval !== '' && userpass.test(uval) == false) {
          flaguser = false
          alert('手机号码不符合规范，再试一下吧')
          return false
        } else {
          //   alert($text1.text())
          flaguser = true
          return true
        }
      }
      axios
        .get('http://localhost:3000/posts', {
          params: {
            phone: this.phone
          }
        })
        .then(response => {
          // console.log(response)
          let result = response.data
          console.log(result)
          if (result[0].phone === this.phone) {
            alert('该用户名已经注册了')
          }
        })
    }
  },

  checkpwd() {
    let pwd = document.getElementById('pwd')
    let pval = pwd.value
    let flagpwd = false
    pwd.onblur = function() {
      fnCheckpwd()
    }
    function fnCheckpwd() {
      let pwdpass = /^\w{10}$/
      if (pval === '') {
        flagpwd = false
        alert('密码不能为空')
        return false
      }
      if (pwdpass.test(pval)) {
        return true
      } else {
        alert('用户名密码不规范')
      }
    }
  }
}
</script>
<style  lang="scss">
.form1 {
  height: 60px;
  border: none;
  box-sizing: border-box;
  padding-left: 10px;
}
.form2 {
  height: 60px;
  width: 100%;
  border: none;
  box-sizing: border-box;
  padding-left: 12px;

  //   padding-left: 10px;
  /* position:relative;
     left:4px; */
}
.btn {
  width: 100%;
  height: 60px;
  background: #df2d2d;
  text-align: center;
  border-radius: 5px;
}
</style>
