import React, { useEffect, useState } from 'react'
import styles from './index.module.less'
import { Tooltip } from 'antd'
// import { $http } from "@/utils/reuqest"

const DocPage: React.FC = ({ children }) => {
  return (
    <div>
      <Tooltip placement="top" color={'plum'} title={'fellow me'}>
        <div className={styles.doc}>
          <a href="#" >
            <div onClick={() => { window.open('https://juejin.cn/user/1565342280463325') }}>掘金</div>
          </a>
          <a href="#">
            <div onClick={() => { window.open('https://github.com/Fall-zhang') }}>Github</div>
          </a>
          <a href="#">
            <div onClick={() => { window.open('https://segmentfault.com/u/fall_zhang0') }}>思否</div>
          </a>
          {children}
          <a>
            <Tooltip placement='top' title="微信号：mymicrowings">
              <div>
                微信
              </div>
            </Tooltip>
          </a>
        </div>
      </Tooltip>
    </div>
  )
}

// export default function MyComponent() {
//   const [count, setCount] = React.useState(0)
//   const onAdd = () => {
//     setCount(count + 1)
//   }
//   const onShow = () => {
//     console.log(myInput.current.value)
//   }
//   const myInput:any = React.useRef(null)
//   return (
//     <div>
//       <h2>当前显卡数量为：{count}</h2>
//       <input type="text" ref={myInput} value={count}></input>
//       <button onClick={onAdd}>给我加卡</button>
//       <button onClick={onShow}>我有多少卡？</button>
//     </div>
//   )
// }
export default DocPage
