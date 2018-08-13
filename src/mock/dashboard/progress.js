const Mock = require('mockjs')

function getProgress() {
  const progress = Mock.mock({
    "data|3":[{
      "icon|+1":['fa-gears','fa-universal-access','fa-lock'],
      "title|+1":['Technology','Accessbility','Security'],
      'percent|2-9':0
    }]
  })
  return progress
}
export default getProgress
