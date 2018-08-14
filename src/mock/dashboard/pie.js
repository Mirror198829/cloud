const Mock = require('mockjs')

function getPie() {
  const pie = Mock.mock({
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'top',
        data:['infor1','infor2','infor3']
    },
    calculable : true,
    series : [
        {
            name:'面积模式',
            type:'pie',
         
            roseType : 'area',
            "data|3":[{
                "value|1-10":0, 
                "name|+1":['infor1','infor2','infor3'],
                "itemStyle":{
                    "color|+1":['#a2e6d1','#369a7e','#d4d5d9']
                }
             }]
        }
    ]
})
  return pie
}
export default getPie
