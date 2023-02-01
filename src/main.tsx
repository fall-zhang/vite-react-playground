import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.less'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import 'antd/dist/reset.css'
import RouterPage from './router'
import clsx from 'clsx'

// import { LocaleProvider } from './core/locales'
const container = document.getElementById('root')!
const root = createRoot(container)
root.render(<React.StrictMode>
  <div className={clsx('App')}>
    <ConfigProvider locale={zhCN}>
      <RouterPage />
    </ConfigProvider>
  </div>
</React.StrictMode>)
