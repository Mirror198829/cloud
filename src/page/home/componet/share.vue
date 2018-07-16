<!-- 
- Author:CaoJing
- Date:2018/7/10
- github:https://github.com/Mirror198829
-->
<template>
  <div class="section" style="background-color:#fff">
    <div class="sectionWrap">
      <section-title my-title="知识分享的开发者技术社区" my-sub-title="技术、云圈、大咖" my-color="#3B516A"></section-title>
    </div>
    <ul class="forumBody clearfix">
      <li class="forumItem" v-for="(item,key) in forumLst">
        <div class="forumHead">
          <h4 class="forumHeadTitle">
            {{item.title}} 
            <span class="forumHeadSubTitle">{{item.subTitle}}</span>
          </h4>
          <p class="forumHeadEnTitle">{{item.enTitle}}</p>
        </div>
        <ul class="forumBody">
          <li v-for="(detail,key) in item.detail" class="clearfix">
            <span :title="detail.title" class="forumBodyTitle">{{detail.title}}</span>
            <span class="forumBodyTime">{{detail.time}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import sectionTitle from './sectionTitle.vue'
export default {
  name: 'share',
  components:{
    sectionTitle
  },
  data () {
    return {
      forumLst:[
        {
          title:'技术',
          subTitle:'实践',
          enTitle:'TECHNICAL PRACTICE',
          detail:[
            {title:'GO语言实现 自动登陆华为云并获取cookies 详解（兼介绍SSO单点登陆）',time:'2018/05/25'},
            {title:'基于华为云的一个典型的持续部署方案',time:'2018/05/03'},
            {title:'Git on 华为云DevCloud',time:'2018/04/26'}
          ]
        },
        {
          title:'云圈',
          subTitle:'热点',
          enTitle:'HOT SPOTS',
          detail:[
            {title:'【火爆】 为华为云女郎打call，抢万元好礼和赢华为手机等精美礼品！',time:'2018/06/04'},
            {title:'【征集】 云市场·好伙伴·好文案',time:'2018/05/21'},
            {title:'【招聘】 华为Cloud BU都招哪些岗位',time:'2018/05/19'}
          ]
        },
        {
          title:'大咖',
          subTitle:'分享',
          enTitle:'EXPERTS SHARE',
          detail:[
            {title:'提交代码这点事————从个人户到大兵团',time:'2018/05/14'},
            {title:'深入解密华为企业级为服务架构的实践之道',time:'2018/04/27'},
            {title:'解析区块链落地公有云服务的四要以',time:'2018/04/25'}
          ]
        }
      ]
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
.section{max-width:@max-pcW;width:@max-pcW;margin:0 auto;padding-bottom:50px;}
.sectionWrap{padding:50px 0}
.forumItem{width:calc( (100% - 20px ) / 3);float:left;margin:5px;
  &:first-child{margin-left:0px}
  &:last-child{margin-right: 0px}
  .forumHead{height:77px;background-color:#5A5C74;border-radius:2px 2px 0 0;color:rgba(255,255,255,.8);padding-top:15px;box-sizing:border-box;
    .forumHeadTitle{height:30px;line-height:30px;padding-left:30px;font-size:20px;letter-spacing: 0.8px;color:@font-white;position:relative;
      &:after{content:'';display:block;width:2px;height:21px;background-color:@theme-color;position:absolute;left:20px;top:5px;}
      .forumHeadSubTitle{color:rgba(255,255,255,.8);font-weight:400;}
    }
    .forumHeadEnTitle{padding-left:30px;font-size:16px;line-height:20px;}
  }
  .forumBody{padding:10px 20px;border:1px solid #eee;background-color:@font-white;box-sizing:border-box;
    li{border-bottom:1px dashed rgba(52,71,95,.3);color:#3b516a;padding:10px 0;box-sizing:border-box;
      &:last-child{border-bottom:none;}
      .forumBodyTitle{float:left;width:calc(100% - 70px);font-size:14px;line-height:22px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
      .forumBodyTime{float:right;width:65px;font-size:12px;color:#95989D;position:relative;top:2px;}
    }

  }
}
// screen >= 1200
@media screen and (min-width:1200px){

}
// 1200>= screen >=992
@media screen and (max-width:1200px){
  .section{width:90%;}
  .sectionWrap{padding:10px 0}
  .forumItem{width:100%;margin:10px 0;}
}

@media screen and (max-width:992px){
}

@media screen and (max-width:768px){
}

@media screen and (max-width:480px){
}
</style>
