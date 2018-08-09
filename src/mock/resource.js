const Mock = require('mockjs')
const resourceData = Mock.mock({
  "data|10-12": [{
      "title":"@ctitle",
      "region":"@province",
      "num|2-50":"@number",
      "time":'@date("yyyy/MM")',
      "status|4":[{
      	"title|+1":['运行中','近期创建','即将过期','已过期'],
      	"num|2-10":"@number"
      }]
    }
  ]
})
export default resourceData