const Mock = require('mockjs')
const productData = Mock.mock({
  "productLst|10": [
    {
      "title|+1": [
        "计算",
        "存储",
        "网络",
        "数据库",
        "安全",
        "应用服务",
        "EI企业智能",
        "软件开发服务",
        "管理与部署",
        "云通信"
      ],
      "icon|+1": [
        "icon-calc.svg",
        "icon-disk.svg",
        "icon-web.svg",
        "icon-datalib.svg",
        "icon-safe.svg",
        "icon-service.svg",
        "icon-analysis.svg",
        "icon-develop.svg",
        "icon-manage.svg",
        "icon-new.svg"
      ],
      "content|6": [
        {
          "title|+1": [
            "FPGA加速云服务器",
            "GPU加速云服务器",
            "专属主机 DeH",
            "云容器引擎 CCE",
            "云容器实例 CCI",
            "云数据库 HWSQL",
            "云监控服务 ",
            "云日志服务LTS",
            "云审计服务CTS",
            "标签管理服务TMS"
          ],
          "detail|+1": [
            "提供FPGA开发和使用的工具及环境，让用户方便地开发FPGA加速器和部署基于FPGA加速的业务",
            "GPU加速云服务器（GPU Accelerated Cloud Server, GACS）能够提供优秀的浮点计算能力，从容应对高实时、高并发的海量计算场景。P系列适合于深度学习，科学计算，CAE等",
            "专属主机（Dedicated Host ）是指其上创建云服务器的所有资源完全供您专用的物理服务器",
            "云容器引擎（Cloud Container Engine）提供高可靠高性能的企业级容器应用管理服务，支持Kubernetes社区原生应用和工具，简化云上自动化容器运行环境搭建",
            "华为云容器实例（Cloud Container Instance）服务是基于Kubernetes的Serverless Container（无服务器容器）引擎，兼容Kubernetes和Docker的原生接口",
            "HWSQL是华为推出的MySQL内核优化版，100%兼容社区版的企业级在线关系型数据库",
            "云监控服务（Cloud Eye）为用户提供一个针对弹性云服务器、带宽等资源的立体化监控平台",
            "云日志服务（Log Tank Service）提供日志收集、实时查询、存储等功能，无需开发即可利用日志做实时决策分析",
            "云审计服务（Cloud Trace Service）为您提供云账户下资源的操作记录，通过操作记录您可以实现安全分析",
            "标签管理服务（Tag Management Service，简称TMS）是一种快速便捷将标签集中管理的可视化服务，提供跨区域、跨服务的集中标签管理和资源分类功能"
          ]
        }
      ]
    }
  ]
})
export default productData