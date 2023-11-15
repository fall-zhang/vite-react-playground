import styles from './OneClock.module.less'
import React, { useEffect, useState, useRef } from 'react'
const OneClock: React.FC = () => {
  const initTime = new Date()
  const [hour, setHour] = useState(initTime.getHours())
  const [minute, setMinute] = useState(initTime.getMinutes())
  const [second, setSecond] = useState(initTime.getSeconds())
  const c_hour = useRef<HTMLDivElement>(null)
  const c_minuit = useRef<HTMLDivElement>(null)
  const c_second = useRef<HTMLDivElement>(null)
  const clock = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const interval = setInterval(setTime, 500)
    function setTime() {
      const time = new Date()
      setHour(time.getHours())
      setMinute(time.getMinutes())
      setSecond(time.getSeconds())
      if (clock.current) {
        clock.current.style.display = 'block'
      }
      if (c_second.current) {
        c_second.current.style.transform = 'rotate(' + (6 * second) + 'deg)'
        c_second.current.style.display = 'block'
      }
      if (c_minuit.current) {
        c_minuit.current.style.transform = 'rotate(' + (6 * (minute + (second / 60))) + 'deg)'
        c_minuit.current.style.display = 'block'
      }
      if (c_hour.current) {
        c_hour.current.style.transform = 'rotate(' + (6 * (hour + (minute / 60))) + 'deg)'
        c_hour.current.style.display = 'block'
      }
    }
    return function () {
      clearInterval(interval)
    }
  }, [second])
  const ul_neddle = useRef<HTMLUListElement>(null)
  useEffect(() => {
    if (!ul_neddle.current?.childNodes.length) {
      for (let i = 0; i < 60; i++) {
        const liElement = document.createElement('li')
        liElement.className = styles.neddle_one
        liElement.style.transform = 'rotate(' + (6 * i) + 'deg)'
        if (i % 5 === 0) {
          liElement.style.height = '14px'
          liElement.style.width = '5px'
        }
        if (ul_neddle) {
          ul_neddle.current?.appendChild(liElement)
        }
      }
    }
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.clock} ref={clock}>
        <ul className={styles.neddle} ref={ul_neddle}>
        </ul>
        <div className={styles.clock_container}>
          <div className={styles.hour} ref={c_hour} id="hour"></div>
          <div className={styles.minute} ref={c_minuit} id="minute"></div>
          <div className={styles.second} ref={c_second} id="second"></div>
          <div className={styles.clock_center}></div>
        </div>
      </div>
    </div>
  )
}
export default OneClock