const Mock = require('mockjs')
const product = Mock.mock({
  "data|6": [
    {
      "id":"@id",
      "title":"@ctitle",
      "color":"@color",
      "price|0-300":0,
      "detail":"@csentence"
    }
  ]
})
export default product