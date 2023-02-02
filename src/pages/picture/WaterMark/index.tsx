import React from 'react'
import { Form } from 'antd'
import styles from './index.module.less'
export default function WaterMark() {
  const positionArr = {
    x: ['left', 'center', 'right'],
    y: ['top', 'center', 'bottom']
  }
  return (<Form>
    <Form.Item label="水印位置">
      一个九宫格，点击设置到对应位置
      {positionArr.y.map(item => (
        <div key={item} className={styles.ninePatch}>
          <div className='rect'></div>
          <div className='rect'></div>
          <div className='rect'></div>
        </div>))
      }
    </Form.Item>
    <Form.Item label="水印内容">

    </Form.Item>
    <Form.Item label="水印大小">

    </Form.Item>
    <Form.Item label="预设水印">
      预设水印一：全局水印，斜方向排列，重复
      预设水印二：全局水印，斜方向排列，重复
      预设水印三：定制水印
    </Form.Item>
  </Form>)
}