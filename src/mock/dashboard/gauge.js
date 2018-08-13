const Mock = require('mockjs')

function getGauge() {
  const gauge = Mock.mock({
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
        show: false
      },
      series: [{
        name: '业务指标',
        type: 'gauge',
        radius: '100%',
        min: 0,
        max: 10,
        startAngle: 270,
        endAngle: 0,
        axisLine: {
          show: false,
          lineStyle: {
            color: [
              [0.2, '#f35235'],
              [0.4, '#efc942'],
              [0.6, '#3cd681'],
              [1, '#green']
            ],
            width: 13
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        itemStyle: {
          color: '#1a1a1a'
        },
        detail: {
          show: false
        },
        data: [{
          "value|1-10": 0
        }]
      }]
  })
  return gauge
}
export default getGauge
