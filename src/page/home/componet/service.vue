<!-- 
- Author:CaoJing
- Date:2018/7/2
- github:https://github.com/Mirror198829
-->
<template>
  <div>
    <div class="sectionWrap">
      <section-title my-title="为您臻选优质软件和服务" my-sub-title="汇聚万千应用的一站式云服务平台" my-color="#3B516A"></section-title>
    </div>
    <div class="forMore">
      <for-more formore-content="查看更多云应用" formore-url="https://app.huaweicloud.com/"></for-more>
    </div>
  </div>
</template>

<script>
import sectionTitle from './sectionTitle.vue'
import forMore from './forMore.vue'
export default {
  name: '',
  components:{
    sectionTitle,
    forMore
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
.sectionWrap,.forMore{padding:50px 0}
// screen >= 1200
@media screen and (min-width:1200px){

}
// 1200>= screen >=992
@media screen and (max-width:1200px){
  .sectionWrap{padding:20px 15px;}
  .forMore{padding:10px 0;}
}

@media screen and (max-width:992px){
}

@media screen and (max-width:768px){
}

@media screen and (max-width:480px){
}
</style>
