<template>
  <div>
    <header id="header" class="clearfix">
      <i class="headerIcon fa fa-align-justify"></i>
      <div class="headerLogo">
    	   <img id="loginLogo" src="../assets/logo.png" height="20" width="100">
      </div>
      <ul style="float:left;" class="clearfix">
        <li v-for="(item,index) in navLst" class="navItem">
          <a href="#">{{item.title}}</a>
        </li>
      </ul>
      <ul style="float:right;color:#fff" class="clearfix">
        <li>
          <lang-switch></lang-switch>
        <li>
          <a>控制台</a>
        </li>
        <li>
          <a>文档</a>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
import langSwitch from '@/components/langSwitch.vue'
export default {
  name: 'menuHeader',
  components:{
    langSwitch
  },
  data () {
    return {
      value1:'',
      activeIndex:"",
      navLst:[
        {title:'产品'},
        {title:'解决方案'},
        {title:'定价'},
        {title:'ET大脑'},
        {title:'数据智能'},
        {title:'安全'},
        {title:'云市场'},
        {title:'支持与服务'},
        {title:'合作伙伴'}
      ]
    }
  },
  methods:{}
}
</script>

<style scoped lang="less">
@import '../less/index.less';
@header-height:50px;
#header{height: @header-height;background-color:@base-color;}
#loginLogo{}
.navItem{
    float:left;
    a{text-decoration: none;display:block;color:@font-white;padding:0 16px;height:@header-height;line-height:@header-height;box-sizing:border-box;font-size:12px;transition:all .5s;}
}
.navItem>a:hover{border-bottom:3px solid @theme-color;color:@theme-color;cursor:pointer;}
.headerIcon{color:#999999;font-size:18px;float:left;position:relative;top:17px;margin-left:20px;transition:all .3s;cursor: pointer;}
.headerIcon:hover{transform:rotate(90deg);}
.headerLogo{float:left;width:103px;position:relative;top:15px;margin:0 5px 0 30px;}
</style>
