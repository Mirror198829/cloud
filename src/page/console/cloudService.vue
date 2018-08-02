<!-- 
- Author:CaoJing
- Date:2018/7/25
- github:https://github.com/Mirror198829
-->
<template>
  <div id="consoleService" class="clearfix">
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
    <div class="rightSide">asdf</div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      caseLst:[{title:'总数量',num:3},{title:'运行中',num:4},{title:'即将过期',num:1},{title:'已过期',num:8}],
      summaryLst:[{title:'总数量',num:3},{title:'总数量',num:10}],
      status:[{title:'运行中',num:0},{title:'近期创建',num:0},{title:'即将过期',num:0},{title:'已过期',num:0}]
    }
  },
  methods:{

  },
  mounted(){},
  created(){}
}
</script>

<style  scoped lang="less">
@import '../../less/index.less';
@boundary-width:20px;
@right-side-width:380px;
@border-color:#dddddd;
.rightSide{width:@right-side-width;float:right;background-color:red}
.leftSide{width:calc(100% - @right-side-width - @boundary-width);float:left;}
.sectionTitle{text-indent: 8px;border-left: 2px solid @theme-color;margin:8px 0;font-weight: 400;}
.sectionBox{border:1px solid @border-color;box-sizing:border-box;width:calc((100% - @boundary-width) / 2);float:left;margin-bottom:@boundary-width;
  h6{font-weight:400;background-color:#f9f9f9;height:36px;line-height: 36px;text-align:center;font-size:14px;}
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
// 1200>= screen >=992
@media screen and (max-width:1200px){
  #consoleService{}
  .leftSide{float:none;width:100%}
  .rightSide{float:none;width:100%;}
}

@media screen and (max-width:992px){
  #consoleService{}
  .sectionBox{float:none;width:100%}
  .sectionBox:first-child{margin-bottom:@boundary-width;}
}

@media screen and (max-width:768px){

}

@media screen and (max-width:480px){
}
</style>
