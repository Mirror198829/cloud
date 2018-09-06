<!-- 
- Author:CaoJing
- Date:2018/9/5
- github:https://github.com/Mirror198829
-->
<template>
  <div class="productItem" :style="{borderColor:prtColor}">
    <div class="productTag" :style="{borderTopColor:prtColor,borderRightColor:prtColor}">
      <span>热门</span>
    </div>
    <img class="productImg" v-bind:src="require('../../../assets/market/'+prtImg+'.jpg')" style="height:100px">
    <p class="productName">{{prtTitle}}</p>
    <p class="productDetail">{{prtDetail}}</p>
    <p class="productPrice">{{prtPrice}}元/月</p>
    <div class='productBtn'>立即购买</div>
  </div>
</template>

<script>
export default {
  props:{
    prtColor:{
      required:true
    },
    prtPrice:{
      type:Number,
      required:true
    },
    prtTitle:{
      type:String,
      required:true
    },
    prtDetail:{
      type:String,
      required:true
    },
    prtImg:{
      required:true
    }
  },
  name: '',
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
@tag-width:50px;
@boundary:14px;
.productItem{border-top:2px solid;text-align: center;background-color: rgb(250, 250, 250);padding-bottom:@boundary;position: relative;cursor: pointer;transition: all .2s;flex:1;
  @font-color:#4e4e4e;
  .productTag{position: absolute;width: 0;height: 0;top: 0;right: 0;border-width:@tag-width 0 0 @tag-width;border-style:solid;border-left-color:transparent;border-bottom-color: transparent;box-sizing: border-box;
    span{position: absolute;top:(-@tag-width + 10) * 1px;right:0px;font-size:12px;color:#fff;display: inline-block;width:30px;}
   }
  .prt{margin-top:@boundary;}
  .textOver{max-width: 190px;overflow: hidden;white-space:nowrap;text-overflow:ellipsis;margin:0 auto;}
  .productImg{margin:30px 0 20px;}
  .productName{color:@font-color;font-size: 14px;.textOver}
  .productDetail{font-size: 12px;color:@font-color;.textOver;.prt;}
  .productBtn{display: inline-block;background-color: @theme-color;padding:5px 25px;color:#fff;.prt}
  .productPrice{font-size:20px;color:#ea402f;.prt}
  &:hover{ background-color: #fff;box-shadow: 0 0 20px rgba(0,0,0,.2);transform: scale(1.05);z-index:1000;}
  &:hover .productName{color:@theme-color;}
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


