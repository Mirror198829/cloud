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
          <li class="productNavTabItem" :class="{'active':key == activeIndex}" v-for="(item,key) in productLst"  v-if="key<lineNum">
            <span @click="changeTab(key)">
              <img :src="'https://mirror198829.github.io/static/cloud/cloudProduct/'+item.icon"/>
              <p class="productNavTabTitle">{{item.title}}</p>
            </span>
          </li>
        </ul>
        <div class="productTabContent" :class="{'active':activeIndex != null && activeIndex < lineNum}">
          <div class="productTabPannel" :class="{'active':(key == activeIndex && key<lineNum) || (key == 0 && activeIndex == null)}" v-for="(item,key) in productLst">
            <ul class="productLst">
              <li class="productItem" v-for="(content,index) in item.content">
                <h2>{{content.title}}</h2>
                <p>{{content.detail}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="productBodyPc">
        <ul class="productNavTabs clearfix">
          <li class="productNavTabItem" :class="{'active':key == activeIndex}" v-for="(item,key) in productLst" v-if="key>=lineNum">
            <span @click="changeTab(key)">
              <img :src="'https://mirror198829.github.io/static/cloud/cloudProduct/'+item.icon"/>
              <p class="productNavTabTitle">{{item.title}}</p>
            </span>
          </li>
        </ul>
        <div class="productTabContent" :class="{'active':activeIndex != null && activeIndex >= lineNum}" >
          <div class="productTabPannel" :class="{'active':(key == activeIndex && key>=lineNum) || (key == 5 && activeIndex == null)}" v-for="(item,key) in productLst">
            <ul class="productLst">
              <li class="productItem" v-for="(content,index) in item.content">
                <h2>{{content.title}}</h2>
                <p>{{content.detail}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'cloudComputeProduct',
  data () {
    return {
      activeIndex:0,
      lineNum:5,
      productLst:[]
    }
  },
  methods:{
    changeTab(index){
      if(index == this.activeIndex){
        this.activeIndex = null
      }else{
        this.activeIndex = index
      }
    },
    getProductInfo(){
      this.$http.get('http://yapi.demo.qunar.com/mock/12097/getProduct').then(res => {
        this.productLst = res.data.productLst
      }).catch(error => {})
    }
  },
  mounted(){
    this.getProductInfo()
  },
  created(){}
}
</script>

<style  scoped lang="less">
@import '../../../less/index.less';
.title,.subTitle{text-align:center;font-weight: 400;}
.title{font-size:36px;line-height:46px;color:#3b516a;margin-bottom:10px;}
.sectionHead{padding:50px 15px}
.subTitle{font-size:18px;line-height:22px;color:#999;}
.productNavTabs,.productLst{max-width:1200px;width:1200px;margin:0 auto;}
.productNavTabs{display:flex;}
.productNavTabItem{flex:1;text-align:center;padding-top:20px;
  span{cursor: pointer;display:inline-block;position:relative;}
  .productNavTabTitle{height:42px;font-size:18px;line-height:22px;color:#8A8D93;transition:all .2s;padding-left:20px;padding-right: 20px;margin-top:10px;}
}
.productItem{float:left;width:calc(100% / 3);box-sizing:border-box;padding:20px 40px;transition:all .3s;
h2{margin-bottom:9px;font-size:18px;line-height:22px;color:#3b516a;font-weight:400;}
p{height:66px;font-size:13px;line-height:22px;color:#95989D;overflow:hidden;};}
.productItem:hover{background-color:#fff;border-radius:4px;cursor:pointer;
h2{color:@theme-color;}}
.productNavTabItem.active{.productNavTabTitle{color:@theme-color;}}
.productNavTabItem:hover .productNavTabTitle{color:@theme-color;}
.productNavTabItem.active .productNavTabTitle:after{left:0;right:0;}
.productNavTabTitle:after{content:'';position:absolute;bottom:0;left:50%;right: 51%;height:4px;background-color:@theme-color;transition:all .2s;}
.productTabContent{background-color: #F1F3FF;height:0px;transition:all .5s;overflow:hidden}
.productTabContent.active{height:320px;}
.productTabPannel{display:none;padding:20px 15px}
.productTabPannel.active{display:block;}
// screen >= 1200
@media screen and (min-width:1200px){

}
// 1200>= screen >=992
@media screen and (max-width:1200px){
  .productNavTabs,.productLst{max-width:100%;width:100%}
}

@media screen and (max-width:992px){
}

@media screen and (max-width:768px){
}

@media screen and (max-width:480px){
}
</style>
