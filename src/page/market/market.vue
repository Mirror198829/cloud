<!-- 
- Author:CaoJing
- Date:2018/9/6
- github:https://github.com/Mirror198829
-->
<template>
  <div class="market">
      <div class="searchWrap">
        <div class="search">
          <div class="logo">
            <img src="../../assets/market/cloud.png" style="height:45px">
          </div>
          <div>
            <div class="searchBtn">
               <input type="text" name="search" placeholder="请输入要搜索的内容">
               <div class="btn"><span>搜索</span></div>
            </div>
            <ul class="tipLst">
              <li v-for="item in tipLst">{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="banner">
        <div class="menuWrap">
          <div class="menu">
            <div class="menuTop">
              商品类目
              <i class="fa fa-th-large"></i>
            </div>
            <div class="menuMain">
              <ul class="menuLst">
                <li v-for="(item,key) in menuLst" class="menuItem">
                  <h4>{{item.title}}</h4>
                  <ul class="subMenuLst">
                    <li class="subMenuItem" v-for="item in item.subLst">{{item}}</li>
                  </ul>
                  <div class="menuContent">
                    <div class="menuConL">
                      <li v-for="obj in item.menuLeft">
                        <h5 class="meuConTitle">{{obj.title}}</h5>
                        <p>{{obj.content}}</p>
                      </li>
                    </div>
                    <div class="menuConR">
                      <h5 class="meuConTitle">推荐商品</h5>
                      <p class="menuConRTxt" v-for="title in item.menuRight">{{title}}</p>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="menuRegister">需求登记入口</div>
            </div>
          </div>
        </div>
      </div>
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
import menuLst from '../../mock/market/menuLst.js'
export default {
  name: '',
  data () {
    return {
      productLst:[],
      newLst:['金牌主机安全代维服务','移动办公上daydao就行','安全狗云安全系统全新','Oracle rac Mysyql','云导播台','wordpress安装与配置','wordpress安装与配置'],
      menuLst:[],
      tipLst:['企业建站','全能环境','堡垒机','php','主机模板','java','环境部署','数据迁移']
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
    this.menuLst =  menuLst.data
  },
  created(){}
}
</script>

<style  scoped lang="less">
@import '../../less/index.less';
@min-width:1180px;
.blockW{width: @min-width;margin:0 auto;}
.market{min-width: 1200px;}
.searchWrap{background-color: #f5f5f7;padding:20px 0;
  .search{.blockW;display: flex;
    .logo{width: 255px;
      img{position: relative;top:-7px;}
    }
    .searchBtn{display: flex;margin-left: 30px;position: relative;top:4px;
      input{width:630px;padding:8px 17px;line-height: 1.9;border:1px solid @theme-color;font-size:12px;box-sizing: border-box;}
      .btn{background-color: @theme-color;color:#fff;flex:1;padding:0 35px;display:flex;align-items:center;font-size:14px;cursor: pointer;}
    }
    .tipLst{display: flex;margin-left: 30px;position: relative;top:13px;
      li{font-size:12px;color:#999;margin-right: 20px;}
    }
  }
}
.banner{background:url('../../assets/market/banner.jpg');width:100%;height:400px;background-position:center center;background-repeat: no-repeat;background-size:cover;
  .menuWrap{.blockW;position: relative;height:100%;
    @menu-width:255px;;
    .menu{position: absolute;bottom:0;color:#fff;z-index: 1000;width: @menu-width;
      .menuTop{background-color: #2d3d63;padding:9px 20px;font-size: 16px;display: flex;justify-content: space-between;
        i{position: relative;top:3px;}
      }
      .menuMain{background-color: rgba(27,37,61,0.7);
        .menuLst{
          .menuItem{padding:13px 30px;font-size:14px;border-bottom: 1px solid #384566;cursor: pointer;
            h4{font-weight:400;}
            .subMenuLst{display: flex;justify-content: space-between;color:#828794;margin-top:8px;
              .subMenuItem{font-size: 12px;}
            }
            &:hover .menuContent{opacity: 1}
            .menuContent{position: absolute;background-color: #fff;height:400px;top:31px;width:680px;left: @menu-width;color:#000;padding:40px;box-sizing: border-box;display: flex;opacity: 0;transition: all .2s;
              .meuConTitle{font-size:14px;line-height: 1.5;font-weight:600;}
              .menuConL{flex:1;margin-right: 20px;
                li{margin-bottom: 20px;
                  p{color:#999;font-size: 12px;line-height: 2;}
                }
              }
              .menuConR{flex:1;
                .menuConRTxt{line-height: 2.5;font-size:#999;font-weight: 300}
              }
            }
          }
        }
        .menuRegister{text-align: center;line-height: 3;font-size: 14px;margin-top:70px;}
      }
    }
  }
}
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
