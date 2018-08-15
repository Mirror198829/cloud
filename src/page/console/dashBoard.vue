<!-- 
- Author:CaoJing
- Date:2018/8/14
- github:https://github.com/Mirror198829
-->
<template>
  <div id="dashBoard">
    <header>Dashboard</header>
    <main>
      <div class="dashTop">
        <div class="dashLeft">
          <div class="dashGauge">
            <li class="dashGaugeItem chartSection">
              <h1 class="chartTitle">Your Business</h1>
              <div class="chartWrap">
                <div class="gauHead">
                  <span class="gauNum">{{gauge1.series[0].data[0].value}}</span>/10<i class="gauTag">Far</i>
                </div>
                <chart :options="gauge1" class="chart" style="width:100%;height:100%;position:relative;top:40px;"></chart>
              </div>
            </li>
            <li class="dashGaugeItem chartSection">
              <h1 class="chartTitle">Industry Average</h1>
              <div class="chartWrap">
                <div class="gauHead">
                  <span class="gauNum" style="color:#1ebe8e;">{{gauge1.series[0].data[0].value}}</span>/10<i class="gauTag"  style="background-color:#1ebe8e;">Good</i>
                </div>
                <chart :options="gauge2" class="chart" style="width:100%;height:100%;position:relative;top:40px;"></chart>
              </div>
            </li>
          </div>
          <ul class="dashProgress">
            <li class="progressItem" v-for="(item,key) in progress">
              <i class="progressIcon fa" :class="item.icon"></i>
              <span class="progressTitle">{{item.title}}</span>
              <div class="progress">
                <div :style="'width:' + item.percent*10 + '%'"></div>
                <span class="percent">{{item.percent}}/10</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="dashRight chartSection">
          <h1 class="chartTitle">Latest Activities</h1> 
          <div class="chartWrap">
                <chart :options="activity" class="chart" style="width:100%;height:100%"></chart>
          </div>
        </div>
      </div>
      <div class="dashBottom">
        <li class="block chartSection">
          <h1 class="chartTitle">Aesthetics</h1>
          <div class="chartWrap">
            <chart :options="bar" class="chart" style="width:100%;height:100%"></chart>
          </div>
        </li>
        <li class="block chartSection">
          <h1 class="chartTitle">Navigation</h1>
          <div class="chartWrap">
            <chart :options="pie" class="chart" style="width:100%;height:100%"></chart>
          </div>
        </li>
        <li class="block chartSection">
          <h1 class="chartTitle">Speed</h1>
          <div class="chartWrap">
            <chart :options="stack" class="chart" style="width:100%;height:100%"></chart>
          </div>
        </li>
        <li class="block chartSection">
          <h1 class="chartTitle">Searchbility</h1>
          <div class="chartWrap">
            <chart :options="line" class="chart" style="width:100%;height:100%"></chart>
          </div>
        </li>
      </div>
    </main>
  </div>
</template>

<script>
import getGaugeOne from  '../../mock/dashboard/gauge.js'
import getActivity from '../../mock/dashboard/activity.js'
import getProgress from '../../mock/dashboard/progress.js'
import getBar from '../../mock/dashboard/bar.js'
import getLine from '../../mock/dashboard/line.js'
import getStack from '../../mock/dashboard/stack.js'
import getPie from '../../mock/dashboard/pie.js'
import getGaugeTwo from '../../mock/dashboard/gauge2.js'
export default {
  name: '',
  data () {
    return {
      gauge1:{},
      gauge2:{},
      activity:{},
      progress:[],
      bar:{},
      line:{},
      stack:{},
      pie:{}
    }
  },
  methods:{
    getData(){
      this.gauge1 = getGaugeOne()
      this.activity =  getActivity()
      this.progress = getProgress().data
      this.bar = getBar()
      this.line = getLine()
      this.stack = getStack()
      this.pie = getPie()
      this.gauge2 = getGaugeTwo()
    },
    setIntervalData(){
      setInterval(()=>{
        this.getData()
      },700)
    }
  },
  mounted(){
    this.getData()
    this.setIntervalData()
  },
  created(){}
}
</script>

<style  scoped lang="less">
@import '../../less/index.less';
@boundary:20px;
#dashBoard{width:100%;min-height:100%;background-color:#f4f4f4}
header{padding:20px;background-color:#fff;color:@font-theme;}
main{padding:@boundary;}
.dashTop{margin-bottom: @boundary;display:flex;}
.dashLeft{flex:2;margin-right: @boundary;display:flex;flex-direction:column;height:400px;}
.dashRight{flex:3;background-color:#fff;height:400px;}
.dashGauge{flex:2;margin-bottom:@boundary;display:flex;}
.dashGaugeItem{margin-right:@boundary;background-color:#fff;flex:1;}
.dashGaugeItem:last-child{margin-right:0}
.dashProgress{flex:1.8;background-color:#fff}
.dashBottom{display:flex;}
.block{margin-right:@boundary;height:350px;background-color:#fff;width:calc( ( 100% - @boundary * 3 ) / 4)}
.block:last-child{margin-right:0;}
.chartSection{display:flex;flex-direction:column;
  .chartTitle{font-size:12px;padding:10px;background-color:#fafafa;}
  .chartWrap{flex:1;padding:15px;box-sizing:border-box;position:relative;}
}
.dashProgress{box-sizing: border-box;padding:20px 15px;display:flex;flex-direction:column;
  .progressItem{flex:1;padding:10px;display:flex;align-items: center;
    .progressIcon{margin-right:5px;width:20px;}
    .progressTitle{margin-right:25px;font-size:14px;font-weight: 700;width:90px;}
    .progress{position:relative;flex:1;background-color: #f2f2f2;height:8px;
      div{height:100%;background:linear-gradient(to right,#ee4e3e,#cd6049,#31ba8e,#28c193);width:0;transition:all .2s;}
      .percent{position: absolute;right:0;top:-18px;font-size:13px;color:#566771}
    }
  }
}
.gauHead{position:absolute;text-align:center;top:15px;left:50%;transform:translateX(-50%);font-size:14px;
  .gauNum{font-size:20px;color:#ff9900}
  .gauTag{display:inline-block;color:#fff;padding:0px 5px;background-color:#ff9900;font-size:12px;border-radius:5px;margin-left:10px;}
}

// screen >= 1200
@media screen and (min-width:1200px){

}
// 1200>= screen >=992
@media screen and (max-width:1200px){
.dashTop{display:block;}
.dashLeft{width:100%;margin-bottom:@boundary;}
.dashRight{width:100%;}
.dashBottom{width:100%;flex-wrap:wrap;}
.block{margin-right:@boundary;width:calc( ( 100% - @boundary ) / 2);}
.block:nth-child(2n){margin-right:0}
.block:nth-child(1){margin-bottom:20px;}
.block:nth-child(2){margin-bottom:20px;}
}

@media screen and (max-width:992px){
  
}

@media screen and (max-width:768px){
  .dashLeft{display:block;height:510px;}
  .dashGauge{width:100%;display:block;}
  .dashGaugeItem{margin-right:0;margin-bottom:@boundary;height:157px;}
  .block{margin-right:0;width:100%;margin-bottom:20px;}
  .block:last-child{margin-bottom:0;}
}
@media screen and (max-width:480px){
  .dashProgress{padding:10px 5px;height:157px;
  .progressItem{padding:5px;
    .progressIcon{margin-right:3px;width:12px;font-size:12px;}
    .progressTitle{margin-right:5px;font-size:12px;width:70px;}
    .progress{height:7px;
      .percent{font-size:12px;}
    }
  }
}
}
</style>
