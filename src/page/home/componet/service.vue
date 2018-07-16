<!-- 
- Author:CaoJing
- Date:2018/7/2
- github:https://github.com/Mirror198829
-->
<template>
  <div style="background-color:#fff;">
    <div class="sectionWrap">
      <section-title my-title="为您臻选优质软件和服务" my-sub-title="汇聚万千应用的一站式云服务平台" my-color="#3B516A"></section-title>
    </div>
    <div class="serviceWrap clearfix">
       <li class='serviceItem serviceFirst'>
         <h4>严选商城</h4>
         <div class="serviceAdIcon"><i class="fa fa-shopping-bag"></i></div>
         <p>— 华为云市场 —</p>
         <p>华为严选 为你而选</p>
       </li>
       <li class="serviceItem" v-for="(item,key) in serviceData">
         <div class="serviceImg">
           <img :src="item.icon" style="width:48px;height:48px;"/>
         </div>
         <h3>{{item.title}}</h3>
         <p v-for="(content,key) in item.detail">{{content}}</p>
       </li>
    </div>
    <div class="forMore">
      <for-more formore-content="查看更多云应用" formore-url="https://app.huaweicloud.com/"></for-more>
    </div>
  </div>
</template>

<script>
import sectionTitle from './sectionTitle.vue'
import forMore from './forMore.vue'
export default {
  name: '',
  components:{
    sectionTitle,
    forMore
  },
  data () {
    return {
      serviceData:[
        {'icon':'https://mirror198829.github.io/static/cloud/service/cloud.png','title':'企业上云严选馆','detail':['解放云盘','文档管理系统','云视频会议']},
        {'icon':'https://mirror198829.github.io/static/cloud/service/video.png','title':'视频严选馆','detail':['视频云服务套餐','媒体云新闻媒体生产服务','媒体云互联网直播服务']},
        {'icon':'https://mirror198829.github.io/static/cloud/service/site.png','title':'建站严选馆','detail':['一画建站','万户网络网站定制','小程序社交电商解决方案']}
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
.sectionWrap,.forMore{padding:50px 0;background-color:#fff;}
.serviceWrap{max-width:@max-pcW;width:@max-pcW;margin:0 auto;background-color:#fff;
  .serviceItem{float:left;width:calc(100% / 4);height:340px;box-sizing:border-box;cursor: pointer;
    .serviceImg{text-align:center;margin-top:80px;}
    h3{text-align:center;font-weight:400;margin-top:25px;margin-bottom:44px;font-size:18px;color:#34475f;cursor: pointer;
      &:hover{color:@theme-color;}
    }
    p{text-align:center;color:#8a8d93;font-size:14px;cursor: pointer;
      &:hover{color:@theme-color;}
    }
    &:hover{box-shadow: 1px 1px 10px 1px #ccc}
  }
}
.serviceItem.serviceFirst{background-color:#edc273;
  &:hover{box-shadow:none;}
  h4{color:@font-white;font-size:28px;text-align:center;margin-top:80px;}
  .serviceAdIcon{font-size:28px;color:@font-white;text-align:center;margin-top:15px;margin-bottom:40px;}
  p{color:@font-white;margin-top:5px;
    &:hover{color:@font-white}
  }
}

// screen >= 1200
@media screen and (min-width:1200px){

}
// 1200>= screen >=992
@media screen and (max-width:1200px){
  .sectionWrap{padding:20px 15px;}
  .forMore{padding:10px 0;}
  .serviceWrap{width:90%;
    .serviceItem{width:calc( (100% - 20px) / 2);margin:5px;box-shadow: 1px 1px 10px 1px #ccc;
      
    }
  }
  .serviceItem.serviceFirst{
    &:hover{
      box-shadow:1px 1px 10px 1px #ccc;
    }
  }
}

@media screen and (max-width:992px){

}

@media screen and (max-width:768px){
  .serviceWrap{
   .serviceItem{height:200px;
      .serviceImg{margin-top:30px;}
      h3{margin-top:10px;margin-bottom:10px;}
      p{display:block;}
   }
  }
  .serviceItem.serviceFirst{
    h4{
      font-size:20px;margin-top:30px;
    }
  }
}

@media screen and (max-width:480px){
  .serviceWrap{
    .serviceItem{height:200px;
      .serviceImg{margin-top:50px;}
      h3{margin-top:15px;font-size:14px;}
      p{display:none;}
    }
  }
  .serviceItem.serviceFirst{
    h4{
      font-size:20px;margin-top:60px;
    }
  }
}
</style>
