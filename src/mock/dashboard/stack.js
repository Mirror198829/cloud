const Mock = require('mockjs')

function getStack() {
  const stack = Mock.mock( {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
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
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    "series|3" : [
        {
            "name|+1":['邮件营销','联盟广告','视频广告'],
            type:'bar',
            stack: '广告',
            "itemStyle":{
                "color|+1":['#21c392','#4579de','#fbe18d']
            },
            "data|7":['@natural(2, 50)']
        }
    ]
})
  return stack
}
export default getStack
