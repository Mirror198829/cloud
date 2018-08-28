<!-- 
- Author:CaoJing
- Date:2018/8/27
- github:https://github.com/Mirror198829
-->
<template>
  <div id="conOverview">
    <ul id="matter">
      <li class="userInfo matterItem">
        <div class="userDetail">
          <div class="userImg"></div>
          <span class="userName">Admin</span>
        </div>
        <div class="userInfoRight">
          <p class="userInfoNum"><span style="font-size:14px;">余额</span> &nbsp<span style="font-size:20px;">￥160</span></p>
          <div class='userBtn'>立即充值</div>
        </div>
      </li>
      <li v-for="(item,key) in matterLst" class="matterBlock matterItem">
        <div class="icon" :style="{backgroundColor:item.color}">
          <i class="fa matterIcon" :class="item.icon"></i>
        </div>
        <div class="matterRight">
          <p class="matterNum">{{item.num}}</p>
          <p class="matterTitle">{{item.title}}</p>
        </div>
      </li>
    </ul>
    <div id="main">
      <div class="project mainItem">
        <div class="subHead">
          <h1 class="subHeadTitle">我的项目</h1>
          <div class="subHeadBtn">创建项目</div>
        </div>
        <div class="subBtnWrap">
          <ul class="btnLst">
            <li class="btnItem active">所有</li>
            <li class="btnItem">我管理的</li>
            <li class="btnItem">我参与的</li>
          </ul>
        </div>
        <ul class="projectLst">
          <li class="projectItem" v-for="(item,key) in 9">
            <div class="prjItemLeft"></div>
            <div class="prjItemRight">
              <p class="prjT1">Cloud hosting</p>
              <p class="prjT2">Kavien</p>
              <p class="prjT3">woke data</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="resource mainItem">
        <div class="subHead">
          <h1 class="subHeadTitle">资源配额使用情况</h1>
          <div class="subHeadBtn">申请配额</div>
        </div> 
        <ul class="rscLst">
          <li class="rscItem" v-for="item in resLst">
            <h3 class="rscTitle">{{item.title}}</h3>
            <div class="progress">
              <div class="progressActive" :style="{'width':item.percent+'%'}"></div>
            </div>
          </li>
        </ul>      
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import getRes from '../../mock/overview/resource.js'
export default {
  name: '',
  data () {
    return {
      matterLst:[
        {icon:'fa-calendar',num:10,title:'订单待办',color:'#fcc6a7'},
        {icon:'fa-calendar-o',num:134,title:'工单待办',color:'#ee7d90'},
        {icon:'fa-rmb',num:187,title:'待付款',color:'#34d3f1'},
        {icon:'fa-money',num:20,title:'优惠券',color:'#f25f6a'}
      ],
      resLst:[]
    }
  },
  methods:{
    getRes(){
      this.resLst = getRes().data
    }
  },
  mounted(){
    this.getRes()
    setInterval(()=>{
      this.getRes()
    },1000)
  },
  created(){}
}
</script>

<style  scoped lang="less">
@boundary:14px;
@font-color:#a7a6ae;
@gray-color:#ebebeb;
#conOverview{background-color:#f7f4fa;height:100%;box-sizing:border-box;padding:20px;}
#matter{
  display: flex;margin-bottom:@boundary;
  .matterItem{margin-right: @boundary;box-shadow: 1px 1px 1px 1px #ccc;flex:1;padding:15px 10px;background-color:#fff;
    &.userInfo{flex:2;display:flex;justify-content:space-between;
      .userDetail{display:flex;
        .userImg{width:54px;height:54px;border-radius:100%;background: url('../../assets/console/userImg.jpg') no-repeat center center;background-size: cover;}
        .userName{color:@font-color;position:relative;top:18px;margin-left: 10px;}
      }
      .userInfoRight{
        .userInfoNum{text-align:right;color:@font-color;position:relative;bottom:3px;}
        .userBtn{width:90px;background-color:#95dfd8;border-radius:28px;height:28px;line-height: 28px;color:#fff;text-align:center;position:relative;top:3px;}
      }
    }
    &:last-child{margin-right:0}
  }
  .matterBlock{display:flex;justify-content:space-between;
    .icon{width:54px;height:54px;background-color:red;border-radius: 100%;color:#fff;display:flex;justify-content:center;align-items:center;;
      .matterIcon{font-size:28px;}
    }
    .matterRight{text-align: right;
      .matterNum{color:@font-color;font-size:23px;position: relative;bottom:3px;}
      .matterTitle{color:@font-color;font-size:14px;position: relative;top:3px;}
    } 
  }  
} 
#main{display:flex;
  @base-color:#95dfd8;
 .mainItem{padding:10px;
   .subHead{display:flex;justify-content:space-between;
    .subHeadTitle{color:@font-color;font-weight: 400;font-size:18px;}
    .subHeadBtn{border:1px solid @base-color;color:@base-color;padding:2px 10px;border-radius:15px;font-size:14px;}
   }
 }
 .project{flex:3;margin-right:@boundary;background-color:#fff;
   .projectLst{display:flex;flex-wrap:wrap;
      @bj-color:#f6f5fa;
      .projectItem{width:calc((100% - 2 *@boundary)  / 3);margin-right:@boundary;background-color:#fff;margin-bottom:@boundary;border:1px solid darken(@bj-color,5%);box-sizing:border-box;display:flex;
        &:nth-child(3n){margin-right:0;}
        .prjItemLeft{width:80px;box-sizing:border-box;border-right:1px solid darken(@bj-color,5%);padding:10px 5px;background:url('../../assets/console/room.png') no-repeat center center;background-size:70%;}
        .prjItemRight{flex:1;padding:10px 5px 10px 20px;background-color:@bj-color;
          .prjT1{color:@font-color;}
          .prjT2{color:@font-color;font-size:12px;position:relative;top:5px;}
          .prjT3{color:@font-color;font-size:12px;margin-top:10px;}
        }
      }
    }
   .subBtnWrap{display:flex;margin:25px 0 15px;
    .btnLst{display:flex;border-radius:5px;overflow:hidden;border:1px solid @base-color;
      .btnItem{border-right:1px solid @base-color;color:@base-color;font-size:12px;padding:5px 20px;
        &:last-child{border-right:0px;}
        &.active{background-color:@base-color;color:#fff;}
      }
    }
   }
 }
 .resource{flex:2;background-color:#fff;display:flex;flex-direction:column;
   .rscLst{display:flex;flex-direction:column;flex:1;margin-top:20px;
    .rscItem{flex:1;
      .rscTitle{font-size:12px;color:@font-color;margin-bottom:5px;}
      .progress{background-color:@gray-color;height:15px;border-radius:15px;position:relative;overflow:hidden;
        .progressActive{height:100%;background-color:#ffbad0;position:absolute;left:0;right:0;transition:all .2s;}
      }
    }
   }
 }
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
