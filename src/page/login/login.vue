<!-- 
- Author:CaoJing
- Date:2018/6/27
- github:https://github.com/Mirror198829
-->
<template>
	<div id="loginPage">
		<div id="loginTopbar">
			<img id="loginLogo" src="../../assets/logo.png" height="24" width="103">
			<span id="homeLink">首页</span>
		</div>
		<div id="main">
			 <el-row class="rowBlock">
					<el-col :lg="{span:8,offset:4}" :xl="{span:7,offset:5}" class="hidden-md-and-down">
						<div class="loginLeftSide">
							<h1>数字化转型专家</h1>
							<p class="subIntroduce">融合AI突破性技术，解决社会和商业棘手问题</p>
							<p class="subIntroduce">提供ET大脑帮助您在复杂局面下，做出最大决策</p>
							<p class="subIntroduce">现已广泛应用于工业、城市、医疗、交通等多个行业</p>
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
export default {
	name: 'login',
	components : {
		loginBox
	},
	data () {
		return {
			footerItemLst:['关于我们','法律声明与隐私权政策','廉政举报','联系我们']
		}
	},
	methods:{},
	mounted(){},
	created(){}
}
</script>

<style scoped>
#loginTopbar{height: 60px;background-color:#373d41;position: relative;box-sizing: border-box;}
#loginLogo{position: absolute;left:20px;top:15px;}
#homeLink{color:#fff;position: absolute;right: 0;top:18px;cursor: pointer;padding:0 20px;}
#loginFooter{height:80px;background-color: #373d41}
#main{height:calc(100vh - 140px);position: relative;background-image: url('../../assets/login/bg.jpg');display: table;width:100%;background-size: 100% 100%}
.footerItem{color:#9b9ea0;float:left;padding:0 17px;font-size:16px;position: relative;top:30px;}
.footerItemXs{color:#9b9ea0;font-size:12px;padding:2px 15px;}
.loginMainWrap{padding:40px;padding-left: 20px !important;padding-right: 20px !important;box-sizing: border-box;}
.subIntroduce{color:#fff;line-height: 2;}
.loginLeftSide{margin-top:100px;}
.loginLeftSide>h1{color:#fff;margin-bottom:15px;}
</style>
<style>
#main .rowBlock.el-row{display: table-cell;vertical-align:middle;}
</style>
