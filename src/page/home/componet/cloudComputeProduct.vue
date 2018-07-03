<!-- 
- Author:CaoJing
- Date:2018/7/3
- github:https://github.com/Mirror198829
-->
<template>
  <div>
      <div class="sectionHead">
        <h1 class="title">为您提供丰富多样的云计算产品</h1>
        <h3 class="subTitle">可信、开放、全国服务</h3>
      </div>
      <div class="productBodyPc">
        <ul class="productNavTabs clearfix">
          <li class="productNavTabItem" :class="{'active':key == activeIndex}" v-for="(item,key) in productLst" @click="changeTab(key)">
            <img :src="'https://mirror198829.github.io/static/cloud/cloudProduct/'+item.icon"/>
            <p>{{item.title}}</p>
          </li>
        </ul>
        <div class="productTabContent" :class="{'active':activeIndex != null}">
          <div class="productTabPannel" :class="{'active':key == activeIndex}" v-for="(item,key) in productLst">{{item.detail}}</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'cloudComputeProduct',
  data () {
    return {
      activeIndex:null,
      productLst:[
        {title:'计算',detail:'计算123',icon:'icon-calc.svg'},
        {title:'存储',detail:'存储123',icon:'icon-disk.svg'},
        {title:'网络',detail:'网络123',icon:'icon-web.svg'},
        {title:'数据库',detail:'数据库123',icon:'icon-datalib.svg'},
        {title:'安全',detail:'安全123',icon:'icon-safe.svg'}
      ]
    }
  },
  methods:{
    changeTab(index){
      if(index == this.activeIndex){
        this.activeIndex = null
      }else{
        this.activeIndex = index
      }
    }
  },
  mounted(){},
  created(){}
}
</script>

<style  scoped lang="less">
.title,.subTitle{text-align:center;font-weight: 400;}
.title{font-size:36px;line-height:46px;color:#3b516a;margin-bottom:10px;}
.sectionHead{padding:50px 15px}
.subTitle{font-size:18px;line-height:22px;color:#999;}
.productNavTabs{max-width:1200px;width:1200px;margin:0 auto;display:flex;justify-content:space-between;}
.productNavTabItem{}
.productTabContent{background-color: #F1F3FF;height:0px;transition:height .5s;}
.productTabContent.active{height:300px;}
.productTabPannel{display:none;}
.productTabPannel.active{display:block;}
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
