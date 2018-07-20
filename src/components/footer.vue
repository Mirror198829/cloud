<!-- 
- Author:CaoJing
- Date:2018/7/20
- github:https://github.com/Mirror198829
-->
<template>
  <div class="footerInfo">
    <div class="footerMain">
      <ul class="footerService clearfix">
        <li class="footerServicItem" v-for="(item,key) in footerServiceLst">
          <i class="footerIcon fa" :class="item.icon"></i>
          <div class="footerTxt">
            <h2>{{item.detail}}</h2>
            <p>{{item.txt}}</p>
          </div>
        </li>
      </ul>
      <div class="footerMenu clearfix">
        <ul class="footerNavMenu  clearfix">
          <li class="navItem" v-for="(item,key) in navLst">
            <h3>{{item.title}}</h3>
            <p v-for="(nav,index) in item.subNavs">{{nav}}</p>
          </li>
        </ul>
        <ul class="footerSubMenu clearfix">
          <li class="subNavItem clearfix">
            <h3>关注阿里云</h3>
            <div class="subNavItemO">
              <p>阿里云微信</p>
              <img src="../assets/home/id.png" height="70" width="70" style="margin-top:5px;"/>
            </div>
            <div class="subNavItemO">
              <p>阿里云微博</p>
              <img src="../assets/home/id.png" height="70" width="70" style="margin-top:5px;"/>
            </div>
          </li>
          <li class="subNavItem">
            <h4 v-for="(item,key) in subNavLst" class="subNavRightItem">
              <i class="fa subNavIcon" :class="item.icon"></i>
              {{item.title}}
            </h4>
          </li>
        </ul>
      </div>
      <div class="footerCopyright">
        <div class="footerCopyrightTop clearfix">
          <div class="footerCoypightRight">法律声明 | 隐私政策声明 | 举报不良信息 | 可接受的使用政策 华为云用户协议</div>
          <div class="footerCoypightLeft">版权所有 © 华为软件技术有限公司 2018 保留一切权利 苏ICP备17040376号-5 苏B2-20130048号</div>
        </div>
        <div class="footerCopyrightBottom">
          <img src="../assets/home/cy.png" height="18" width="18"/>
          <img src="../assets/home/register.png" height="18" width="18"/>
          <span class="footerCopyrightBottomTxt">苏公网安备 3211402010008号</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerInfo',
  data () {
    return {
      footerServiceLst:[
       {detail:'7*24',txt:'多渠道服务支持',icon:'fa-clock-o'},
       {detail:'5天',txt:'内无理由退订',icon:'fa-warning'},
       {detail:'0元',txt:'免费备案',icon:'fa-free-code-camp'},
       {detail:'赔偿',txt:'100倍故障赔偿',icon:'fa-cny '},
       {detail:'意见',txt:'反馈与投诉意见',icon:'fa-pencil-square-o'},
       {detail:'VIP',txt:'专项服务',icon:'fa-star'}
      ],
      navLst:[
        {title:'服务与支持',subNavs:['解决方案','云市场','开发者中心','客户案例','意见反馈','服务咨询','支持与服务机会','帮助中心']},
        {title:'账号与支付',subNavs:['充值/付款','现下汇款/电汇','合同申请','索取发票']},
        {title:'快速链接',subNavs:['免费注册','管理控制台','备案中心','我的订单','费用中心','价格计算器','图标库']},
        {title:'其他链接',subNavs:['阿里官网','企业业务','开发者联盟','阿里招聘','开发者中心','阿里商城','关于我们','联系我们']},
        {title:'联系我们',subNavs:['售前邮箱','备案服务邮箱','云市场咨询邮箱']}
      ],
      subNavLst:[
        {icon:'fa-headphones',title:'4000-955-988'},
        {icon:'fa-universal-access',title:'华为云安全'},
        {icon:'fa-support',title:'可信合规'}
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
@import '../less/index.less';
@foot-color:#c3c5c6;
.footerInfo{background-color:@base-color;color:@font-white;padding:20px 0}
.footerMain{max-width:@max-pcW;width:@max-pcW;margin:0 auto;}
.footerService{width:100%;margin-bottom:50px;}
.footerServicItem{float:left;width:calc(100% / 6);text-align:center;}
.footerIcon{font-size:35px;font-weight:400;color:#c3c5c6;margin-right:10px;position:relative;top:-4px;}
.footerTxt{display:inline-block;
  h2{font-size:16px;line-height:25px;font-weight:400;text-align:left;}
  p{font-size:14px;color:@foot-color;text-align:left;}
}
.footerNavMenu{width:calc(100% / 7 * 5);float:left;}
.footerSubMenu{float:left;width:calc(100% / 7 * 2);}
.navItem{float:left;width:calc(100% / 5);
  h3{font-size:14px;font-weight:400;line-height:20px;margin-bottom:16px;}
  p{font-size:14px;color:@foot-color;padding:2px 0}
}
.subNavItem{float:left;width:calc(100% / 2);
  h3{font-size:14px;font-weight:400;line-height:20px;margin-bottom:16px;}
  p{font-size:14px;color:@foot-color;padding:2px 0}
}
.subNavRightItem{font-weight:400;font-size:16px;color:@foot-color;margin-bottom:20px;
  .subNavIcon{font-size:25px;margin-right:7px;position:relative;top:2px;}
}
.footerCopyright{margin-top:55px;}
.footerCopyrightTop{color:@foot-color;font-size:12px;margin-bottom:10px;}
.footerCoypightRight{float:right;}
.footerCoypightLeft{float:left;}
.footerCopyrightBottomTxt{font-size:12px;color:@foot-color;position:relative;top:-3px;}
// screen >= 1200
@media screen and (min-width:1200px){

}
// 1200>= screen >=992
@media screen and (max-width:1200px){
  .footerMain{width:90%;}
  .footerIcon{margin-right:0;}
  .footerTxt{display:block;
    h2{text-align:center;}
    p{text-align:center;}
  }
  .footerNavMenu{width:calc(100%);float:none;}
  .footerSubMenu{float:none;width:410px;margin:20px auto}
  .subNavItem{float:left;
    h3{display:none;}
    .subNavItemO{float: left;margin-left:20px;}
    p{font-size:14px;color:@foot-color;padding:2px 0}
  }
  .footerCopyrightTop{text-align:center;}
  .footerCoypightRight{float:none;margin-bottom:15px;}
  .footerCoypightLeft{float:none;}
  .footerCopyrightBottom{text-align:center;}
}

@media screen and (max-width:992px){
  .footerServicItem{width:calc(100% / 3);margin-bottom:40px;
    &:nth-child(n + 4){margin-bottom:0px;}
  }
  .footerService{margin-bottom:30px;}
  .footerNavMenu{display:none;}
  .footerSubMenu{width:290px;margin:0px auto}
  .subNavItem{
  .subNavItemO{float:none;margin-bottom:20px;
      img{display:none;}
    }
  }
  .footerCopyright{margin-top:40px;}
}

@media screen and (max-width:768px){
  .footerServicItem{width:calc(100% / 3);margin-bottom:20px;}
  .footerIcon{font-size:24px;}
  .footerTxt{
    h2{font-size:12px}
    p{font-size:12px;}
  }
  .subNavItem{
    p{font-size:12px;padding:2px 0}
  }
  .footerSubMenu{width:230px;}
  .subNavRightItem{font-weight:400;font-size:12px;color:@foot-color;margin-bottom:20px;
    .subNavIcon{font-size:14px;margin-right:7px;position:relative;top:2px;}
  }
  .footerCoypightRight{display:none;}
  .footerCopyright{margin-top:10px;}
}

@media screen and (max-width:480px){
}
</style>
