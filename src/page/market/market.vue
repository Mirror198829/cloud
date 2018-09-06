<!-- 
- Author:CaoJing
- Date:2018/9/6
- github:https://github.com/Mirror198829
-->
<template>
  <div class="market">
      <div class="banner"></div>
      <div class="adWrap">
        <div class="ad">
          <img v-for="item in 4" :src="require('../../assets/market/ad'+item+'.png')">
        </div>
      </div>
      <div class="serviceWrap">
        <div class="service">
          <div class="serviceL">
            <h3>精选服务</h3>
            <div class="servicMain">
              <product-item
              style="background-color: #fff"
              class="prtItem" 
              v-for="item in productLst"
              :key="item.id"
              :prt-obj = "item"
              ></product-item>
            </div>
          </div>
          <div class="serviceR">
            <h3>热门活动</h3>
            <ul class="activtiy">
              <li class="news" v-for="(item,key) in newLst" :key="key">{{key+1}} . {{item}}</li>
            </ul>
          </div>
        </div>
      </div>
      <product-block
      mt-title="初创型企业"
      mt-detail="低门槛，高成长，云市场为您提供企业一站式服务支持"
      :mt-nav="['服务框架','定制建站','基础环境','企业通信']"
      mt-url="https://mirror198829.github.io/static/cloud/mt/bg1.png"
      ></product-block>
      <product-block
      mt-title="互联网企业"
      mt-detail="云市场为您提供安全且成熟的环境框架与迁移方案"
      :mt-nav="['服务框架','基础环境','营销推广','建站主机']"
      mt-url="https://mirror198829.github.io/static/cloud/mt/bg2.png"
      ></product-block>
      <product-block
      mt-title="传统企业"
      mt-detail="云市场为您提供企业与行业信息化服务，助力转型创新"
      :mt-nav="['速成建站','销售代理','代维服务','上云咨询']"
      mt-url="https://mirror198829.github.io/static/cloud/mt/bg3.png"
      ></product-block>
      <product-block
      mt-title="开发者和站长"
      mt-detail="云市场为您提供丰富易用的软件环境与开发工具"
      :mt-nav="['定制建站','环境部署','代维服务','基础环境']"
      mt-url="https://mirror198829.github.io/static/cloud/mt/bg4.png"
      ></product-block>
      <product-block
      mt-title="IT外包企业"
      mt-detail="云市场为您提供高效建站工具与生产管理环境"
      :mt-nav="['建站主机','业务管理','网络安全','数据迁移']"
      mt-url="https://mirror198829.github.io/static/cloud/mt/bg5.png"
      ></product-block>
  </div>
</template>

<script>
import productBlock from './components/productBlock.vue'
import productItem from './components/productItem.vue'
import productLst from '../../mock/market/productLst.js'
export default {
  name: '',
  data () {
    return {
      productLst:[],
      newLst:['金牌主机安全代维服务','移动办公上daydao就行','安全狗云安全系统全新','Oracle rac Mysyql','云导播台','wordpress安装与配置','wordpress安装与配置']
    }
  },
  components:{
    productBlock,
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
@import '../../less/index.less';
@min-width:1180px;
.blockW{width: @min-width;margin:0 auto;}
.market{min-width: 1200px;}
.banner{background:url('../../assets/market/banner.jpg');width:100%;height:400px;background-position:center center;background-repeat: no-repeat;background-size:cover;width: 100%}
.adWrap{background-color: #fff;padding:20px 0;
  .ad{display: flex;.blockW;justify-content: space-between;}
}
.serviceWrap{background-color: #f5f5f5;padding:30px 0;
  .service{display: flex;.blockW;
    h3{font-weight: 300;font-size:20px;margin-bottom:20px;}
    .serviceL{flex:7;
      .servicMain{display: flex;
        .prtItem{margin-right: 14px;}
      }
    }
    .serviceR{flex:2;display: flex;flex-direction: column;
      .activtiy{background-color: #fff;flex:1;padding:20px;
        .news{font-size: 14px;margin-bottom: 14px;font-weight: 300;cursor: pointer;
          &:hover{ color:@theme-color;}
        }
      }
    }
  }
}
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
