const Mock = require('mockjs')

function getRes() {
  const res = Mock.mock({
    "data|6":[{
      "percent|1-99":0,
      "title|+1":['工作空间（个）','私有网络','映像（个）','路由器','容器服务','云主机（个）']
    }]
  })
  return res
}
export default getRes
