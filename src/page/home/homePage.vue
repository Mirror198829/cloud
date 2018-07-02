<!-- 
- Author:CaoJing
- Date:2018/7/2
- github:https://github.com/Mirror198829
-->
<template>
  <div>
     <div class="block" style="margin-top:60px;height:1000px;background-color:#333">
      <el-carousel trigger="click" :height="bannerH +'px'">
        <el-carousel-item v-for="(item,index) in bannerImgLst" :key="index">
          <img :src="'https://mirror198829.github.io/static/cloud/'+item" class="bannerImg"/>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
      bannerH:200,
      bannerImgLst:['navBg1.png','navBg2.png','navBg3.jpg']
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
.imgBlock{width:100%;height:100%;background-image: url('../../assets/home/navBg3.jpg');background-position: center center;background-repeat: no-repeat;background-size: 100% 100%}
.bannerImg{width:100%;height:100%;}
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
