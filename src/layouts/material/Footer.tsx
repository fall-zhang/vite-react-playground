import React from 'react'
import styles from './Footer.module.less'
const FooterText: React.FC = () => {
  return (
    <div>
      Vite-React-TypeScript-template ©2022 <span>|</span> <span className={styles.copyright}> Created by Fall </span>
    </div>
  )
}
export default FooterText