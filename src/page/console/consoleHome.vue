<!-- 
- Author:CaoJing
- Date:2018/7/24
- github:https://github.com/Mirror198829
-->
<template>
  <div id="consolePage">
    <console-header></console-header>
    <el-container>
      <el-aside :width="asideW+'px'">
        <el-menu
          :router="true"
          :default-active="$route.path"
          class="consoleMenu"
          text-color="#fff"
          background-color="#373d41"
          :collapse="isCollapse"
          :collapse-transition="false">
          <div class="collapseBtn" @click="collapse()">
            <i class="fa fa-align-justify" :class="{'rotateIcon':isCollapse}"></i>
          </div>
          <el-menu-item index="/consoleOverview">
            <i class="el-icon-upload"></i>
            <span slot="title">概览页</span>
          </el-menu-item>
          <el-menu-item index="/cloudService">
            <i class="el-icon-menu"></i>
            <span slot="title">云服务 ECS</span>
          </el-menu-item>
          <el-menu-item index="/gameBuy">
            <i class="el-icon-service"></i>
            <span slot="title">游戏遁</span>
          </el-menu-item>
          <el-menu-item index="/dashBoard">
            <i class="fa fa-bar-chart"></i>&nbsp&nbsp
            <span slot="title">dashBoard</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="consoleMain">
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import consoleHeader from './components/consoleHeader.vue'
export default {
  name: '',
  components:{
    consoleHeader
  },
  data () {
    return {
      isCollapse:false,
      asideW:200
    }
  },
  methods:{
    collapse(){
      this.isCollapse = !this.isCollapse
      this.asideW = this.isCollapse ? 65 : 200     
    },
    getWindowW(){
      let windowW = $(window).width()   //获取窗口大小
      if(windowW < 1200){    //小于1200px时，左侧栏只有收缩状态
        this.isCollapse = true
        this.asideW = 65
      }
    }
  },
  mounted(){
    this.getWindowW()
    window.addEventListener('resize', () => {
      this.getWindowW()
    }, false)
  },
  created(){}
}
</script>
<style lang="less">
@import '../../less/index.less';
#consolePage .el-header {height:@headerH;}
#consolePage .el-aside {background-color:@base-color;} 
#consolePage .el-main {height: calc(100vh - @headerH);}
#consolePage .el-menu-item.is-active{background-color:@theme-color !important;color:@font-white;}
</style>
<style  scoped lang="less">
@import '../../less/index.less';
#consolePage{height:100%}
.consoleMenu{background-color:@base-color;border-right-width:0 !important}
.rotateIcon{transform:rotate(90deg);}
.collapseBtn{color:#aeb9c2;text-align:center;background-color:#4a5064;padding:8px 0;cursor: pointer;}
.collapseBtn:hover{color:@font-white;}
// screen >= 1200
@media screen and (min-width:1200px){

}
// 1200>= screen >=992
@media screen and (max-width:1200px){
  .collapseBtn{display:none}
}

@media screen and (max-width:992px){
}

@media screen and (max-width:768px){
}

@media screen and (max-width:480px){
}
</style>
