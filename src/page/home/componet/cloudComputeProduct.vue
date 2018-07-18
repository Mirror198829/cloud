<!-- 
- Author:CaoJing
- Date:2018/7/3
- github:https://github.com/Mirror198829
-->
<template>
  <div>
      <div class="productBodyPc">
        <div class="sectionHead">
         <section-title my-title="为您提供丰富多样的云计算产品" my-sub-title="可信，开放，全球服务" my-color="#3b516a"></section-title>
        </div>
        <ul class="productNavTabs clearfix">
          <li class="productNavTabItem" :class="{'active':key == activeIndex}" v-for="(item,key) in productLst"  v-if="key<lineNum">
            <span @click="changeTab(key)" class="clearfix" style="display:inline-block;">
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
        <div style="padding:50px 0;background-color:#fff">
          <for-more formore-content="查看更多云计算产品" formore-url="https://www.huaweicloud.com/product/"></for-more>
        </div>
      </div>
      <div class="productBodyMd">
        <div class="sectionHead">
         <section-title my-title="为您提供丰富多样的云计算产品" my-sub-title="可信，开放，全球服务" my-color="#3b516a"></section-title>
        </div>
        <div style="width:90%;margin:0 auto;">
          <ul class="productNavTabs">
            <li class="productNavTabItem" :class="{'active':key == activeIndex}" v-for="(item,key) in productLst" @click="changeTab(key)">
              <div class="productNavTab clearfix">
                <img :src="'https://mirror198829.github.io/static/cloud/cloudProduct/'+item.icon"/>
                <span class="productNavTabTitle">{{item.title}}</span>
              </div>
              <div class="productTabPannel" :class="{'active':key == activeIndex}">
                <ul class="productLst">
                  <li class="productItem" v-for="(content,index) in item.content">
                    <h2>{{content.title}}</h2>
                    <p>{{content.detail}}</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div style="padding:10px 0">
          <for-more formore-content="查看更多云计算产品" formore-url="https://www.huaweicloud.com/product/"></for-more>
        </div>
      </div>
  </div>
</template>

<script>
import productData from '../../../mock/home.js'
import forMore from './forMore.vue'
import sectionTitle from './sectionTitle.vue'
export default {
  name: 'cloudComputeProduct',
  components:{
    forMore,
    sectionTitle
  },
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
      this.productLst = productData.productLst
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
.sectionHead{padding:50px 15px;}
.productBodyPc{background-color:#fff;}
.productBodyPc .productNavTabs,.productBodyPc .productLst{max-width:@max-pcW;width:@max-pcW;margin:0 auto;box-sizing:border-box;overflow:hidden;background-color:#fff;}
.productBodyPc .productNavTabs{display:flex;}
.productBodyPc .productNavTabItem{flex:1;text-align:center;padding-top:20px;
  span{cursor: pointer;display:inline-block;position:relative;}
  .productNavTabTitle{height:42px;font-size:18px;line-height:22px;color:#8A8D93;transition:all .2s;padding-left:20px;padding-right: 20px;margin-top:10px;}
}
.productBodyPc .productItem{float:left;width:calc(100% / 3);box-sizing:border-box;padding:20px 40px;transition:all .3s;
h2{margin-bottom:9px;font-size:18px;line-height:22px;color:#3b516a;font-weight:400;}
p{height:66px;font-size:13px;line-height:22px;color:#95989D;overflow:hidden;};}
.productItem:hover{background-color:#fff;border-radius:4px;cursor:pointer;
h2{color:@theme-color;}}
.productBodyPc .productNavTabItem.active{.productNavTabTitle{color:@theme-color;}}
.productBodyPc .productNavTabItem:hover .productNavTabTitle{color:@theme-color;}
.productBodyPc .productNavTabItem.active .productNavTabTitle:after{left:0;right:0;}
.productBodyPc .productNavTabTitle:after{content:'';position:absolute;bottom:0;left:50%;right: 51%;height:4px;background-color:@theme-color;transition:all .2s;}
.productBodyPc .productTabContent{background-color: #F1F3FF;height:0px;transition:all .5s;overflow:hidden}
.productBodyPc .productTabContent.active{height:320px;}
.productBodyPc .productTabPannel{display:none;padding:20px 15px}
.productBodyPc .productTabPannel.active{display:block;}

// screen >= 1200
@media screen and (min-width:1200px){
  .productBodyPc{display:block;}
  .productBodyMd{display:none;}
}
// 1200>= screen >=992
@media screen and (max-width:1200px){
  .productNavTabs,.productLst{max-width:100%;width:100%}
  .productBodyPc{display:none;}
  .productBodyMd{display:block;background-color:#f1f3ff;
    .productNavTabItem{
      img{height:25px;float:left;}
      span{font-size:14px;line-height:25px;float:left;margin-left:15px;}
      .productNavTab{background-color:#fff;box-sizing:border-box;border-top:2px solid #f1f3ff;padding:20px;cursor: pointer;}
      .productTabPannel{height:0;overflow:hidden;transition:all .5s;box-sizing:border-box;background-color:rgba(255,255,255,0.7);}
   }
  }
  .productBodyMd .productNavTabItem.active{
    .productTabPannel{height:480px;}
    .productNavTab{border-bottom:2px solid @theme-color;}
    .productNavTab .productNavTabTitle{
      color:@theme-color;
    }
  }
  .sectionHead{padding:20px 15px;}
  .productTabPannel{
    .productItem{padding:5px 25px;
      h2{font-size:14px;font-weight:400;color:#34475F;line-height:20px;margin-bottom:10px;}
      p{font-size:12px;line-height:16px;height:30px;margin-bottom:10px;color:#95989D;overflow:hidden;}
    }
  }
}

@media screen and (max-width:992px){
}

@media screen and (max-width:768px){
}

@media screen and (max-width:480px){
}
</style>
