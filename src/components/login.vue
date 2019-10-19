<template>
  <div>
    <form ref="form">
      <input
        type="text/css"
        placeholder=" 账户名/手机号"
        class="form1"
        minlength="6"
        maxlength="20"
        id="user"
      />

      <br />
      <input
        type="password"
        placeholder="请输入你的密码"
        class="form2"
        minlength="6"
        maxlength="15"
        id="pwd"
      />
      <!-- <span>恭喜你，密码可以使用</span> -->
      <br />

      <input type="submit" value="登录" class="btn" id="btn" @click="checkuser" />
      <span></span>
    </form>
  </div>
</template>

<script >
// 按需引入
import axios from 'axios'
export default {
  name: 'register',
  data () {
    return {
      phone: ''
    }
  },
  methods: {
    checkuser () {
      let user = document.getElementById('user')
      let btn = document.getElementById('btn')
      let uval = user.value
      let flaguser = false
      let pwd = document.getElementById('pwd')
      let pval = pwd.value
      let flagpwd = false
      let userpass = /^1(3|4|5|6|7|8|9)\d{9}$/
      btn.onclick = function () {
        checkuser()
        checkpwd()
      }

      function checkuser () {
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

      function checkpwd () {
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

<style lang="scss">
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
}
.btn {
  width: 100%;
  height: 60px;
  background: #df2d2d;
  text-align: center;
  color: #fff;
}
.text {
  color: red;
  text-align: center;
  display: none;
}
</style>
