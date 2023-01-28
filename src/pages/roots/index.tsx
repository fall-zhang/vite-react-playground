import React, { useState } from 'react'
import { Button } from 'antd'
import classNames from 'clsx'
import styles from './index.module.less'
import { AuthContainer } from '@/core/roots'
const AuthPage: React.FC = () => {
  const [state, setState] = useState(true)
  const [rootState, setRootState] = useState('')
  function toggleState() {
    setState(!state)
  }
  function toggleRoot() {
    if (rootState === '') {
      setRootState('button')
    } else {
      setRootState('')
    }
  }
  return (
    <>
      <div className={styles.auth}>
        <div className={classNames(styles.authContent, { [styles.noAuth]: state, [styles.grayAuth]: !state })}>
          <span>使用权限组件包裹</span>
          <AuthContainer token={rootState}>
            <Button >Hello world</Button>
          </AuthContainer>
        </div>
        <div className={classNames(styles.authContent, { [styles.noneAuth]: state, [styles.grayAuth]: !state })}>
          <div>不使用权限组件包裹</div>
          <Button>button1</Button>
          <Button>button2</Button>
        </div>
      </div>
      <div>
        <div>
          <Button onClick={() => toggleState()}>点击更换样式</Button>
          <Button onClick={() => toggleRoot()}>点击切换权限</Button>
        </div>
      </div>
    </>
  )
}

export default AuthPage
