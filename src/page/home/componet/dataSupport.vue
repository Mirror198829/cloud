<!-- 
- Author:CaoJing
- Date:2018/7/2
- github:https://github.com/Mirror198829
-->
<template>
  <div class="sectionBg" id="dataSupportSection">
    <div class="solutionHead">
        <section-title my-title="更可靠的数据支持" my-sub-title="高安全、高可靠的数据支持，全方位保障实践" my-color="#fff"></section-title>
    </div>
    <div class="sectionBody clearfix">
      <li class="sectionItem">
        <div class="sectionLeft"></div>
        <div class="sectionRight">
          <span class="numberInit">{{num1}}</span>
          <p class="numberGrow numberGrow1">{{formatNum1}}</p>
          <p class="sectionTxt">抵御攻击</p>
        </div>
      </li>
      <li class="sectionItem">
        <div class="sectionLeft sectionImg2"></div>
        <div class="sectionRight">
          <span class="numberInit">{{num2}}</span>
          <p class="numberGrow numberGrow2">{{animatedNum2}} %</p>
          <p class="sectionTxt">数据可靠性</p>
        </div>
      </li>
      <li class="sectionItem">
        <div class="sectionLeft sectionImg3"></div>
        <div class="sectionRight">
          <span class="numberInit">{{num3}}</span>
          <p class="numberGrow numberGrow3">{{animatedNum3}} <span class="unit">倍</span></p>
          <p class="sectionTxt">数据赔偿</p>
        </div>
      </li>
      <li class="sectionItem">
        <div class="sectionLeft sectionImg4"></div>
        <div class="sectionRight">
          <span class="numberInit">{{num4}}</span>
          <span class="numberInit">{{num5}}</span>
          <p class="numberGrow numberGrow4">{{animatedNum4}} X {{animatedNum5}}</p>
          <p class="sectionTxt">客户服务支持</p>
        </div>
      </li>
    </div>
</div>
  </div>
</template>

<script>
import sectionTitle from './sectionTitle.vue'
import TWEEN from 'tween.js'
export default {
  name: 'dataSupport',
  components:{
    sectionTitle
  },
  computed:{
    formatNum1(){
     let num = this.animatedNum1
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    }
  },
  data () {
    return {
     num1: 0,
     animatedNum1: 0,
     num2:0,
     animatedNum2: 0,
     num3:0,
     animatedNum3: 0,
     num4:0,
     animatedNum4: 0,
     num5:0,
     animatedNum5: 0 
   }
  },
   watch: {
    num1: function(newValue, oldValue) {
      var vm = this
      function animate (time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      new TWEEN.Tween({ tweeningNumber: oldValue })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: newValue }, 5000)
        .onUpdate(function () {
          vm.animatedNum1 = this.tweeningNumber.toFixed(0)
        })
        .start()
      animate()
    },
    num2: function(newValue, oldValue) {
      var vm = this
      function animate (time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      new TWEEN.Tween({ tweeningNumber: oldValue })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: newValue }, 5000)
        .onUpdate(function () {
          vm.animatedNum2 = this.tweeningNumber.toFixed(10)
        })
        .start()
      animate()
    },
    num3: function(newValue, oldValue) {
      var vm = this
      function animate (time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      new TWEEN.Tween({ tweeningNumber: oldValue })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: newValue }, 5000)
        .onUpdate(function () {
          vm.animatedNum3 = this.tweeningNumber.toFixed(0)
        })
        .start()
      animate()
    },
    num4: function(newValue, oldValue) {
      var vm = this
      function animate (time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      new TWEEN.Tween({ tweeningNumber: oldValue })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: newValue }, 5000)
        .onUpdate(function () {
          vm.animatedNum4 = this.tweeningNumber.toFixed(0)
        })
        .start()
      animate()
    },
    num5: function(newValue, oldValue) {
      var vm = this
      function animate (time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      new TWEEN.Tween({ tweeningNumber: oldValue })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: newValue }, 5000)
        .onUpdate(function () {
          vm.animatedNum5 = this.tweeningNumber.toFixed(0)
        })
        .start()
      animate()
    }
  },
  methods:{
    setAnimatedNum(){
      this.num1 = 3567892881
      this.num2 = 99.9999999999
      this.num3 = 100
      this.num4 = 7
      this.num5 = 24
    },
    handleScroll(){      
      let windowH = document.body.clientHeight
      let docSrollTop = $(document).scrollTop()   //文档卷动值
      let clientH = $(window).height()  //视窗大小
      let sectionTop = $(".sectionBody").offset().top //动态文字模块距离文档头部的距离
      let sectionH = $(".sectionBody").height()
      if((docSrollTop + clientH - sectionTop) >= 0 && (docSrollTop - sectionTop - sectionH) <= 0){
        this.setAnimatedNum()
      }
    }
  },
  mounted(){
    this.handleScroll()
    window.addEventListener('scroll',this.handleScroll)
  },
  created(){

  }
}
</script>

<style  scoped lang="less">
@import '../../../less/index.less';
.solutionHead{padding:50px 0;}
.sectionBg{background:url('../../../assets/login/support.png') no-repeat;height:450px;background-size: cover;width:100%}
.sectionBody{max-width:@max-pcW;width:@max-pcW;margin:0 auto;display:flex;justify-content:space-between;
  .sectionItem{
    .sectionLeft{float:left;width:24px;height:24px;background-image:url('../../../assets/login/icons.png');margin-right: 10px;}
    .sectionImg2{background-position: 0 -24px;}
    .sectionImg3{background-position: 0 -48px;}
    .sectionImg4{background-position: 0 -72px;}
    .sectionRight{float:left;
      .numberInit{display:none;}
      .numberGrow{color:@font-white;font-size:40px;line-height:26px;height:30px;
        .unit{font-size:24px;}
      }
      .numberGrow1{width:265px;}
      .numberGrow2{width:340px;}
      .numberGrow3{width:110px;}
      .numberGrow4{width:120px;}
      .sectionTxt{color:@font-white;font-size:14px;line-height:26px;margin-top:10px;}
    }
  }
}
// screen >= 1200
@media screen and (min-width:1200px){

}
// 1200>= screen >=992
@media screen and (max-width:1200px){
  .solutionHead{padding:25px 0}
  .sectionBg{height:300px}
  .sectionBody{width:90%;margin:0 auto;
  .sectionItem{
    .sectionRight{
      .numberGrow{
          .unit{font-size:18px;}
      }
      .numberGrow{font-size:24px;line-height:24px;height:24px;}
      .numberGrow1{width:160px;}
      .numberGrow2{width:220px;}
      .numberGrow3{width:80px;}
      .numberGrow4{width:80px;}
    }
  }
}

}

@media screen and (max-width:992px){
  .sectionBg{height:300px}
  .sectionBody{
    .sectionItem{
      .sectionLeft{}
      .sectionRight{
        .numberGrow{
          .unit{font-size:16px;}
        }
        .numberGrow{font-size:18px;line-height:18px;height:18px;}
        .numberGrow1{width:120px;}
        .numberGrow2{width:170px;}
        .numberGrow3{width:70px;}
        .numberGrow4{width:70px;}
      }
    }
  }
}

@media screen and (max-width:768px){
  .sectionBg{height:200px}
  .sectionBody{
      .sectionItem{
        .sectionLeft{display:none;}
        .sectionRight{
          .numberGrow{
            .unit{font-size:12px;}
          }
          .numberGrow{font-size:12px;line-height:14px;height:14px;}
          .numberGrow1{width:80px;}
          .numberGrow2{width:120px;}
          .numberGrow3{width:45px;}
          .numberGrow4{width:45px;}
          .sectionTxt{margin-top:5px;font-size:12px;display:none;}
        }
      }
    }
}

@media screen and (max-width:480px){
}
</style>
