const Mock = require('mockjs')
const resourceData = Mock.mock({
  "data|4-6": [{
      "title":"@ctitle",
      "region":"@province",
      "num|2-20":0,
      "time":'@date("yyyy/MM")',
      "disk|2-10":0,
      "image|10-100":0,
      "cpu|100-400":0,
      "status|4":[{
      	"title|+1":['运行中','近期创建','即将过期','已过期'],
      	"num|2-10":0
      }]
    }
  ]
})
export default resourceData