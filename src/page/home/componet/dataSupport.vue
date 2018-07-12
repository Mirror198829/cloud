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
    <div class="sectionBody">
    </div>
  </div>
</template>

<script>
import sectionTitle from './sectionTitle.vue'
export default {
  name: 'dataSupport',
  components:{
    sectionTitle
  },
  data () {
    return {
      
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
.solutionHead{padding:50px 0;}
.sectionBg{background:url('../../../assets/login/support.png') no-repeat;height:450px;background-size: cover;width:100%}
.sectionBody{max-width:@max-pcW;width:@max-pcW;margin:0 auto;}
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
