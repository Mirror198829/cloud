<!-- 
- Author:CaoJing
- Date:2018/6/27
- github:https://github.com/Mirror198829
-->
<template>
	<div id="loginPage">
		<div id="loginTopbar" class="clearfix">
			<img class="loginCnLogo" src="../../assets/logo.png" height="24" width="103" v-if="$i18n.locale == 'cn'">
			<img class="loginEnLogo" src="../../assets/enlogo.png" height="60" width="140" v-if="$i18n.locale == 'en'">
			<span id="homeLink" @click="goHome">{{$t('message.home')}}</span>
			<div id="switchLang">
				<lang-switch></lang-switch>
			</div>
		</div>
		<div id="main">
			 <el-row class="rowBlock">
					<el-col :lg="{span:8,offset:4}" :xl="{span:7,offset:5}" class="hidden-md-and-down">
						<div class="loginLeftSide">
							<h1>{{$t('message.loginTitle')}}</h1>
							<p class="subIntroduce">{{$t('message.loginMsg1')}}</p>
							<p class="subIntroduce">{{$t('message.loginMsg2')}}</p>
							<p class="subIntroduce">{{$t('message.loginMsg3')}}</p>
						</div>
					</el-col>
					<el-col :xs="{span:22,offset:1}" :sm="{span:12,offset:6}" :md="{span:12,offset:6}" :lg="{span:8,offset:0}" :xl="{span:7,offset:0}" class="loginMainWrap">
						<login-box></login-box>
					</el-col>          
				</el-row>   
		</div>
		<footer id="loginFooter">
			<el-row>
				<el-col :md="24" :lg="24" :xl="24" class="hidden-xs-only"> 
					<ul class="clearfix">
						<li class="footerItem" v-for="item in footerItemLst">{{item}}</li>
					</ul>
				</el-col>
				<el-col :xs="24" class="hidden-sm-and-up"> 
					<ul>
						<li class="footerItemXs" v-for="item in footerItemLst">{{item}}</li>
					</ul>
				</el-col>
			</el-row>
	 </footer>
	</div>
</template>

<script>
import loginBox from '@/components/loginBox'
import langSwitch from  '@/components/langSwitch'
export default {
	name: 'login',
	components : {
		loginBox,
		langSwitch
	},
	data () {
		return {
			footerItemLst:['关于我们','法律声明与隐私权政策','廉政举报','联系我们']
		}
	},
	methods:{
		goHome(){
			this.$router.push('HomePage')
		}
	},
	mounted(){},
	created(){}
}
</script>

<style scoped lang="less">
@import '../../less/index.less';
@topBarHeight:60px;
#loginTopbar{height: @topBarHeight;background-color:@base-color;position: relative;box-sizing: border-box;}
.loginCnLogo{position: absolute;left:20px;top:15px;}
.loginEnLogo{position: absolute;left:20px;}
#homeLink{color:@font-white;position: relative;float:right;top:0;cursor: pointer;padding:0 20px;height:@topBarHeight;line-height:@topBarHeight;}
#switchLang{float:right;position:relative;top:0px;height:@topBarHeight;line-height:@topBarHeight;}
#loginFooter{height:80px;background-color: @base-color;}
#main{height:calc(100vh - 140px);position: relative;background-image: url('../../assets/login/bg.jpg');display: table;width:100%;background-size: 100% 100%;background-color:#1e2225}
.footerItem{color:#9b9ea0;float:left;padding:0 17px;font-size:16px;position: relative;top:30px;}
.footerItemXs{color:#9b9ea0;font-size:12px;padding:2px 15px;}
.loginMainWrap{padding:40px;padding-left: 20px !important;padding-right: 20px !important;box-sizing: border-box;}
.subIntroduce{color:@font-white;line-height: 2;}
.loginLeftSide{
	margin-top:100px;
	h1{
		color:@font-white;margin-bottom:15px;	
	}
}
</style>
<style>
#main .rowBlock.el-row{display: table-cell;vertical-align:middle;}
</style>
