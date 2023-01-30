import React, { useState } from 'react'
import styles from './PictureBigger.module.less'
import Animate from '@/asset/image/animate.png'
// import type { HTML } from 'react'

const image = new Image()
image.src = Animate
let bigImageDOM: HTMLDivElement | null = null
let maskDOM: HTMLDivElement | null = null
let imageWidth = 100
let imageHeight = 100

const PictureBigger: React.FC = () => {
  const [showMask, setShowMask] = useState(false)
  const image = new Image()
  image.src = Animate
  function moveOrigin(ev: any) {
    if (!showMask) {
      setShowMask(true)
    }
    const originPoint = { x: ev.nativeEvent.layerX, y: ev.nativeEvent.layerY }
    if (maskDOM && bigImageDOM) {
      // 控制横坐标
      if (originPoint.x < 50) {
        maskDOM.style.left = '0'
        bigImageDOM.style.marginLeft = '0'
      } else if (originPoint.x < imageWidth - 50) {
        maskDOM.style.left = originPoint.x - 50 + 'px'
        bigImageDOM.style.marginLeft = -4 * (originPoint.x - 50) + 'px'
      } else {
        maskDOM.style.left = imageWidth - 100 + 'px'
        bigImageDOM.style.marginLeft = -4 * (imageWidth - 100) + 'px'
      }
      // 控制纵坐标
      if (originPoint.y < 50) {
        maskDOM.style.top = '0'
        bigImageDOM.style.marginTop = '0'
      } else if (originPoint.y < imageHeight - 50) {
        maskDOM.style.top = originPoint.y - 50 + 'px'
        bigImageDOM.style.marginTop = -4 * (originPoint.y - 50) + 'px'
      } else {
        maskDOM.style.top = imageHeight - 100 + 'px'
        bigImageDOM.style.marginTop = -4 * (imageHeight - 100) + 'px'
      }
    }
  }
  function leaveOrigin() {
    setShowMask(false)
  }
  function mouseOverImage(ev: any) {
    if (ev.target.width) {
      imageWidth = ev.target.width
      imageHeight = ev.target.height
    }
    maskDOM = document.querySelector('.' + styles.mask)
    bigImageDOM = document.querySelector('.' + styles['img-after'] + ' img')
    if (bigImageDOM) {
      bigImageDOM.style.height = 4 * imageHeight + 'px'
      bigImageDOM.style.width = 4 * imageWidth + 'px'
    }
  }
  return (
    <div className={styles.container}>
      {(imageWidth < 100 || imageWidth < 100) ? <h2>请选择长宽大于100px的图片</h2> : ''}
      <div className={styles['img-origin']} >
        <img src={Animate} onMouseOver={(ev) => mouseOverImage(ev)} onMouseMove={(e) => moveOrigin(e)} onMouseLeave={leaveOrigin} />
        <div className={styles.mask} style={{ display: showMask ? 'block' : 'none' }}></div>
      </div>
      <div className={styles['img-after']} style={{ display: showMask ? 'block' : 'none' }}>
        <img src={Animate} alt="#" />
      </div>
    </div>
  )
}
export default PictureBigger