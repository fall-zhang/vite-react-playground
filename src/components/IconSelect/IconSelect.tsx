import React, { useState } from 'react'
import { Input, Popover } from 'antd'
import clsx from 'clsx'
import { InputProps } from 'antd/es/input'
import Icon from '@/components/Icons/AntdIcon'
import styles from './IconSelect.module.less'

// 利用 Omit 先忽略 InputProps 接口中的 value, onChange, readOnly 属性，再添加所需的类型
interface IconSelectProps
  extends Omit<InputProps, 'value' | 'onChange' | 'readOnly'> {
  // 受控属性
  value?: string;
  // 受控属性
  onChange?: (value: string) => void;
  // 容器位置
  getPopupContainer?: (props: unknown) => HTMLElement;
}

/**
 * 图标选择表单
 */
function IconSelect({
  value,
  onChange,
  disabled,
  getPopupContainer,
  ...props
}: IconSelectProps) {
  const [visible, setVisible] = useState(false)
  const [selectItem, setSelectItem] = useState('')
  function onClickItem(selectItem: string) {
    if (onChange) {
      onChange(selectItem)
    }
    setSelectItem(selectItem)
  }
  return (
    <Popover
      trigger={['click']}
      open={visible}
      onOpenChange={disabled ? undefined : setVisible}
      placement="bottomLeft"
      getPopupContainer={getPopupContainer}
      content={
        <IconList selectItem={selectItem} onClickItem={onClickItem}></IconList>
      }
    >
      <Input
        placeholder={value ? undefined : '请选择'}
        suffix={<Icon className={styles.filterIcon} type="bookhuidibu" />}
        prefix={
          value && <Icon className={styles.iconValue} type={value} />
        }
        disabled={disabled}
        readOnly
        {...props}
      />
    </Popover>
  )
}
const iconList = [
  'bookbianji',
  'bookbianji1',
  'bookbianji3',
  'bookbianji4',
  'bookdibu',
  'bookdingbu',
  'bookdibu1',
  'bookfanhuidingbu',
  'bookhuidingbu'
]
interface IconList {
  selectItem: string
  onClickItem: (value: string) => void;
}
function IconList({ selectItem, onClickItem, ...props }: IconList) {
  return (
    <div className={styles.selectWrap}>
      {iconList.map((item) => (
        <Icon
          key={item}
          className={clsx({
            [styles.iconItem]: true,
            [styles.active]: selectItem === item
          })}
          type={item}
          onClick={() => onClickItem(item)}
          {...props}
        />
      ))}
    </div>
  )
}
export default IconSelect
