import React from 'react'
import { Button as AntButton } from 'antd'
import PictureEnlarge from './Enlarge/PictureEnlarge'
import PicCompress from './WaterMark/index'
const PictureLayout: React.FC = () => {
  return (
    <div>
      <h2>示例图片：</h2>
      <AntButton>最近上传，包括上传图片</AntButton>
      <PicCompress />
    </div>
  )
}

export default PictureLayout