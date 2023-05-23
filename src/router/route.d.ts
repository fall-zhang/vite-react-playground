import type { LazyExoticComponent, FC, ReactElement, ReactNode } from 'react'
import type { RouteObject } from 'react-router-dom'
// 路由meta
export interface RouteMeta {
  title: string
  hidden?: boolean
  auth?: string
  icon?: ReactNode
}
// 单条路由，路由下面最多嵌套一层菜单
// export type RouteParam = RouteObject
// RouteObject 上面没有存放数据的 meta 对象
export interface RouteParam {
  exact?: boolean
  path: string
  element: LazyExoticComponent<React.ComponentType<any>>
  // element?: ReactNode
  // lazy?: LazyExoticComponent<React.ComponentType<any>>
  meta: RouteMeta
  children?: RouteParam[]
  redirect?: string
}