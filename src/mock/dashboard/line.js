const Mock = require('mockjs')

function getLine() {
  const line = Mock.mock({
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['邮件营销','联盟广告','搜索引擎']
    },
    grid: {
        show:true,
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    "series|3": [
        {
            "name":['邮件营销','联盟广告','搜索引擎'],
            type:'line',
            "lineStyle":{
              "color|+1":['#fbe18d','#21c392','#4579de']
            },
            "data|7":['@natural(2, 400)']
        }
    ]
})
  return line
}
export default getLine
