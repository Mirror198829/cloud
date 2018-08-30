<!-- 
- Author:CaoJing
- Date:2018/8/30
- github:https://github.com/Mirror198829
-->
<template>
  <div class="subBtnWrap">
    <ul class="btnLst">
      <li class="btnItem" :class="{'active':key == 0}" v-for="(item,key) in tabLst">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'consoleTab',
  props:{
    tabLst:{
      required:true
    }
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
  @base-color:#95dfd8;
 .subBtnWrap{display:flex;margin:25px 0 15px;
  .btnLst{display:flex;border-radius:5px;overflow:hidden;border:1px solid @base-color;
    .btnItem{border-right:1px solid @base-color;color:@base-color;font-size:12px;padding:5px 20px;
      &:last-child{border-right:0px;}
      &.active{background-color:@base-color;color:#fff;}
    }
  }
 }
// screen >= 1200
@media screen and (min-width:1200px){

}
// 1200>= screen >=992
@media screen and (max-width:1200px){
}

@media screen and (max-width:992px){
}

@media screen and (max-width:768px){
}

@media screen and (max-width:480px){
}
</style>
