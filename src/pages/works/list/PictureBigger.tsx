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
    const originPoint = { x: ev.target.offsetParent.offsetLeft, y: ev.target.offsetParent.offsetTop }
    if (maskDOM && bigImageDOM) {
      if (ev.clientX - originPoint.x - 50 < 0) {
        bigImageDOM.style.marginLeft = '0'
        maskDOM.style.left = '0'
      } else if (ev.clientX - originPoint.x + 50 > imageWidth) {
        maskDOM.style.left = imageWidth - 100 + 'px'
        bigImageDOM.style.marginLeft = -4 * (imageWidth - 100) + 'px'
      } else {
        bigImageDOM.style.marginLeft = (-(ev.clientX - originPoint.x - 50) * 4) + 'px'
        maskDOM.style.left = ev.clientX - originPoint.x - 50 + 'px'
      }
      if ((ev.clientY - originPoint.y + 50) < 100) {
        bigImageDOM.style.marginTop = '0'
        maskDOM.style.top = '0'
      } else if ((ev.clientY - originPoint.y + 50) > imageHeight) {
        bigImageDOM.style.marginTop = -4 * (imageHeight - 100) + 'px'
        maskDOM.style.top = imageHeight - 100 + 'px'
      } else {
        bigImageDOM.style.marginTop = (-(ev.clientY - originPoint.y - 50) * 4) + 'px'
        maskDOM.style.top = ev.clientY - originPoint.y - 50 + 'px'
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
      <div className={styles['img-origin']} onMouseOver={(ev) => mouseOverImage(ev)} onMouseMove={(e) => moveOrigin(e)} onMouseLeave={leaveOrigin}>
        <img src={Animate} />
        <div className={styles.mask} style={{ display: showMask ? 'block' : 'none' }}></div>
      </div>
      <div className={styles['img-after']} style={{ display: showMask ? 'block' : 'none' }}>
        <img src={Animate} alt="#" />
      </div>
    </div>
  )
}
export default PictureBigger