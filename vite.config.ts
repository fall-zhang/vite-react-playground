// import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import { apiAddress, proxyApi } from './src/config'
import * as path from 'path'
import type { ConfigEnv, UserConfig } from 'vite'
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'
  return {
    server: {
      port: 3001,
      proxy: {
        [proxyApi]: {
          target: apiAddress,
          changeOrigin: true,
          cookieDomainRewrite: '',
          secure: false,
          rewrite: (p) => p.replace(/^\/api/, '')
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@C': path.resolve(__dirname, 'src/components'),
        '@U': path.resolve(__dirname, 'src/utils'),
        '@H': path.resolve(__dirname, 'src/hooks')
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
          // 重写 less 变量，定制样式
          modifyVars: {
            '@primary-color': '#1890ff',
            // '@primary-1': '#096dd9',
            '@primary-2': '#1890ff',// 全局主色
            '@primary-3': '#46a6ff',
            '@primary-4': '#74bcff',
            '@primary-5': '#a2d2ff',
            '@primary-6': '#1890ff',
            // font
            '@font-black': '#1c1e21',
            '@font-white': '#ffffffe6;',
            //
            '@success-color': '#52c41a', // 成功色
            '@warning-color': '#faad14', // 警告色
            '@error-color': '#f5222d', // 错误色
            '@font-size-base': '14px', // 主字号
            '@heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
            '@disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
            '@border-radius-base': '2px', // 组件/浮层圆角
            '@border-color-base': '#d9d9d9', // 边框色
            '@box-shadow-base':
              '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05)'
          }
        }
      }
    },
    plugins: [
      reactRefresh()
    ]
  }
}