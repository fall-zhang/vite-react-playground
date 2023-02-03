import React from 'react'
import {
  GithubOutlined,
  CreditCardOutlined,
  DesktopOutlined,
  PieChartOutlined,
  TableOutlined
} from '@ant-design/icons'
// 实现解析当前路由
import type { RouteParam } from './route'
const pageRoutes: RouteParam[] = [{
  path: '/picture',
  component: React.lazy(() => import('@/pages/picture/index')),
  meta: { title: '图片处理', icon: <TableOutlined /> }
},
{
  path: '/contact',
  component: React.lazy(() => import('@/pages/contact/index')),
  meta: { title: '联系方式', icon: <GithubOutlined></GithubOutlined> }
},
{
  path: '/works',
  component: React.lazy(() => import('@/pages/works/index')),
  meta: { title: '工作内容', icon: <CreditCardOutlined></CreditCardOutlined> }
},
{
  path: '/icon',
  component: React.lazy(() => import('@/pages/icon/index')),
  meta: { title: 'Icon选择', icon: <DesktopOutlined></DesktopOutlined> },
  redirect: '/login'
},
{
  path: '/roots',
  component: React.lazy(() => import('@/pages/roots')),
  meta: { title: '权限验证', icon: <PieChartOutlined></PieChartOutlined> },
  redirect: '/login'
}
]
export default pageRoutes