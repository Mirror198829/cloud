<!-- 
- Author:CaoJing
- Date:2018/7/2
- github:https://github.com/Mirror198829
-->
<template>
  <div>
     <div class="block" style="margin-top:60px;min-height:1000px;">
      <el-carousel trigger="click" :height="bannerH +'px'">
        <el-carousel-item v-for="(item,index) in bannerImgLst" :key="index">
          <img :src="'https://mirror198829.github.io/static/cloud/'+item" class="bannerImg"/>
        </el-carousel-item>
      </el-carousel>
      <div class="cloudIndexBoxWrap">
        <ul class="cloudIndexBox clearfix">
          <li class="cloudIndexItem" v-for="(item,key) in cloudIndexBoxData" :key="key">
              <h3  v-if="$i18n.locale == 'cn'">{{$t('message.indexData',{'indexData':item.cnTitle})}}</h3>
              <h3  v-if="$i18n.locale == 'en'">{{$t('message.indexData',{'indexData':item.enTitle})}}</h3>
              <p v-if="$i18n.locale == 'cn'">{{$t('message.indexData',{'indexData':item.cnDetail})}}</p>
              <p v-if="$i18n.locale == 'en'">{{$t('message.indexData',{'indexData':item.enDetail})}}</p>
          </li>
        </ul>
      </div>
      <cloud-compute-product style="margin-top:40px;"></cloud-compute-product>
    </div>
  </div>
</template>

<script>
import cloudComputeProduct from './componet/cloudComputeProduct.vue'
export default {
  name: 'homePage',
  components:{
    cloudComputeProduct
  },
  data () {
    return {
      arr:[1,2,3,4],
      bannerH:200,
      bannerImgLst:['navBg1.png','navBg2.png','navBg3.jpg'],
      cloudIndexBoxData:[
        {cnTitle:'免费套餐',enTitle:'Free',cnDetail:'提供40余款高性能云产品，帮助您获得云实践经验',enDetail:'Provide more than 40 high-performance cloud products to help you get cloud experience'},
        {cnTitle:'智慧解决方案',enTitle:'Intelligent solution',cnDetail:'大型展会等人群密集场所的定制方案',enDetail:'A custom plan for crowded places such as large exhibitions and so on'},
        {cnTitle:'阿里云文档开源',enTitle:'Doc open source',cnDetail:'与阿里云文档工程师一起打造机制文档体验',enDetail:'Work together with ALI cloud document engineer'},
        {cnTitle:'业务实时监控',enTitle:'Monitoring&Business',cnDetail:'高效监控大规模分布式应用',enDetail:'Efficient monitoring of large-scale distributed applications'}
      ]
    }
  },
  methods:{
    setBannerH(){
      this.bannerH = document.body.clientWidth / 4
    }
  },
  mounted(){
    this.setBannerH()
    window.addEventListener('resize', () => {
      this.setBannerH()
    }, false)
  },
  created(){}
}
</script>

<style scoped lang="less">
@import '../../less/index.less';
.bannerImg{width:100%;height:100%;}
.cloudIndexBox{max-width:1200px;width:1200px;margin:0 auto;color:#ccc;}
.cloudIndexBoxWrap{width:100%;background-color:#2d3035;}
.cloudIndexItem{width:calc(100% / 4);color:#000;float:left;padding:30px 25px 24px;box-sizing:border-box;cursor: pointer;transition:all .2s;border-left:1px solid #727577;border-color:hsla(0,0%,100%,.06);
 h3{color:@font-white;font-size:16px;margin-bottom:8px;height: 18px;line-height:18px;font-family: @font-family;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}
 p{font-size:14px;color:#9b9ea0;line-height:24px;height:45px;overflow:hidden;}
}
.cloudIndexItem:last-child{border-right: 1px solid #727577;border-color:hsla(0,0%,100%,.06);}
.cloudIndexItem:hover{background-color:#44464e;}
// screen >= 1200
@media screen and (min-width:1200px){}
// 1200>= screen >=992
@media screen and (max-width:1200px){
.cloudIndexBox{width:80%}

}

@media screen and (max-width:992px){
}

@media screen and (max-width:768px){
.cloudIndexItem{width:calc(100% / 2);border-left:none;}
.cloudIndexItem:last-child{border-right:none;}
}

@media screen and (max-width:480px){

}
</style>
