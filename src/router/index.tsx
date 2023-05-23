import React, { ReactElement } from 'react'
import { BrowserRouter, Routes, Route, useRoutes, Navigate } from 'react-router-dom'

import LoginPage from '@/pages/login'
import ErrorPage from '@/pages/err'
import MainLayout from '@/layouts/MainLayout'
import pageRoutes from './pageRoutes'
import { createRoutesFromChildren } from 'react-router'
const route = createRoutesFromChildren(<>
  <Route path='/login' element={<LoginPage></LoginPage>}></Route>
  <Route path='/err' element={<ErrorPage></ErrorPage>}></Route>
  {/* 默认会添加左侧的菜单区域 */}
  {/* {RouteEle} */}
  <Route path='/' element={<MainLayout></MainLayout>}>
    {pageRoutes.map(route => (
      <Route key={route.path} path={route.path} element={<React.Suspense fallback={<></>}>
        <route.element />
      </React.Suspense>}>
        {
          route.children && route.children.map(children => {
            return (
              <Route key={children.path} path={children.path} element={
                <React.Suspense fallback={<></>}>
                  <children.element />
                </React.Suspense>
              }>
              </Route>
            )
          })
        }
      </Route>)
    )}
    <Route path='/' element={<Navigate to="/login" replace />} ></Route>
    <Route path='/*' element={<Navigate to="/err" replace />} ></Route>
  </Route>
</>)
console.log(route)

// 日后再钻研 React-router 到底怎么使用
const RouterPage: React.FC = () => {
  // const nav = useRevalidator()
  // console.log(nav)
  // const RouteEle = useRoutes(pageRoutes)
  return (
    <Routes>
      {/* 全局路由页面，会覆盖整个页面 */}
      <Route path='/login' element={<LoginPage></LoginPage>}></Route>
      <Route path='/err' element={<ErrorPage></ErrorPage>}></Route>
      {/* 默认会添加左侧的菜单区域 */}
      {/* {RouteEle} */}
      <Route path='/' element={<MainLayout></MainLayout>}>
        {pageRoutes.map(route => (
          <Route key={route.path} path={route.path} element={<React.Suspense fallback={<></>}>
            <route.element />
          </React.Suspense>}>
            {
              route.children && route.children.map(children => {
                return (
                  <Route key={children.path} path={children.path} element={
                    <React.Suspense fallback={<></>}>
                      <children.element />
                    </React.Suspense>
                  }>
                  </Route>
                )
              })
            }
          </Route>)
        )}
        <Route path='/' element={<Navigate to="/login" replace />} ></Route>
        <Route path='/*' element={<Navigate to="/err" replace />} ></Route>
      </Route>
    </Routes>
  )
}
const Index = () => {
  // const element = useRoutes(pageRoutes)
  // return <div className="page" >
  //   <div className="content" >
  //     {element}
  //   </div>
  // </div>
}
const RouterProvider: React.FC = () => (
  <BrowserRouter>
    <RouterPage />
  </BrowserRouter>
)

export default RouterProvider