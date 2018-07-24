<template>
  <div>
    <header id="header" class="clearfix">
      <div class="headerIconWrap">
        <i class="headerIcon fa fa-align-justify"></i>
        <ul class="subMenu">
          <li v-for="(item,index) in navLst" class="subMenuItem">
            <a  class="subMenuItemLink" href="#" v-if="$i18n.locale == 'cn'">{{$t('message.nav',{'nav':item.cnTitle})}}</a>
            <a  class="subMenuItemLink" href="#" v-if="$i18n.locale == 'en'">{{$t('message.nav',{'nav':item.enTitle})}}</a>
            <i  class="subMenuRightArrow fa fa-chevron-right"></i>
          </li>
          <li class="subMenuItem show subMenuHide">
            <a class="subMenuItemLink" href="#/consoleOverview">{{$t('message.console')}}</a>
          </li>
          <li class="subMenuItem show subMenuHide">
            <a class="subMenuItemLink" href="#">{{$t('message.doc')}}</a>
          </li>
        </ul>
      </div>
      <div class="headerLogo hidden-xs-only">
    	   <img class="loginCnLogo" src="../assets/logo.png" height="20" width="100" v-if="$i18n.locale == 'cn'">
         <img class="loginEnLogo" src="../assets/enlogo.png" height="60" width="140" v-if="$i18n.locale == 'en'">
      </div>
      <ul style="float:left;" class="clearfix hidden-md-and-down">
        <li v-for="(item,index) in navLst" class="navItem">
          <a href="#" v-if="$i18n.locale == 'cn'">{{$t('message.nav',{'nav':item.cnTitle})}}</a>
          <a href="#" v-if="$i18n.locale == 'en'">{{$t('message.nav',{'nav':item.enTitle})}}</a>
        </li>
      </ul>
      <ul style="float:right;color:#fff" class="clearfix">
        <li class="menuHeaderRightItem">
          <lang-switch></lang-switch>
        <li class="menuHeaderRightItem hide">
          <a href="#/consoleOverview">{{$t('message.console')}}</a>
        </li>
        <li class="menuHeaderRightItem hide">
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
    a{display:block;color:@font-white;padding:0 16px;height:@header-height;line-height:@header-height;box-sizing:border-box;font-size:14px;transition:color .5s;}
}
.navItem>a:hover{border-bottom:3px solid @theme-color;color:@theme-color;cursor:pointer;}
.headerIconWrap{float:left;font-size:18px;font-size:18px;width:60px;text-align:center;height:@header-height;cursor: pointer;position:relative;}
.headerIcon{color:#999999;transition:all .3s;cursor: pointer;position:relative;top:15px;}
.headerIconWrap:hover{background-color:@theme-color;}
.headerIconWrap:hover .headerIcon{transform:rotate(90deg);color:@font-white;}
.headerIconWrap:hover .subMenu{left:0px;}
.subMenu{height:calc(100vh - 60px);background-color:@base-color;position:absolute;overflow-y: auto;width:240px;box-sizing:border-box;padding:20px 0;top:60px;left:-240px;transition:all .5s;cursor:default;
  li{position:relative;}
}
.subMenuItemLink{height:35px;line-height:35px;font-size:14px;display:block;transition:color .2s;width:100%;box-sizing:border-box;padding-left: 30px;color:@font-white;}
.subMenuItem:hover .subMenuItemLink,.subMenuItem:hover .subMenuRightArrow{color:@theme-color;}
.subMenuItem{color:@font-white;cursor:pointer;text-align:left;}
.subMenuRightArrow{position:absolute;top:13px;right:20px;font-size:12px;}
.subMenuHide{display:none;}
.headerLogo{float:left;position:relative;top:15px;margin:0 5px 0 20px;}
.menuHeaderRightItem{float:left;padding: 0 10px;height:@header-height;line-height:@header-height;font-size:14px;}
.menuHeaderRightItem a{color:@font-white;
  &:hover{color:@theme-color;}
}

// screen >= 1200
@media screen and (min-width:1200px){

}
// 1320>= screen >=1200
@media screen and (max-width:1320px){
.navItem>a{padding:0 10px;}
}
// 1200>= screen >=992
@media screen and (max-width:1200px){
}

@media screen and (max-width:992px){
}

@media screen and (max-width:768px){
}

@media screen and (max-width:480px){
.subMenu{ width: 100vw;left:-100vw;}
.menuHeaderRightItem.hide{display:none;}
.subMenuItem.show{display:block;}
}
</style>
