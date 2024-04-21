import React from 'react'
import stys from './PixelPaint.module.less'
import clsx from 'clsx'
export default function () {
  return <>
    <h3>使用 box shadow 实现的像素画</h3>
    <div className={clsx(stys.pixel_dog)}>
    </div>
    {/* 像素画板，使用 canvas 实现一个？ */}
  </>
}
