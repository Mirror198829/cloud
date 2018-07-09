<!-- 
- Author:CaoJing
- Date:2018/7/9
- github:https://github.com/Mirror198829
-->
<template>
  <div class="section-more-wrap">
      <a :href="formoreUrl" target="_blank">
        {{formoreContent}}
        <i class="fa fa-angle-right"></i>
      </a>
  </div>
</template>

<script>
export default {
  name: 'forMore',
  props:['formoreContent','formoreUrl'],
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
.section-more-wrap{text-align:center;
  a{color:#8A8D93;font-size:18px;line-height:22px;cursor: pointer;}
  i{margin-left:5px;position:relative;left:0;transition:all .2s;}}
  .section-more-wrap a:hover{color:@theme-color;
    i{left:10px;}
}
// screen >= 1200
@media screen and (min-width:1200px){
}
// 1200>= screen >=992
@media screen and (max-width:1200px){
  .section-more-wrap a{font-size:14px;}
}

@media screen and (max-width:992px){
}

@media screen and (max-width:768px){
}

@media screen and (max-width:480px){
}
</style>
