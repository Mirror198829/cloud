<!-- 
- Author:CaoJing
- Date:2018/9/5
- github:https://github.com/Mirror198829
-->
<template>
  <div>
    <div style="display: flex;margin-top:15px;padding:0 40px">
      <product-item 
      class="prtItem"
      v-for="item in productLst"
      :key="item.id"
      :prt-color="item.color"
      :prt-price="item.price"
      :prt-title="item.title"
      :prt-detail="item.detail"
      :prt-img="item.img"
      ></product-item>
    </div>
  </div>
</template>

<script>
import productItem from './components/productItem.vue'
import productLst from '../../mock/market/productLst.js'
export default {
  name: '',
  data () {
    return {
      productLst:[]
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
.prtItem{margin-right: 14px;
  &:last-child{ margin-right: 0}
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
