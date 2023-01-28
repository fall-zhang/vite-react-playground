import React, { useState } from 'react'
import styles from './index.module.less'
import { Button, message, Space } from 'antd'
// import { useStore } from 'rediaox'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
const CustomPage: React.FC = ({ children }) => {

  async function asyncExecute() {
    await sleep(1000)
    // actions.increment()
    message.success('执行成功')
  }

  return (
    <>
      <h1>自定义表单</h1>
      来了老弟
    </>
  )
}

export default CustomPage
