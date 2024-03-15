import React, { ReactNode } from 'react'
import styles from './index.module.less'
import { Menu, Tooltip } from 'antd'
import type { MenuProps } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import pageRoutes from '@/router/pageRoutes'
import { formatMessage } from '@/core/locales'
type MenuItem = Required<MenuProps>['items'][number];

const genMenuItem = (key: string, label: string, icon?: ReactNode, children?: MenuItem[]): MenuItem => ({
  key,
  icon,
  label: children ? <span>{label}</span> : <Link to={key}>{label}</Link>,
  children
})

const menuItems: MenuProps['items'] = pageRoutes.map(route => {
  let child: MenuProps['items']
  if (route.children) {
    child = route.children.map(child => {
      return genMenuItem(child.path, child.meta.title, child.meta.icon)
    })
  }
  return genMenuItem(route.path, route.meta.title, route.meta.icon, child)
})
// console.log(menuItems);

const HomePage: React.FC = () => {
  // 收缩侧边栏
  const message = formatMessage({ id: 'frontEnd' })
  return (
    <>
      <div className={styles.title}>{message}</div>
      <Menu
        theme='light'
        className={styles.menu}
        defaultSelectedKeys={[`${useLocation().pathname}`]}
        mode="inline"
        items={menuItems}
      >
      </Menu>
    </>
  )
}

export default HomePage
