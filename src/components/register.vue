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
      <!-- <span></span> -->
      <br />
      <input
        type="password"
        placeholder="请输入你的密码"
        class="form2"
        minlength="6"
        maxlength="20"
        id="pwd"
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
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'register',
  data() {
    return {
      phone: ''
    }
  },
  methods: {
    checkuser() {
      let user = document.getElementById('user')
      let btn = document.getElementById('btn')
      let uval = user.value
      let flaguser = false
      let password = document.getElementById('pwd')
      let pval = password.value
      let flagpwd = false
      let userpass = /^1(3|4|5|6|7|8|9)\d{9}$/
      btn.onclick = function() {
        checkuser()
        checkpwd()
      }

      function checkuser() {
        let userpass = /^1(3|4|5|6|7|8|9)\d{9}$/
        if (uval === '') {
          alert('用户名不能为空')
          flaguser = false
          return false
        }
        if (uval !== '' && userpass.test(uval) == false) {
          flaguser = false
          alert('手机号码不规范，再试一下吧')
          return false
        } else {
          flaguser = true
          return true
        }
      }

      function checkpwd() {
        let pwdpass = /^\d{5,10}$/
        // 密码验证
        if ((pval === '' && uval !== '') || pval === '') {
          flagpwd = false
          alert('密码不能为空')
          return false
        }
        if (pwdpass.test(pval) == true) {
          return true
          flagpwd = true
        }
        if (
          (pwdpass.test(pval) !== true && pval !== '') ||
          (pwdpass.test(pval) !== true && uval == '')
        ) {
          flagpwd = false
          alert('密码不符合规范')
          return false
        }
        if (flaguser == true && flagpwd == true) {
          return true
        }
      }
    }
  }
}
</script>
<style  lang="scss">
.form1 {
  height: 60px;
  border: none;
  width: 100%;
  box-sizing: border-box;
  padding-left: 10px;
}
.form2 {
  height: 60px;
  width: 100%;
  border: none;
  box-sizing: border-box;
  padding-left: 12px;
}
.btn {
  width: 100%;
  height: 60px;
  background: #df2d2d;
  text-align: center;
  border-radius: 5px;
}
</style>
