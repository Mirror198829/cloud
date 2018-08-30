const Mock = require('mockjs')
const productLst = Mock.mock({
  "data|10": [
    {
      "name":"@name",
      "date":'@date()',
      "timeOut":'@date()',
      "status|1":['过期','有效','无效']
    }
  ]
})
export default productLst