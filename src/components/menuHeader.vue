<template>
  <div>
    <header id="header" class="clearfix">
      <i class="headerIcon fa fa-align-justify"></i>
      <div class="headerLogo">
    	   <img class="loginCnLogo" src="../assets/logo.png" height="20" width="100" v-if="$i18n.locale == 'cn'">
         <img class="loginEnLogo" src="../assets/enlogo.png" height="60" width="140" v-if="$i18n.locale == 'en'">
      </div>
      <ul style="float:left;" class="clearfix">
        <li v-for="(item,index) in navLst" class="navItem">
          <a href="#" v-if="$i18n.locale == 'cn'">{{$t('message.nav',{'nav':item.cnTitle})}}</a>
          <a href="#" v-if="$i18n.locale == 'en'">{{$t('message.nav',{'nav':item.enTitle})}}</a>
        </li>
      </ul>
      <ul style="float:right;color:#fff" class="clearfix">
        <li class="menuHeaderRightItem">
          <lang-switch></lang-switch>
        <li class="menuHeaderRightItem">
          <a>{{$t('message.console')}}</a>
        </li>
        <li class="menuHeaderRightItem">
          <a>{{$t('message.doc')}}</a>
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
        {cnTitle:'产品',enTitle:'Product'},
        {cnTitle:'解决方案',enTitle:'Solution'},
        {cnTitle:'定价',enTitle:'Price'},
        {cnTitle:'ET大脑',enTitle:'ET Brain'},
        {cnTitle:'数据智能',enTitle:'Data Intelligent'},
        {cnTitle:'安全',enTitle:'Safe'},
        {cnTitle:'云市场',enTitle:'Cloud Market'},
        {cnTitle:'支持与服务',enTitle:'Support&Service'},
        {cnTitle:'合作伙伴',enTitle:'Cooperate'}
      ]
    }
  },
  methods:{}
}
</script>

<style scoped lang="less">
@import '../less/index.less';
@header-height:60px;
#header{height: @header-height;background-color:@base-color;}
.loginCnLogo{position:relative;top:4px;}
.loginEnLogo{position:relative;top:-16px;}
.navItem{
    float:left;
    a{text-decoration: none;display:block;color:@font-white;padding:0 16px;height:@header-height;line-height:@header-height;box-sizing:border-box;font-size:14px;transition:all .5s;}
}
.navItem>a:hover{border-bottom:3px solid @theme-color;color:@theme-color;cursor:pointer;}
.headerIcon{color:#999999;font-size:18px;float:left;position:relative;top:21px;margin-left:20px;transition:all .3s;cursor: pointer;}
.headerIcon:hover{transform:rotate(90deg);}
.headerLogo{float:left;position:relative;top:15px;margin:0 5px 0 30px;}
.menuHeaderRightItem{float:left;padding: 0 10px;height:@header-height;line-height:@header-height;font-size:14px;}
</style>
