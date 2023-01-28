import React, { ReactNode } from 'react'
import styles from './index.module.less'
import { Menu, Tooltip } from 'antd'
import type { MenuProps } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import {
  GithubOutlined,
  CreditCardOutlined,
  DesktopOutlined,
  PieChartOutlined,
  TranslationOutlined,
  TableOutlined
} from '@ant-design/icons'
import { formatMessage } from '@/core/locales'
type MenuItem = Required<MenuProps>['items'][number];

const genMenuItem = (key: string, label: string, icon?: ReactNode, children?: MenuItem[]): MenuItem => ({
  key: key,
  icon: icon,
  label: <Link to={key}>{label}</Link>,
  children: children
})

const menuItems: MenuProps['items'] = [
  genMenuItem('/contact', formatMessage({ id: 'menu-contact' }), < GithubOutlined />),
  genMenuItem('/icon', formatMessage({ id: 'menu-icon' }), <PieChartOutlined />),
  genMenuItem('/works', formatMessage({ id: 'menu-works' }), < CreditCardOutlined />),
  genMenuItem('/form', formatMessage({ id: 'menu-contact' }), < DesktopOutlined />),
  genMenuItem('/locales', formatMessage({ id: 'menu-contact' }), < TranslationOutlined />),
  genMenuItem('/table', formatMessage({ id: 'menu-contact' }), < TableOutlined />),
  genMenuItem('/auth', formatMessage({ id: 'menu-contact' }), < GithubOutlined />)
]
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
