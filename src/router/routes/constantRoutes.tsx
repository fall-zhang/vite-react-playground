import React from 'react'

import BlankPage from '@/layouts/menus'
import { Navigate } from 'react-router-dom'

// 实现解析当前路由
import type { RouteParam } from '../route'
const asyncLoad = (str: string) => React.lazy(() => import(str))
const constantRoute: RouteParam[] = [
  {
    path: '/login',
    component: asyncLoad('@/pages/login'),
    meta: { title: '菜单名称', hidden: true, auth: 'menu' }
  },
  {
    path: '/',
    component: BlankPage,
    meta: { title: '菜单名称', hidden: true, auth: 'menu' },
    children: [
      {
        path: '/home',
        component: asyncLoad('@/pages/login'),
        meta: { title: '菜单名称', hidden: true, auth: 'menu' }
      }
    ]
  },
  {
    path: '',
    component: <Navigate to="/login" replace />,
    meta: { title: '菜单名称', hidden: true, auth: 'menu' },
    redirect: '/login'
  }
]
export default constantRoute