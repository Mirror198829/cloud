const Mock = require('mockjs')

function getBar() {
  const bar = Mock.mock({
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['直接访问','邮件营销','联盟广告','Tv']
    },
    grid: {
        show:true,
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['周一'],
            show:false
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    "series|4" : [
        {
            "name|+1":['直接访问','邮件营销','联盟广告','Tv'],
            type:'bar',
            "data|4":['@natural(2, 400)'],
            "itemStyle":{
              "color|+1":['#abe8d6','#63dcb9','#21c397','#2e9675']
            }
        }
    ]
})
  return bar
}
export default getBar
