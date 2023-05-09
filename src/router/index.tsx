import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import LoginPage from '@/pages/login'
import ErrorPage from '@/pages/err'
import MainLayout from '@/layouts/MainLayout'

import pageRoutes from './pageRoutes'
const RouterPage: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 全局路由页面，会覆盖整个页面 */}
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/err' element={<ErrorPage></ErrorPage>}></Route>
        {/* 默认会添加左侧的菜单区域 */}
        <Route path='/*' element={<MainLayout>
          <Routes>
            {pageRoutes.map(route => {
              if (route.children) {
                return (
                  <>
                    <Route key={route.path} path={route.path} element={
                      <route.component />
                    }>
                    </Route>
                    {
                      route.children.map(children => {
                        return (
                          <Route key={children.path} path={children.path} element={
                            <React.Suspense fallback={<></>}>
                              <children.component />
                            </React.Suspense>
                          }>
                          </Route>
                        )
                      })
                    }
                  </>
                )
              }
              return (
                <Route key={route.path} path={route.path} element={
                  <React.Suspense fallback={<></>}>
                    <route.component />
                  </React.Suspense>
                }>
                </Route>
              )
            }
            )}
            {/* <Route path='/' element={<Navigate to="/login" replace />} ></Route> */}
            {/* <Route path='/*' element={<Navigate to="/err" replace />} ></Route> */}
          </Routes>
        </MainLayout>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default RouterPage