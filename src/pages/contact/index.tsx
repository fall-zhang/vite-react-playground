import React, { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import styles from './index.module.less'
import './index.module.less'
import { Tooltip } from 'antd'
import ShuffleText from './shuffle-text'
// import { $http } from "@/utils/reuqest"

const ContactMe: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const dom = useRef<HTMLElement>(null)
  useEffect(() => {
    if (dom.current) {
      const shuffle = new ShuffleText(dom.current!)
      shuffle.start()
    }
  })
  return (
    <Tooltip placement="top" color={'plum'} title={'fellow me'}>
      <div className={styles.doc}>
        <a href='https://juejin.cn/user/1565342280463325' target="_blank" rel="noreferrer">
          <div className={styles.infoContent}>
            掘金
          </div>
          <span id='here' ref={dom}>未来的前端艺术家</span>
        </a>
        <a href="https://github.com/Fall-zhang" target="_blank" rel="noreferrer">
          <div className={styles.infoContent}>Github</div>
        </a>
        <a href="https://segmentfault.com/u/fall_zhang0" target="_blank" rel="noreferrer">
          <div className={styles.infoContent}>思否</div>
        </a>
        {children}
        <a href="https://github.com/Fall-zhang" target="_blank" rel="noreferrer">
          <Tooltip placement='top' title="微信号：mymicrowings">
            <div className={styles.infoContent} >
              微信
            </div>
          </Tooltip>
        </a>
      </div>
    </Tooltip>
  )
}

export default ContactMe
