const Mock = require('mockjs')
const menu = Mock.mock({
  "data|4": [
    {
      "title|+1":['镜像管理','建站推广','上云服务','安全服务'],
      //"data|4":['@natural(2, 400)'],
      "subLst|+1":[['基础环境','服务框架','集成应用'],['速成建站','定制建站','源码模板'],['环境部署','数据迁移','代维服务'],['主机安全','安全测试','认证准入']],
      "menuLeft|3-5":[{
        "title|1":[
          "基础环境",
          '服务框架',
          '集成应用',
          '业务管理',
          '数据库',
          '镜像管理'
        ],
        "content|1":[
          '预置各类常见语言环境和服务的基础框架',
          '可快速部署的典型应用服务框架，如docker',
          '集成各类常见开源/商业源码、CMS等环境',
          '预装主机管理面板或其他业务管理系统',
          '预装经配置优化加固的数据库系统环境'
        ]
      }],
      "menuRight":[
        'NodeJS集成环境',
        'CentOS7 JAVA运行环境 JDK8',
        'PHP组件运行环境',
        'Docker运行环境',
        'ThinkPHP运行环境Nginx版',
        'WordPress LAMP环境框架',
        'DedeCMS内容管理系统Apache版',
        'ShopEx电子商务系统Apache',
        // 'SVN版本控制同步集成',
        // 'Gilab代码托管平台系统'
      ]
    }
  ]
})
export default menu