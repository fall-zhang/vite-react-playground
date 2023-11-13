/**
 * useRoute 创建的路由
 */
import React, { FC, Suspense } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'

import ErrorPage404 from '@/pages/err/404'
import ContactMe from '@/pages/contact'
// 这里面使用的是 createRoutesFromChildren createBrowserRouter 生成的路由

const CuRu: FC = () => {
  const RecOi = React.lazy(() => import('@/pages/contact'))
  return <Suspense fallback={<>加载出错</>}>
    <RecOi />
  </Suspense>
}

const BaseRoute = () => useRoutes([
  {
    path: '/404',
    element: <ErrorPage404 />
  },
  {
    path: '/home',
    element: <ContactMe />
  },
  {
    path: '/where',
    element: CuRu({})
  },
])

export default function () {
  return <BrowserRouter>
    <BaseRoute></BaseRoute>
  </BrowserRouter>
}

