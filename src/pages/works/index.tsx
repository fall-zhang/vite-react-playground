import React from 'react'
import { Tabs } from 'antd'
import LovelyCanvas from './list/LovelyCanvas'
import PixelPaint from './list/PixelPaint'
import CSSClock from './list/OneClock'

const tabItems = [
  {
    label: '爱心雨',
    key: '1',
    children: <LovelyCanvas />
  },
  {
    label: '时钟',
    key: '2',
    children: <CSSClock />
  },
  {
    label: '像素画',
    key: '3',
    children: <PixelPaint />
  }
]

const { TabPane } = Tabs
const WorkPage: React.FC = () => {
  function onChange(str: string) {
    console.log(str)
  }
  return (
    <>
      <Tabs defaultActiveKey="1" centered onChange={onChange} items={tabItems} />
    </>
  )
}
export default WorkPage