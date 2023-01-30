import React from 'react'
import BlankPage from '@C/Menus'
import { Navigate } from 'react-router-dom'
import {
  GithubOutlined,
  CreditCardOutlined,
  DesktopOutlined,
  PieChartOutlined,
  TranslationOutlined,
  TableOutlined
} from '@ant-design/icons'
// 实现解析当前路由
import type { RouteParam } from './route'
const asyncLoad = (str: string) => React.lazy(() => import(str))
const pageRoutes: RouteParam[] = [
  {
    path: '/login',
    component: asyncLoad('@/pages/login'),
    meta: { title: '' }
  },
  {
    path: '/',
    component: BlankPage,
    meta: { title: '菜单名称', icon: <GithubOutlined></GithubOutlined> },
    children: [
      {
        path: '/home',
        component: asyncLoad('@/pages/login'),
        meta: { title: '菜单名称' }
      }
    ]
  },
  {
    path: '',
    component: <Navigate to="/login" replace />,
    meta: { title: '菜单名称' },
    redirect: '/login'
  }
]
export default pageRoutes