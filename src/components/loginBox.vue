<!-- 
- Author:CaoJing
- Date:2018/6/27
- github:https://github.com/Mirror198829
-->
<template>
  <div class="loginMain">
      <div class="loginCircle">               
        <i class="fa fa-mobile loginIcon"></i>
      </div>
      <span class="errorMsg">{{errorMsg}}</span>
      <el-form ref="loginForm" :model="loginForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="loginBtn" type="primary" style="width:100%" @click="verifyLogin" :loading="isLoading">{{$t('message.loginBtn')}}</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  name: 'loginBox',
  data () {
    return {
      isLoading:false,
      errorMsg:'',
      loginForm:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    verifyLogin(){
        this.errorMsg = ''
        if(this.loginForm.username == '' && this.loginForm.password == ''){
          this.errorMsg = '用户名和密码不得为空'
        }else if(this.loginForm.username == ''){
          this.errorMsg = '用户名不得为空'
        }else if(this.loginForm.password == ''){
          this.errorMsg = '密码不得为空'
        }else{
          this.login()
        }
     },
    login(){
        let name = this.loginForm.username
        let password = this.loginForm.password
        this.isLoading = true
        this.$http.get('http://yapi.demo.qunar.com/mock/12097/login',{
        params:{
            name,
            password
        }}).then(res => {
            let username = res.data.name
            sessionStorage.setItem("username",username)
            this.$router.push('HomePage')  
            this.isLoading = false
        }).catch(error => {
            this.isLoading = false
        })
      }
  },
  mounted(){},
  created(){}
}
</script>

<style scoped lang="less">
@import '../less/index.less';
.loginMain{position:relative;box-sizing: border-box;background-color: #fff;padding:90px 20px 50px;border-radius: 2px;}
.loginCircle{width:80px;height:80px;background-color:@theme-color;border-radius: 100%;position: absolute;left:50%;top:0;transform: translate(-50%,-50%);text-align: center;}
.loginIcon{color:#fff;font-size:70px;position: relative;top:4px;}
.errorMsg{color:red;position: absolute;top:70px;font-size:13px;}
.loginBtn{background-color:@theme-color;border-color:@theme-color;margin-top:20px;}
</style>
