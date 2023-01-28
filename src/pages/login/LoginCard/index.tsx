import React from 'react'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { loginApp } from '@/core/auth'
import styles from './index.module.less'
import type { ILoginParams } from '../components/LoginMessage'
import { LoginForm } from '../components/LoginForm'
/**
 * 登录界面中间的 Card
 */
const LoginInputZone: React.FC<ILoginParams> = ({ signInWay }) => {
  const navigator = useNavigate()
  function handleFinish() {
    loginApp({ userName: 'fall', pwd: '123' }).then((res) => {
      if (res.code === 200) {
        sessionStorage.setItem('token', '配置权限成功')
        navigator('/contact')
      } else {
        message.error('用户名或密码错误！')
      }
    }).catch(err => {
      navigator('/contact')
      // message.error('找不到服务器！(请开启JSON-Server)')
      throw new Error(err)
    })
  }

  function handleClick(way: string) {
    signInWay(way)
  }

  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <div className={styles.header}>
          <div className={styles.loginTitle}>登陆</div>
          <div
            onClick={() => handleClick('code identify')}
            className={styles.changeWay}
            style={{ width: 99, textAlign: 'right' }}
          >
            验证码登陆
          </div>
        </div>
        <LoginForm onSubmit={() => handleFinish()}></LoginForm>
      </div>
      <div className={styles.right}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoginInputZone
