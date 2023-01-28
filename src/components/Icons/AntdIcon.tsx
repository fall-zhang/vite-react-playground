import React from 'react'
import clsx from 'clsx'
import { createFromIconfontCN } from '@ant-design/icons'
import styles from './Icon.module.less'

export interface IconType extends React.HTMLAttributes<{ className: string }> {
  type: string;
  // 图标尺寸，默认 normal
  size?: 'small' | 'normal' | 'large' | null;
  // 是否禁用
  disabled?: boolean;
}

// 从 iconfont.cn 项目中获取 icon
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1882712_co33bk4ad1c.js'
})

const Icon: React.FC<IconType> = ({
  className,
  size = 'normal',
  disabled,
  ...restProps
}) => {
  return (
    <IconFont
      className={clsx(
        {
          [styles.large]: size === 'large',
          [styles.normal]: size === 'normal',
          [styles.small]: size === 'small',
          [styles.disabled]: disabled
        },
        className
      )}
      {...restProps}
    />
  )
}

export default React.memo(Icon)
