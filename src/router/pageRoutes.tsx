import React from 'react'
import {
  GithubOutlined,
  CreditCardOutlined,
  DesktopOutlined,
  PieChartOutlined,
  TableOutlined
} from '@ant-design/icons'
// import BlankRoute from 'BlankPage'
// 实现解析当前路由
// const MySuspense = (path: string) => {
//   const Child = React.lazy(() => import(path))
//   return <React.Suspense fallback={<></>}>
//     <Child></Child>
//   </React.Suspense>
// }

import type { RouteParam } from './route'
const pageRoutes: RouteParam[] = [{
  path: '/picture',
  element: React.lazy(() => import('@/pages/picture/index')),
  // element: MySuspense('@/pages/picture/index'),
  // lazy:()=> import('@/pages/picture/index'),
  meta: { title: '图片处理', icon: <TableOutlined /> },
  children: [{
    path: '/picture/watermark',
    element: React.lazy(() => import('@/pages/picture/WaterMark/index')),
    // element: MySuspense('@/pages/picture/WaterMark/index'),
    meta: { title: '添加水印', icon: <TableOutlined /> }
  }, {
    path: '/picture/picEnlarge',
    element: React.lazy(() => import('@/pages/picture/Enlarge/PictureEnlarge')),
    // element: MySuspense('@/pages/picture/Enlarge/PictureEnlarge'),
    meta: { title: '图片放大', icon: <TableOutlined /> }
  }, {
    path: '/picture/picCompress',
    element: React.lazy(() => import('@/pages/picture/Compress/index')),
    // element: MySuspense('@/pages/picture/Compress/index'),
    meta: { title: '图片压缩', icon: <TableOutlined /> }
  }
  ]
},
{
  path: '/works',
  element: React.lazy(() => import('@/pages/works/index')),
  meta: { title: '工作内容', icon: <CreditCardOutlined></CreditCardOutlined> }
},
{
  path: '/icon',
  element: React.lazy(() => import('@/pages/icon/index')),
  meta: { title: 'Icon选择', icon: <DesktopOutlined></DesktopOutlined> }
},
{
  path: '/roots',
  element: React.lazy(() => import('@/pages/roots')),
  meta: { title: '权限验证', icon: <PieChartOutlined></PieChartOutlined> }
},
{
  path: '/table',
  element: React.lazy(() => import('@/pages/table')),
  meta: { title: '表格导入导出', icon: <PieChartOutlined></PieChartOutlined> }
}, {
  path: '/contact',
  element: React.lazy(() => import('@/pages/contact/index')),
  meta: { title: '联系方式', icon: <GithubOutlined></GithubOutlined> }
}
]
export default pageRoutes