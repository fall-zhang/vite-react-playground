import React, { useRef, useState, useEffect } from 'react'
import { Button, Form, Input, InputNumber, Upload } from 'antd'
import styles from './index.module.less'
import clsx from 'clsx'

export default function WaterMarkLayout() {
  const [imageSrc, setImageSrc] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const onSelectFile = (info: any) => {
    if (info.file.status !== 'uploading') {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc)
      }
      setImageSrc(URL.createObjectURL(info.file.originFileObj))
    }
  }
  const onSaveImage = () => {
    const stx = canvasRef.current?.getContext('2d')
  }
  useEffect(() => {
    const stx = canvasRef.current?.getContext('2d')
    const img = document.createElement('img')
    img.src = imageSrc
    img.onload = () => {
      stx?.drawImage(img, 0, 0)
    }
  }, [imageSrc])
  return (<div className={styles.content}>
    <div className={clsx(styles.left)}>
      {/*   <img src={imageSrc} alt="" style={{ maxHeight: '620px', maxWidth: '600px' }} /> */}
      {imageSrc && <div className={styles.image}>
        <canvas ref={canvasRef} height={'680px'} width={'960px'}></canvas>
      </div>}
      <div style={{ display: 'flex', marginTop: '20px' }}>
        {
          imageSrc ? <>
            <Upload onChange={onSelectFile} showUploadList={false}>
              <Button type='primary'>导入新图片</Button>
            </Upload>
            <Button type='default' onClick={onSaveImage}>另存为</Button>
          </> :
            <Upload onChange={onSelectFile} showUploadList={false}>
              <div className={styles.operation}>
                <Button>请选择文件</Button>
              </div>
            </Upload>
        }
      </div>
    </div>
    <WaterMarkConfig className={clsx(styles.right)} />
  </div>)
}

const WaterMarkConfig: React.FC<{ className?: string }> = ({ className }) => {
  const positionArr = {
    x: ['left', 'center', 'right'],
    y: ['top', 'center', 'bottom']
  }
  return (<Form className={className}>
    <Form.Item label="水印位置">
      {positionArr.y.map(item => (
        <div key={item} className={styles.ninePatch}>
          {
            positionArr.x.map(xItem => (
              <div className={clsx(styles.rect, xItem, item)} key={xItem}>
              </div>
            ))
          }
        </div>))
      }
    </Form.Item>
    <Form.Item label="水印内容">
      <Input ></Input>
    </Form.Item>
    <Form.Item label="水印大小">
      <InputNumber type='number'></InputNumber>
    </Form.Item>
    <Form.Item label="预设水印">
      预设水印一：全局水印，斜方向排列，重复
      预设水印二：全局水印，斜方向排列，重复
      预设水印三：定制水印
    </Form.Item>
    {/* <Form.Item >
      <Button type='primary'>应用</Button>
    </Form.Item> */}
  </Form>)
}