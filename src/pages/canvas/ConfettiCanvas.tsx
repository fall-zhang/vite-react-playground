import React, { MouseEvent, useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import s from './ConfettiCanvas.module.less'
export default function () {
  const canvasDOM = useRef<HTMLCanvasElement>(null)
  const outCanvas = useRef<HTMLDivElement>(null)
  let myConfetti: unknown = null
  useEffect(() => {
    // const triangle = confetti.shapeFromPath({ path: 'M0 10 L5 0 L10 10z' })
    // confetti({
    //   shapes: [triangle],
    //   particleCount: 150
    // })
    myConfetti = confetti.create(canvasDOM.current!, { resize: true })

  })
  function onConfetti() {
    if (typeof myConfetti === 'function') {
      myConfetti()
    }
  }
  //  setTimeout(() => {

  // }, 60)
  function outMouseMove(ev: MouseEvent) {

    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight
    // console.log(ev.clientX)
    const xTrans = -(clientWidth / 2 - ev.clientX) / 8
    const yTrans = -(clientHeight / 2 - ev.clientY) / 8
    if (canvasDOM.current) {
      canvasDOM.current.style.position = 'relative'
      canvasDOM.current.style.transform = `translate(${xTrans}px,${yTrans}px)`
    }
  }
  return <div className={s.mainContent} onMouseMove={outMouseMove}>
    <button onClick={onConfetti} style={{ marginBottom: '100px' }}>点击</button>
    <div className={s.canvasContent} ref={outCanvas} >
      <canvas ref={canvasDOM} width={800} height={680}></canvas>
    </div>
  </div>
}