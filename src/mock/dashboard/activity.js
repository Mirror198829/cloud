const Mock = require('mockjs')

function getActivity() {
  const activity = Mock.mock({
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    grid:{
      show:true
    },
    series: [{
      "data|7": [
        '@natural(2, 1000)'
      ],
      type: 'line',
      smooth: true,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: '#70f8d0' // 0% 处的颜色
          }, {
            offset: 1,
            color: '#49bd9a' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
        }
      },
      lineStyle:{
        color:"#70f8d0"
      },
      itemStyle:{
        color:"#10bd88",
        borderWidth:3
      }
    }]
  })
  return activity
}
export default getActivity
