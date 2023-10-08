
import React from 'react'
import { Route, Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoutesFromChildren } from 'react-router'
import pageRoutes from './pageRoutes'

import LoginPage from '@/pages/login'
import ErrorPage from '@/pages/err'
import MainLayout from '@/layouts/MainLayout'
// 这里面使用的是 createRoutesFromChildren createBrowserRouter 生成的路由
const genMainRoutes = (routes: any) => {
  let result: React.JSX.Element[] = []
  routes.forEach((route: any) => {
    result.push(<Route key={route.path} path={route.path} element={
      <React.Suspense fallback={<></>}>
        <route.element />
      </React.Suspense>
    } />)
    if (route.children) {
      const childRoute = genMainRoutes(route.children)
      result = result.concat(childRoute)
    }
  }
  )
  // console.log(result)
  return result
}
const BaseRoute = createRoutesFromChildren(<>
  <Route path='/login' element={<LoginPage></LoginPage>}></Route>
  <Route path='/err' element={<ErrorPage></ErrorPage>}></Route>
  {/* 默认会添加左侧的菜单区域 */}
  {/* {RouteEle} */}
  <Route path='/' element={<MainLayout></MainLayout>}>
    {genMainRoutes(pageRoutes)}
    <Route path='/' element={<Navigate to="/picture/watermark" replace />} ></Route>
    <Route path='/*' element={<Navigate to="/err" replace />} ></Route>
  </Route>
</>)
export default function(){
  return <RouterProvider router={createBrowserRouter(BaseRoute)}></RouterProvider>
}

