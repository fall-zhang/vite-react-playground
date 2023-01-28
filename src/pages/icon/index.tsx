import Icon from '@/components/Icons/AntdIcon'
import React, { useState } from 'react'
import styles from './index.module.less'
import IconSelect from '@/components/IconSelect'
import type { IconType } from '@/components/Icons/AntdIcon'
interface IconItem extends IconType {
  describe: string
}
const iconList: IconItem[] = [
  { type: 'bookbianji', className: styles.iconItem, size: 'large', describe: '编辑' },
  { type: 'bookbianji1', className: styles.iconItem, size: 'large', describe: '编辑' },
  { type: 'bookbianji3', className: styles.iconItem, size: 'large', describe: '编辑' },
  { type: 'bookbianji4', className: styles.iconItem, size: 'large', describe: '编辑' },
  { type: 'bookdibu', className: styles.iconItem, size: 'large', describe: '底部' },
  { type: 'bookdingbu', className: styles.iconItem, size: 'large', describe: '顶部' },
  { type: 'bookdibu1', className: styles.iconItem, size: 'large', describe: '底部' },
  { type: 'bookfanhuidingbu', className: styles.iconItem, size: 'large', describe: '上传' },
  { type: 'bookhuidingbu', className: styles.iconItem, size: 'large', describe: '向上' },
  { type: 'bookhuidibu', className: styles.iconItem, size: 'large', describe: '向下' },
  { type: 'bookxiangmu1', className: styles.iconItem, size: 'large', describe: '项目' },
  { type: 'bookxiangmu2', className: styles.iconItem, size: 'large', describe: '项目' },
  { type: 'booktianqizitiku51', className: styles.iconItem, size: 'large', describe: '未知' },
  { type: 'bookweizhi', className: styles.iconItem, size: 'large', describe: '未知' },
  { type: 'bookshuben', className: styles.iconItem, size: 'large', describe: '书本' }
]

const IconPage: React.FC = () => {
  const [selectIcon, setSelectIcon] = useState('')
  return (
    <div>
      <div className={styles.iconHeader}>antd 配合iconfont 使用</div>
      <div className={styles.iconBody}>
        {
          iconList.map(item => (
            <div className={styles.iconItem} key={item.type}>
              <Icon type={item.type} size={item.size}></Icon>
              <span>{item.describe}</span>
            </div>
          ))
        }
      </div>
      <div style={{ height: '' }}>
        <IconSelect style={{ width: '260px' }} value={selectIcon} onChange={(iconName) => setSelectIcon(iconName)} />
      </div>
    </div>
  )
}

export default IconPage
