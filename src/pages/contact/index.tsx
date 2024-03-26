import React, { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import styles from './index.module.less'

import { Tooltip } from 'antd'
import ShuffleText from './shuffle-text'
// import { $http } from "@/utils/reuqest"
import MyLogo from './MyLogo'

const ContactMe: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const dom = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    if (dom.current) {
      const shuffle = new ShuffleText(dom.current!)
      shuffle.start()
    }
  }, [])
  return (
    <>
      <h2 className={styles.head} ref={dom}>未来的前端艺术家</h2>
      <div className={styles.nameZone}><h2 className={styles.name}>Fall</h2></div>
      <div className={styles.name_bg}><h2 className={styles.name2}>Fall Zhang</h2></div>
      <div className={styles.name_bg}><h2 className={styles.name3}>Fall Zhang</h2></div>
      <MyLogo/>
      {/* <Tooltip placement="bottom" color={'plum'} title={'fellow me'}> */}
      <div className={styles.doc}>
        <a href='https://juejin.cn/user/1565342280463325' target="_blank" rel="noreferrer">
          <div className={styles.infoContent}>
            掘金
          </div>
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
        <div className={styles.fame}>FALL<br></br>DESIGN <br></br><span style={{ fontSize: '6px' }}></span></div>
      </div>
      {/* </Tooltip> */}
    </>
  )
}

export default ContactMe
