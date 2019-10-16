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
      phone: '',
      pwd: ''
    }
  },
  methods: {
    checkuser() {
      let user = document.getElementById('user')
      let btn = document.getElementById('btn')
      let phone = this.phone
      let uval = user.value
      let flaguser = false
      let pwd = document.getElementById('pwd')
      let pval = pwd.value
      let flagpwd = false
      let userpass = /^1(3|4|5|6|7|8|9)\d{9}$/
      btn.onclick = function() {
        checkphone()
        checkpwd()
      }

      function checkphone() {
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
        }
        // if (result[0].phone === phone) {
        //   alert('注册重名。请重新注册')
        // }
        else {
          flaguser = true
          return true
          // //发送get请求
          axios
            .get('http://localhost:3000/posts', {
              params: {
                phone: this.phone
              }
            })
            .then(response => {
              //  console.log(response)
              let result = response.data
              console.log(result)
              // if (result && this.phone === result[0].phone) {
              //   alert('该用户已经注册，请重新注册')
              //   return
              // }
            })
          axios({
            method: 'post',
            url: 'http://localhost:3000/posts',
            data: {
              phone: this.phone,
              pwd: this.pwd
            }
          })
        }
      }

      // Send a POST request

      function checkpwd() {
        let pwdpass = /^\d{5,10}$/
        let pval = pwd.value
        //密码验证
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
        if (flagpwd == true && flaguser == true) {
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
