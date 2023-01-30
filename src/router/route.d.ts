import type{ LazyExoticComponent, ComponentType,ReactElement, ReactNode } from 'react'
// 路由meta
export interface RouteMeta {
  title: string
  hidden?: boolean
  auth?: string
  icon?: ReactNode
}
// 单条路由，路由下面最多嵌套一层菜单
export interface RouteParam {
  exact?: boolean
  path: string
  component: LazyExoticComponent<ComponentType<unknown>>|React.FC|ReactElement
  meta: RouteMeta
  children?:Omit<RouteParam,'children'>[]
  redirect?:string
}