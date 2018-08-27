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
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      matterLst:[
        {icon:'fa-calendar',num:10,title:'订单待办',color:'#fcc6a7'},
        {icon:'fa-calendar-o',num:134,title:'工单待办',color:'#ee7d90'},
        {icon:'fa-rmb',num:187,title:'待付款',color:'#34d3f1'},
        {icon:'fa-money',num:20,title:'优惠券',color:'#f25f6a'}
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
@boundary:14px;
@font-color:#a7a6ae;
#conOverview{background-color:#f7f4fa;height:100%;box-sizing:border-box;padding:20px;}
#matter{
  display: flex;
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
