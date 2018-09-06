<!-- 
- Author:CaoJing
- Date:2018/9/6
- github:https://github.com/Mirror198829
-->
<template>
  <div class="prtWrap">
    <div class="prtBlock">
      <header class="prtHeader">
        <h1 class="prtTitle">
          {{mtTitle}}
          <span>{{mtDetail}}</span>
        </h1>
        <ul class="navLst">
          <li class="navItem" v-for="item in mtNav">{{item}}</li>
          <li class="navItem">更多></li>
        </ul>
      </header>
      <div style="display: flex;margin-top:15px;">
        <img :src="mtUrl" style="width:220px;height:310px">
        <product-item 
        v-for="item in productLst"
        :key="item.id"
        :prt-obj = "item"
        ></product-item>
      </div>
    </div>
  </div>
</template>

<script>
import productItem from './productItem.vue'
import productLst from '../../../mock/market/productLst.js'
export default {
  name: 'prtBlock',
  props:{
    mtTitle:{
      type:String,
      required:true
    },
    mtDetail:{
      type:String,
      required:true
    },
    mtNav:{
      type:Array,
      required:true
    },
    mtUrl:{
      type:String,
      required:true
    }
  },
  data () {
    return {
      productLst:[],
      
    }
  },
  components:{
    productItem
  },
  methods:{

  },
  mounted(){
    this.productLst = productLst.data
  },
  created(){}
}
</script>

<style  scoped lang="less">
@import '../../../less/index.less';
@font-color:rgba(0,0,0,.85);
.prtWrap{background-color: #fff;padding:30px 0;
  .prtBlock{width: 1180px;margin:0 auto;}
}
.prtHeader{display: flex;justify-content:space-between;
  .prtTitle{font-size:20px;font-weight: 300;color:@font-color;
    span{font-size:14px;margin-left: 18px;}
  }
  .navLst{display: flex;
    .navItem{margin-left: 30px;font-weight: 300;color:@font-color;
      &:hover{ color:@theme-color;cursor: pointer;text-decoration: underline;}
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
