import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import styles from './index.module.less'
interface Submit {
  (): any
}
const LoginForm: React.FC<{ onSubmit: Submit }> = ({ onSubmit }) => {
  return (
    <>
      <Form onFinish={onSubmit} >
        <Form.Item
          name="user_info"
          rules={[{ required: true, message: '用户名/手机号/邮箱不能为空' }]}
        >
          <Input
            className={styles.input}
            placeholder={'开启json-server后填写即可'}
            maxLength={128}
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="user_check"
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <Input
            className={styles.input}
            autoComplete="current-password"
            type="password"
            placeholder="密码"
            maxLength={128}
            size="large"
          />
        </Form.Item>
        <div className={styles.toolBox}>
          <Link
            to="/forget-password"
            style={{ width: 105, textAlign: 'right' }}
          >
            忘记密码
          </Link>
        </div>
        <Button
          className={styles.loginButton}
          type="primary"
          htmlType="submit"
          size="large"
          block
        >
          登陆
        </Button>
        <div className={styles.register}>
          <Link to="/register">注册</Link>
        </div>
      </Form >
    </>
  )
}
export {
  LoginForm
}