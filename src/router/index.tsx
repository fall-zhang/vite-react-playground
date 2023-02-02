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
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/err' element={<ErrorPage></ErrorPage>}></Route>
        <Route path='/*' element={<MainLayout>
          <Routes>
            {pageRoutes.map(route => {
              return (
                <Route key={route.path} path={route.path} element={
                  <React.Suspense fallback={<>加载中，请等待</>}>
                    <route.component />
                  </React.Suspense>
                }>
                </Route>
              )
            }
            )}
            <Route path='/' element={<Navigate to="/login" replace />} ></Route>
            <Route path='/*' element={<Navigate to="/err" replace />} ></Route>
          </Routes>
        </MainLayout>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default RouterPage