<!-- 
- Author:CaoJing
- Date:2018/7/2
- github:https://github.com/Mirror198829
-->
<template>
  <div class="sectionBg">
    <div class="solutionHead">
        <section-title my-title="更可靠的数据支持" my-sub-title="高安全、高可靠的数据支持，全方位保障实践" my-color="#fff"></section-title>
    </div>
    <div class="sectionBody clearfix">
      <li class="sectionItem">
        <div class="sectionLeft">
          
        </div>
        <div class="sectionRight">
          <span class="numberInit">{{number}}</span>
          <p class="numberGrow">{{reserve}}</p>
          <p>抵御攻击</p>
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
reserve(){
     let num = this.animatedNumber
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    }
  },
  data () {
    return {
     number: 0,
     animatedNumber: 0
    }
  },
   watch: {
    number: function(newValue, oldValue) {
      var vm = this
      function animate (time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      new TWEEN.Tween({ tweeningNumber: oldValue })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: newValue }, 5000)
        .onUpdate(function () {
          vm.animatedNumber = this.tweeningNumber.toFixed(0)
        })
        .start()
      animate()
    }
  },
  mounted(){
    setTimeout(()=>{
      this.number = 3567892881
    },200)
  },
  created(){}
}
</script>

<style  scoped lang="less">
@import '../../../less/index.less';
.solutionHead{padding:50px 0;}
.sectionBg{background:url('../../../assets/login/support.png') no-repeat;height:450px;background-size: cover;width:100%}
.sectionBody{max-width:@max-pcW;width:@max-pcW;margin:0 auto;
  .sectionItem{float:left;
    .sectionLeft{float:left;width:24px;height:24px;background:url('../../../assets/login/icons.png');margin-right: 20px;}
    .sectionRight{float:left;
      .numberInit{display:none;}
      .numberGrow{color:#fff;font-size:40px;line-height:26px;}
    }
  }
}
// screen >= 1200
@media screen and (min-width:1200px){

}
// 1200>= screen >=992
@media screen and (max-width:1200px){
  .sectionBg{height:300px}
}

@media screen and (max-width:992px){
  .sectionBg{height:250px}
}

@media screen and (max-width:768px){
  .sectionBg{height:200px}
}

@media screen and (max-width:480px){
}
</style>
