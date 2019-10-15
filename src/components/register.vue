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
      let pwd = document.getElementById('pwd')
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
    }
  },
  //     let $user = $('#user')
  //     let $btn = $('#btn')
  //     let $text1 = $('#text1')
  //     let $text2 = $('#text2')
  //     let flaguser = false
  //     //   let text1=$text1.text();
  //     $btn.click(function() {
  //       fnCheckuser()
  //     })
  //     function fnCheckuser() {
  //       let uval = $user.val()
  //       let userpass = /^1(3|4|5|6|7|8|9)\d{9}$/
  //       if (uval == '') {
  //         alert('用户名不能为空')
  //         return false
  //         flaguser = false
  //       }
  //       if (uval !== '' && userpass.test(uval) == false) {
  //         flaguser = false
  //         alert('手机号码不符合规范，再试一下吧')
  //         return false
  //       } else {
  //         //   alert($text1.text())
  //         flaguser = true
  //         return true
  //       }
  //     }
  //   }
  // },

  created() {
    axios
      .get('http://localhost:3000/todos', {
        params: {
          phone: this.phone
        }
      })
      .then(response => {
        // console.log(response)
        let result = response.data
        console.log(result)
        //   this.List = result
      })
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
