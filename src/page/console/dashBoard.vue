<!-- 
- Author:CaoJing
- Date:2018/8/10
- github:https://github.com/Mirror198829
-->
<template>
  <div id="dashBoard">
    <header>Dashboard</header>
    <main>
      <div class="dashTop">
        <div class="dashLeft">
          <div class="dashGauge">
            <li class="dashGaugeItem">
              <h1 class="chartTitle">Your Business</h1>
              <div class="chartWrap">
                <chart :options="gauge1" class="chart" style="width:100%;height:100%"></chart>
              </div>
            </li>
            <li class="dashGaugeItem">
              <h1 class="chartTitle">Your Business</h1>
              <div class="chartWrap">
                
              </div>
            </li>
          </div>
          <div class="dashProgress"></div>
        </div>
        <div class="dashRight"></div>
      </div>
      <div class="dashBottom">
        <li v-for="(item,key) in 4" class="block">
          <chart :options="polar" style="width:100%;height:100%"></chart>
        </li>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    let data = []
    for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
    }
    return {
      polar: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      },
      gauge1: {
          tooltip : {
              formatter: "{a} <br/>{b} : {c}%"
          },
          toolbox: {
              show:false
          },
          series: [
              {
                  name: '业务指标',
                  type: 'gauge',
                  radius:'100%',
                  min:0,
                  max:10,
                  startAngle:180,
                  endAngle:0,
                  axisLine:{
                    show:false,
                    lineStyle:{
                       color:[[0.2, '#f35235'], [0.4, '#efc942'], [0.6, '#3cd681'], [1, '#green']],
                       width:13
                    }                  
                  },
                  splitLine:{
                    show:false
                  },
                  axisTick:{
                    show:false
                  },
                  axisLabel:{
                    show:false
                  },
                  itemStyle:{
                    color:'#1a1a1a'
                  },
                  detail: {
                    show:false
                  },
                  data: [{value: 3}]
              }
          ]
      }
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
@boundary:20px;
#dashBoard{width:100%;min-height:100%;background-color:#f4f4f4}
header{padding:20px;background-color:#fff;color:@font-theme;}
main{padding:@boundary;}
.dashTop{height:400px;margin-bottom: @boundary;display:flex;}
.dashLeft{flex:2;margin-right: @boundary;display:flex;flex-direction:column;}
.dashRight{flex:3;background-color:#fff;}
.dashGauge{flex:2;margin-bottom:@boundary;display:flex}
.dashGaugeItem{margin-right:@boundary;background-color:#fff;flex:1;display:flex;flex-direction:column;}
.dashGaugeItem:last-child{margin-right:0}
.dashProgress{flex:1.8;background-color:#fff}
.dashBottom{display:flex}
.block{margin-right:@boundary;flex:1;height:350px;background-color:#fff;}
.block:last-child{margin-right:0;}
.chartTitle{font-size:12px;padding:10px;background-color:#fafafa;}
.chartWrap{flex:1;}

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
