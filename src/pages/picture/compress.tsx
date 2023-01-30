import React from 'react'
import { Button as AntButton } from 'antd'
import Center from '@/layouts/ContentCenter'
const PicCompress: React.FC = () => {
  return (<Center>
    <AntButton>图片预览</AntButton>
    <AntButton>图片下载</AntButton>
  </Center>)
}
export default PicCompress