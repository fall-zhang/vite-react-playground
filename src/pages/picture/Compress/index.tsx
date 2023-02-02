import React, { SyntheticEvent, useRef, useState } from 'react'
import { Button as AntButton, Form, Upload } from 'antd'
import type { UploadFile } from 'antd'
import styles from './index.module.less'

/**
 * 实现图片压缩
 * @returns ReactNode
 */
const PicCompress: React.FC = () => {
  const [filePath, setFilePath] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>([])
  // const fileRef = useRef<HTMLInputElement>(null)
  const oldFilePath = useRef('')
  function onChangePic(file: any) {
    const fileReader = new FileReader()
    if (oldFilePath.current !== file.name) {
      oldFilePath.current = file.name
      fileReader.readAsDataURL(file.originFileObj || file)
      fileReader.onload = function () {
        setFilePath(fileReader.result as string)
      }
    }
  }
  function onFileChange(ev: any) {
    setFileList([...ev.fileList])
    // console.log(ev);
    onChangePic(ev.file)

  }
  function onPreview(file: any) {
    // console.log(file);
    onChangePic(file)
  }
  function onDownloadPic() {
    const MAX_WIDTH = 800 // 图片最大宽度
    compress(filePath, 60, 'image/png').then(res => {
      const link = document.createElement('a')
      link.href = res as string
      link.download = '文件名称.jpg'
      link.click()
      link.remove()
    })
    function compress(base64: string, quality: number, mimeType: string) {
      const canvas = document.createElement('canvas')
      const img = document.createElement('img')
      img.crossOrigin = 'anonymous'
      return new Promise((resolve, reject) => {
        img.src = base64
        img.onload = () => {
          let targetWidth = 0, targetHeight = 0
          if (img.width > MAX_WIDTH) {
            targetWidth = MAX_WIDTH
            targetHeight = (img.height / img.width) * MAX_WIDTH
          } else {
            targetWidth = img.width
            targetHeight = img.height
          }
          canvas.width = targetWidth
          canvas.height = targetHeight
          const ctx = canvas.getContext('2d')!
          ctx.clearRect(0, 0, targetWidth, targetHeight) // 清除画布
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
          const imageData = canvas.toDataURL(mimeType, quality / 100)
          resolve(imageData)
        }
      })
    }
  }
  return (<Form labelCol={{ span: 3, offset: 2 }} >
    <Form.Item name="" label="当前文件：" className={styles.formItem} rules={[{ required: true }]}>
      <Upload fileList={fileList}
        listType="picture-card"
        onPreview={onPreview}
        beforeUpload={file => false}
        onChange={(ev) => onFileChange(ev)}>
        <AntButton type="link">上传文件</AntButton>
      </Upload>
    </Form.Item>
    <img className={styles.image} src={filePath}></img>
    <AntButton type="default" onClick={onDownloadPic}>压缩图片下载</AntButton>
  </Form >)
}
export default PicCompress