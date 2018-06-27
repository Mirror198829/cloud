<!-- 
- Author:CaoJing
- Date:2018/6/26
- github:https://github.com/Mirror198829
-->
<template>
  <div class="loginMain">
      <div class="loginCircle">               
        <i class="fa fa-mobile loginIcon"></i>
      </div>
      <el-form ref="loginForm" :model="loginForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="login">立即登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  name: 'loginBox',
  data () {
    return {
      loginForm:{
        username:'',
        password:''
      }
    }
  },
  methods:{
   login(){
      let name = this.loginForm.username
      let password = this.loginForm.password
      this.$http.get('http://yapi.demo.qunar.com/mock/12097/login',{
        params:{
          name,
          password
      }}).then(res => {
          console.log(res)      
      }).catch(error => {})
    }
  },
  mounted(){},
  created(){}
}
</script>

<style scoped>
.loginMain{position:relative;box-sizing: border-box;background-color: #fff;padding:70px 20px;border-radius: 4px;}
.loginCircle{width:80px;height:80px;background-color:#409EFF;border-radius: 100%;position: absolute;left:50%;top:0;transform: translate(-50%,-50%);text-align: center;}
.loginIcon{color:#fff;font-size:70px;position: relative;top:4px;}
</style>
