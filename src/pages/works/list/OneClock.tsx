import styles from './OneClock.module.less'
import React, { useEffect, useState } from 'react'
const OneClock: React.FC = () => {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  useEffect(() => {
    const c_hour = document.getElementById('hour')
    const c_minuit = document.getElementById('minute')
    const c_second = document.getElementById('second')
    const interval = setInterval(setTime, 500)
    function setTime() {
      const time = new Date
      setHour(time.getHours())
      setMinute(time.getMinutes())
      setSecond(time.getSeconds())
      if (c_second) {
        c_second.style.transform = 'rotate(' + (6 * second) + 'deg)'
        c_second.style.display ='block'
      }
      if (c_minuit) {
        c_minuit.style.transform = 'rotate(' + (6 * (minute + (second / 60))) + 'deg)'
        c_minuit.style.display ='block'
      }
      if (c_hour) {
        c_hour.style.transform = 'rotate(' + (6 * (hour + (minute / 60))) + 'deg)'
        c_hour.style.display ='block'
      }
    }
    return function () {
      clearInterval(interval)
    }
  }, [second])
  useEffect(() => {
    const ul_neddle = document.querySelector('.' + styles.neddle)
    if (!ul_neddle?.childNodes.length) {
      for (let i = 0; i < 60; i++) {
        const liElement = document.createElement('li')
        liElement.className = styles.neddle_one
        liElement.style.transform = 'rotate(' + (6 * i) + 'deg)'
        if (i % 5 === 0) {
          liElement.style.height = '14px'
          liElement.style.width = '5px'
        }
        if (ul_neddle) {
          ul_neddle.appendChild(liElement)
        }
      }
    }
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.clock}>
        <ul className={styles.neddle}>
        </ul>
        <div className={styles.clock_container}>
          <div className={styles.hour} id="hour"></div>
          <div className={styles.minute} id="minute"></div>
          <div className={styles.second} id="second"></div>
          <div className={styles.clock_center}></div>
        </div>
      </div>
    </div>
  )
}
export default OneClock