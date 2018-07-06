<!-- 
- Author:CaoJing
- Date:2018/7/5
- github:https://github.com/Mirror198829
-->
<template>
  <div class="sectionSolution">
    <div class="solution">
      <div class="solutionHead">
        <h2>为您量身定制解决方案</h2>
        <p>满足广泛的业务需求</p>
      </div>
      <div class="solutionWrap clearfix">
        <div class="solutionNav">
          <ul class="solutionNavs">
            <li class="solutionNavItem" v-for="(item,key) in solutionLst" :class="{'active':key == solutionActive}" @mouseover="addSolutionNavItemActive(key)">
              <h2>{{item.title}}</h2>
            </li>
          </ul>
        </div>
        <div class="solutionDetail">
          <div class="solutionDetailItem" v-for="(item,key) in solutionLst" :class="{'active':key == solutionActive}">
            <h2>{{item.title}}</h2>
            <p>{{item.detail}}</p>
            <div class="knowBtn">
              了解更多 <i class="konwBtnArrow fa fa-angle-right"></i>
            </div>
            <div class="lineTitle">
              <h3>推荐解决方案</h3>
              <span></span>
            </div>
            <ul class="recommandWrap">
              <li class="recommandItem" v-for="(recommandItem,key) in item.recommand">
                <i class="recommandIcon fa" :class="'fa-'+recommandItem.icon"></i>{{recommandItem.title}}
              </li>
            </ul>
            <div class="lineTitle">
              <h3>案例和合作伙伴</h3>
              <span></span>
            </div>
            <div class="recommandWrap">
              <img v-for="(url,key) in item.img" :src="'https://mirror198829.github.io/static/cloud/solution/'+url+'.png'">
            </div>
          </div>
        </div>
      </div>
      <div style="padding:50px 0;">更多解决方案 -></div>
    </div>
  </div>
</template>

<script>
import solutionLst from '../../../mock/solution.js'
export default {
  name: 'solution',
  data () {
    return {
      solutionLst:[],
      solutionActive:0
    }
  },
  methods:{
    getsolutionLst(){
      this.solutionLst = solutionLst.solutionLst
    },
    addSolutionNavItemActive(key){
      this.solutionActive = key
    }
  },
  mounted(){
    this.getsolutionLst()
  },
  created(){}
}
</script>

<style  scoped lang="less">
@import '../../../less/index.less';
@left-sideW:300px;
.sectionSolution{background-color:@base-color;}
.solution{max-width:@max-pcW;width:@max-pcW;margin:0 auto;}
.solutionHead{padding:50px 0;text-align:center;
h2{color:@font-white;font-weight:400;font-size:36px;margin-bottom:10px;}
p{color:#fff;opacity: 0.6;font-size:18px;line-height:22px;}}
.solutionNav{width:@left-sideW;float:left;}
.solutionDetail{width:calc(100% - @left-sideW);float:left;height:200px;
.solutionDetailItem{display:none;margin-top:20px;}
  h2{font-size:22px;line-height:28px;color:@font-white;margin:0 0 15px 0;font-weight:400;}
  p{opacity:0.8;font-size:14px;color:@font-white;line-height:22px;}
  .knowBtn{display:inline-block;border-radius:4px;border:1px solid #FAFBFE;font-size:14px;color:#fafbfe;padding:10px 30px;box-sizing:border-box;cursor: pointer;margin-top:20px;
    .konwBtnArrow{margin-left:10px;position:relative;left:0;transition:all .2s;}
  }
  .lineTitle{
    position:relative;margin:60px 0 20px 0;
    h3{font-size:18px;color:@font-white;width:130px;font-weight:400;}
    span{border-top:1px solid @font-white;opacity:0.2;display:inline-block;width:calc(100% - 145px);position:absolute;margin-left:145px;top:12px;}
  }
}
.knowBtn:hover{
  border-color:@theme-color;color:@theme-color;
  .konwBtnArrow{left:10px;}
}
.solutionNavs{
  .solutionNavItem{box-sizing:border-box;width:240px;background-color:#4b4f63;cursor: pointer;
    h2{color:@font-white;font-weight:400;font-size:18px;line-height:72px;margin-left:20px;}
  }
}
.solutionNavItem.active{width:260px;background-color:@theme-color;position:relative;left:-10px;
 h2{margin-left:30px;}
}
.solutionDetailItem.active{display:block;}
.recommandWrap{display:flex;justify-content:space-between;}
.recommandItem{border:1px solid rgba(255,255,255,0.2);border-radius:2px;height:40px;line-height:40px;padding-left:40px;width:230px;color:@font-white;font-size:14px;cursor: pointer;transition:all .2s;
.recommandIcon{font-size:18px;position:relative;left:-10px;top:2px;}
}
.recommandItem:hover{background-color:#4b4f63;}
// screen >= 1200
@media screen and (min-width:1200px){

}
// 1200>= screen >=992
@media screen and (max-width:1200px){
.solution{width:100%;
  .solutionHead{
    padding:20px 0;
    h2{font-size:21px;}
    p{font-size:14px;color:rgba(255,255,255,.6)}
  }
  .solutionNav{width:100%;
    .solutionNavItem{
      width:100%;
      h2{text-align:center;margin-left:0;font-size:14px;}
    }
  }
  .solutionDetail{display:none;}
 }

 .solutionNavItem.active{background-color:rgba(255,255,255,0);position:relative;left:0;
    h2{margin-left:0;}
  }
}

@media screen and (max-width:992px){
}

@media screen and (max-width:768px){
}

@media screen and (max-width:480px){
}
</style>
