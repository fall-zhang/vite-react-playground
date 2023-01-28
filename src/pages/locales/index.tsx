import React, { useState } from 'react'
import styles from './index.module.less'
import { Card, Radio } from 'antd'
import type { RadioChangeEvent } from 'antd'
import { formatMessage, setLocale, getLocaleInfo } from '@/core/locales'

/**
 * 国际化页面
 * @constructor
 */
const LocalePage: React.FC = () => {
  const onChangeLanguage = (e: RadioChangeEvent) => {
    setLocale(e.target.value) // 调用切换语言方法
  }
  const local = getLocaleInfo().locale
  const [currentLang] = useState(local)
  return (
    <Card title={formatMessage({ id: 'switchLan' })} style={{ width: '100%' }}>
      <Radio.Group onChange={onChangeLanguage} value={currentLang}>
        <Radio value={'zh-CN'}>{formatMessage({ id: 'switchToCh' })}</Radio>
        <Radio value={'en-US'}>{formatMessage({ id: 'switchToEn' })}</Radio>
      </Radio.Group>
      <div className={styles.localLan}>
        {formatMessage({ id: 'localLan' })}react-intl
      </div>
    </Card>
  )
}

export default LocalePage
