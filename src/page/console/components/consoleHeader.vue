<!-- 
- Author:CaoJing
- Date:2018/7/23
- github:https://github.com/Mirror198829
-->
<template>
  <div id="consoleHeader" class="clearfix">
    <div class="headerLeft clearfix">
       <div class='navItem'>
        <a href="#/homePage">
          <img class="headerIcon" src="../../../assets/console/scanning.png" height="20" width="25"/>
        </a>
       </div>
       <div class='navItem'>
         <a href="#/consoleOverview">管理控制台</a>
       </div>
    </div>
    <div class="headerRight clearfix">
      <li v-for="(item,key) in navLst" class='navItem'>
        <a href="#">{{item.title}}</a>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'consoleHeader',
  data () {
    return {
      navLst:[
        {title:'费用',href:"#"},
        {title:'工单',href:"#"},
        {title:'备案',href:"#"},
        {title:'企业',href:"#"},
        {title:'支持与服务',href:"#"}
      ]
    }
  },
  methods:{

  },
  mounted(){},
  created(){}
}
</script>

<style  scoped lang="less">
@import '../../../less/index.less';
#consoleHeader{height:@headerH;background-color:@base-color;color:@font-white;}
.headerLeft{float:left}
.headerRight{float:right;}
.headerIcon{position:relative;top:4px;}
.navItem{float:left;
  a{color:@font-white;display:block;height:@headerH;line-height:@headerH;padding:0 12px;font-size:14px;
    &:hover{color:@theme-color;}
  }
}
// screen >= 1200
@media screen and (min-width:1200px){

}
// 1200>= screen >=992
@media screen and (max-width:1200px){
}

@media screen and (max-width:992px){
}

@media screen and (max-width:768px){
}

@media screen and (max-width:480px){
  .headerRight{display:none;}
}
</style>
