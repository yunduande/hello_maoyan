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
      <!-- <span id="text1" style="display：none">恭喜你，手机号码可以使用</span> -->

      <br />
      <input
        type="password"
        placeholder="请输入你的密码"
        class="form2"
        minlength="6"
        maxlength="11"
        id="pwd"
        @blur="checkpwd"
      />
      <!-- <span>恭喜你，密码可以使用</span> -->
      <br />

      <input
        type="submit"
        value="登录"
        class="btn"
        id="btn"
        minlength="3"
        maxlength="15"
        @click="checkuser"
        @keydown="commit"
      />
      <span></span>
    </form>
    <p id="text1" class="text">手机号码可以使用</p>
    <!-- <p id="text2" class="text">手机号码可以使用</p> -->
  </div>
</template>

<script >
// 按需引入
import axios from 'axios'
import { setFlagsFromString } from 'v8'
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
    },

    checkpwd() {
      let pwd = document.getElementById('pwd')
      let pval = pwd.value
      let flagpwd = false
      pwd.onclick = function() {
        fnCheckpwd()
      }
      function fnCheckpwd() {
        let pwdpass = /^\w{10}$/
        if (pval === '') {
          flagpwd = false
          alert('密码不能为空')
          return false
          flagpwd = false
        }
        if (pwdpass.test(pval)) {
          return true
          flagpwd = true
        } else {
          flagpwd = false
          alert('用户名密码不规范')
        }
      }
    },

    commit() {
      if (flaguser == true && flagpwd == true) {
        return true
      } else {
        return false
      }
    }
  }
}

//   //密码验证

//   checkpwd() {
//     let $btn = $('#btn')
//     let $pwd = $('#pwd')
//     let flagpwd = true
//     $btn.blur(function() {
//       fncheckpwd()
//       // $text1.addClass('text')
//     })
//   function fncheckpwd() {
//     let pwd = $pwd.val()
//     let pwdpass = /^\d{10}$/
//     if (pwd == '') {
//       return false
//       alert('密码不能为空')
//     }
//   }
//   }
//     }
// }
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