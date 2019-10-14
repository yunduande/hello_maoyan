<template>

<div>
<form>
<input type="text/css" placeholder=" 账户名/手机号" class="form1"  max-length="8"/><br>
<input type="password" placeholder="请输入你的密码" class="form2"/><br>
<input type="submit" value="登录" class="btn"/>
</form>

</div>

</template>

<script>
//按需引入

export default {
 
 
}


</script>


<style lang="scss">

 .form1{
     height:60px;
     width:100%;
     border:none;
     position:relative;
     left:4px;
 }
 .form2{
     height:60px;
     width:100%;
     border:none;
     position:relative;
     left:4px;
 }
 .btn{
     width:100%;
     height:60px;
     background:#df2d2d;
     text-align:center;

 }
</style>