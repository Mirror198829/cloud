<!-- 
- Author:CaoJing
- Date:2018/8/9
- github:https://github.com/Mirror198829
-->
<template>
  <div id="consoleService">
    <div class='leftSide'>
      <div class="section">
        <h5 class="sectionTitle">综述</h5>
        <div class="sectionBody clearfix">
          <div class="sectionBox">
            <h6>实例</h6>
            <ul class="clearfix sectionBoxBody">
              <li class="caseItem" v-for="item in caseLst">
                <h2 class="caseItemTitle">{{item.title}}</h2>
                <p class="caseItemNum">{{item.num}}</p>
              </li>
            </ul>
          </div>
          <div class="sectionBox">
            <h6>快照</h6>
            <ul class="clearfix sectionBoxBody">
              <li class="summaryItem" v-for="(item,index) in summaryLst">
                <h2 class="summaryTitle">{{item.title}}</h2>
                <p class="summaryNum">{{item.num}}<span v-if="index == 0" class="unit">GB</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="section" id="myResource">
        <h5 class="sectionTitle">我的资源</h5>
        <div class="sectionBody clearfix">
          <div class="sectionBox"  v-for="(item,key) in 10">
            <h6>亚太东北1（东京）</h6>
            <div class="sectionBoxBody">
              <div class="resourceInfo">
                <div class="resourceLeftSide">云服务器<span class="rscTotal">0</span></div>
                <ul class="resourceStatusLst">
                  <li class="statusItem" v-for="(item,key) in status"><i class="statusIcon"></i>{{item.title}}<span class="statusNum">{{item.num}}</span></li>
                </ul>
              </div>
              <div class="rscFooter">
                <span class="rscFooterItem">磁盘0</span>
                <span class="rscFooterItem">快照 0GB/0</span>
                <span class="rscFooterItem">镜像0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="middleLine"></div>
    <div class="rightSide">
      <div class="section">
        <h5 class="sectionTitle">资源概览</h5>
        <a class="summary">
          <i class="fa fa-bar-chart sumIcon"></i>
          <p class="sumTitle">资源概览</p>
        </a>
      </div>
      <div class="section">
        <h5 class="sectionTitle">常用操作</h5>
        <div class="sectionBody clearfix">
          <ul class="operateWrap">
            <li class="operateItem" v-for="(item,key) in operateLst">{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="section">
        <h5 class="sectionTitle">重要提醒</h5>
        <div class="sectionBody clearfix">
          <div class="noticeWrap">
            <i class="fa fa-question-circle-o"></i>
            <div>怎么样才能做好云上运维？助力运维同学“不背锅”！ECS主动运维能力升级，助力用户获得稳定、开放、弹性、透明的运维体验</div>
          </div>
        </div>
      </div>
      <div class="section">
        <h5 class="sectionTitle">近期重要功能</h5>
        <div class="sectionBody" style="padding: 15px 10px;background:#f9f9f9">
          <ul class="importFun">
            <h3>2018</h3>
            <li class="funItem" v-for="(item,key) in importFunData">
              <div class="funItemLeft">
                <i class="funItemIcon"></i>
                <div class="funItemLine"></div>
              </div>
              <div class="funItemRight">
                <div>
                  <i class="fa fa-link"></i>
                  <span v-if="key < 6">【新功能】</span>
                  <span>{{item.title}}</span>
                  <i  v-if="key < 6" class="new">New</i>
                </div>
                <p class="funItemRightTime">{{item.time}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import importFunData from '../../mock/importFun.js'
export default {
  name: '',
  data () {
    return {
      caseLst:[{title:'总数量',num:3},{title:'运行中',num:4},{title:'即将过期',num:1},{title:'已过期',num:8}],
      summaryLst:[{title:'总数量',num:3},{title:'总数量',num:10}],
      status:[{title:'运行中',num:0},{title:'近期创建',num:0},{title:'即将过期',num:0},{title:'已过期',num:0}],
      operateLst:['续费管理','设置','待处理事件','查看特权'],
      importFunData:[]
    }
  },
  methods:{
    getImportFunData(){
      this.importFunData = importFunData.data
    }
  },
  mounted(){
    this.getImportFunData()
  },
  created(){}
}
</script>

<style  scoped lang="less">
@import '../../less/index.less';
@boundary-width:20px;
@right-side-width:380px;
@border-color:#dddddd;
@sub-theme:#f9f9f9;
@fun-color:#d8d8d8;
#consoleService{width:100%;display:flex;}
.middleLine{width:1px;background-color:@border-color;margin:0 20px;}
.rightSide{flex:2}
.leftSide{flex:7}
.sectionTitle{text-indent: 8px;border-left: 2px solid @theme-color;margin:8px 0;font-weight: 400;}
.sectionBox{border:1px solid @border-color;box-sizing:border-box;width:calc((100% - @boundary-width) / 2);float:left;margin-bottom:@boundary-width;
  h6{font-weight:400;background-color:@sub-theme;height:36px;line-height: 36px;text-align:center;font-size:14px;}
  &:first-child{margin-right:@boundary-width}
  .sectionBoxBody{padding:5px 10px;}
}
.caseItem{float:left;width:calc(100% / 4);box-sizing:border-box;border-right: 1px solid @border-color;
  .caseItemTitle{font-weight:400;text-align:center;font-size:14px;margin-bottom:5px;}
  .caseItemNum{font-size:30px;text-align:center;}
}
.caseItem:nth-child(n+3) .caseItemNum{color:red}
.caseItem:nth-child(n+3) .caseItemTitle{color:#06C}
.caseItem:nth-child(2) .caseItemNum{color:#090}
.caseItem:nth-child(1) .caseItemNum{color:#09C}
.caseItem:last-child{border-right:0;}
.summaryItem{float:left;width:calc(100% / 2);box-sizing:border-box;border-right: 1px solid @border-color;
  .summaryTitle{font-weight:400;text-align:center;font-size:14px;margin-bottom:5px;}
  .summaryNum{font-size:30px;text-align:center;color:#09C;}
}
.summaryItem:last-child{border-right:0;}
.unit{color:#CCC;font-size:25px;}
#myResource .sectionBox:nth-child(2n+1){margin-right:@boundary-width;}
.resourceInfo{border-bottom:1px dashed @border-color;display: flex;height:115px;padding:15px 0}
.resourceLeftSide,.resourceStatusLst{width:100%;height:100%;box-sizing:border-box;padding:0 20px;}
.resourceLeftSide{border-right:1px dashed @border-color;line-height:115px;font-size:14px;color:#333;}
.rscTotal{color:#09C;font-size:30px;margin-left:20px;}
.rscFooter{padding:10px 0 5px;display:flex;}
.rscFooterItem{flex:1;text-align:center;font-size: 14px;color:#999999}
.statusItem{font-size:14px;padding:5px 0}
.statusIcon{display:inline-block;width:12px;height:12px;border-radius: 100%;background-color:#35cd03;margin-right:10px;position: relative;top:1px;}
.statusNum{margin-left:10px;}
.resourceStatusLst .statusItem:nth-child(2) .statusIcon{background-color:#999999}
.resourceStatusLst .statusItem:nth-child(n+3) .statusIcon{background-color:#fd0202}
.resourceStatusLst .statusItem:nth-child(n+3) .statusNum{color:#fd0202}
//右边样式 
.summary{display:inline-block;padding:7px 15px;border:1px solid @border-color;text-align:center;background-color:@sub-theme;margin:8px 0}
.sumIcon{color:@theme-color;font-size:20px;}
.sumTitle{font-size:13px;margin-top:5px;}
.operateWrap{width:100%;display:flex;flex-wrap:wrap}
.operateItem{width:calc( (100% - 15px)  / 2 );padding:5px 0;font-size:12px;text-align:center;background-color:@sub-theme;border:1px solid @border-color;box-sizing:border-box;margin:2px 0;margin-right:15px;cursor: pointer;
  &:hover{background-color:#fff;}
}
.operateItem:nth-child(2n){margin-right:0;}
.noticeWrap{display:flex;padding:10px;border:1px solid @border-color;background-color:#F2FFEA;color:#090;font-size:12px;
  i{font-size:16px;margin-right:5px;}
}
.importFun{background-color:@sub-theme;max-height:500px;overflow: auto;
  h3{font-size:12px;color:#999;font-weight:400;}
  .funItem{display:flex;margin-bottom:10px;cursor: pointer;
    .funItemLeft{display:flex;text-align:center;flex-direction:column;margin-right:10px;
      .funItemIcon{display:block;width:10px;height:10px;border-radius:100%;background-color:@fun-color;margin-bottom:2px;}
      .funItemLine{width:1px;flex:1;background-color:@fun-color;position:relative;left:4px;}
    }
    .funItemRight{flex:1;font-size:12px;color:#4f5357;
      .funItemRightTime{color:#999;margin-top:7px;}
      .new{display:inline-block;padding:1px 5px;background-color:#f4542a;color:#fff;border-radius:4px;margin-left:7px;}
    }
    &:hover .funItemIcon{background-color:@theme-color;}
    &:hover .funItemRight{color:@theme-color;
        .funItemRightTime{color:@theme-color;}
    }
  }
  .funItem:last-child{margin-bottom:0px;}
}
// 1200>= screen >=992
@media screen and (max-width:1200px){
  #consoleService{display:block}
  .middleLine{display:none;}
  .leftSide{width:100%}
  .rightSide{width:100%;}
}

@media screen and (max-width:992px){
  #consoleService{}
  .sectionBox{width:100%}
  .sectionBox:first-child{margin-bottom:@boundary-width;}
}

@media screen and (max-width:768px){

}

@media screen and (max-width:480px){
}
</style>
