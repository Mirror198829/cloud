const Mock = require('mockjs')
const product = Mock.mock({
  "data|4": [
    {
      "id":"@id",
      "title":"@ctitle",
      "color|+1":["rgb(102, 184, 37)","rgb(3, 106, 255)","rgb(141, 83, 211)","rgb(245, 117, 0)"],
      "price|0-300":0,
      "detail":"@csentence",
      "img|+1":1,
      "tag|+1":['免费','新品','热门','促销'],
      "month|1-3":0
    }
  ]
})
export default product