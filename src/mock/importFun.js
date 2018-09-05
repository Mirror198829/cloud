const Mock = require('mockjs')
const importFunData = Mock.mock({
  "data|10-12": [{
    "title": "@ctitle(15)",
    "time": '@date("yyyy/MM")'
  }]
})
export default importFunData
