export default [{
    path: '/consoleHome',
    name: 'ConsoleHome',
    component: () => import ('@/page/console/consoleHome'),
    children: [{
        path: '/consoleOverview',
        component: () => import ('@/page/console/consoleOverview'),
        meta: { title: '概览页' }
      },
      {
        path: '/cloudService',
        component: () => import ('@/page/console/cloudService'),
        meta: { title: '云服务ECS' }
      },
      {
        path: '/gameBuy',
        component: () => import ('@/page/console/gameBuy'),
        meta: { title: '游戏遁' }
      }
    ]
  }
]