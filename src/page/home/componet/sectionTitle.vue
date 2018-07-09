<!-- 
- Author:CaoJing
- Date:2018/7/9
- github:https://github.com/Mirror198829
-->
<template>
  <div class='sectionTitle'>
     <h1 class="title" :style="{color:myColor}">{{myTitle}}</h1>
     <h3 class="subTitle">{{mySubTitle}}</h3>
  </div>
</template>

<script>
export default {
  name: 'sectionTitle',
  props:['myTitle','mySubTitle','myColor'],
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
.title,.subTitle{text-align:center;font-weight: 400;}
.title{font-size:36px;line-height:46px;margin-bottom:10px;}
.subTitle{font-size:18px;line-height:22px;color:#999;}
// screen >= 1200
@media screen and (min-width:1200px){

}
// 1200>= screen >=992
@media screen and (max-width:1200px){
  .title{font-size:20px;line-height:30px;}
  .subTitle{font-size:14px;}
}

@media screen and (max-width:992px){
}

@media screen and (max-width:768px){
}

@media screen and (max-width:480px){
}
</style>
