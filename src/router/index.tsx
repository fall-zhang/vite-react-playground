import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import LoginPage from '@/pages/login'
import ErrorPage from '@/pages/err'
import MainLayout from '@/layouts/MainLayout'
import Icon from '@/pages/icon'
import Contact from '@/pages/contact/index'
import WorkList from '@/pages/works/index'

// React.lazy(() => import("@/pages/contact/index"))
const RouterPage: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/err' element={<ErrorPage></ErrorPage>}></Route>
        <Route path='/*' element={<MainLayout>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/works" element={<WorkList />} />
            <Route path="/icon" element={<Icon />} />
            <Route path="/root" element={<Icon />} />
            <Route path='/*' element={<Navigate to="/login" replace />} ></Route>
          </Routes>
        </MainLayout>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default RouterPage