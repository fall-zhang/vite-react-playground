import React, { FC } from 'react'
import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
const ErrPage: FC = () => {
  const logged = sessionStorage.token
  const navigate = useNavigate()
  const TypeButton = (
    <Button type="primary" key="login" onClick={() => { navigate('/login') }}>
      跳转到登陆
    </Button>
  )
  return (
    <Result
      status="404"
      title="404"
      subTitle={'当前页面不存在'}
      extra={
        [
          <Button key='back' type="primary" onClick={() => { history.go(-1) }}>
            回到上一页
          </Button>, logged ? '' : TypeButton
        ]
      }
    />
  )
}

export default ErrPage