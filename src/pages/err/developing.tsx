import React, { FC } from 'react'
import { Result, Button } from 'antd'
const ErrPage: FC = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle={'当前页面正在施工中'}
      extra={[
        <Button key='back' type="primary" onClick={() => { history.go(-1) }}>
          回到上一页
        </Button>
      ]}
    />
  )
}

export default ErrPage