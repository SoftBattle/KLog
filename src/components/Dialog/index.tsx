import React, { ReactNode } from 'react'
import styles from './index.module.scss'

const Dialog = ({ children, visible, width, onClose, title }: {
  children: ReactNode
  visible: boolean
  width?: number
  onClose: () => void // 在此处改变隐藏或显示，改变visible
  title?: string
}) => {
  return (
    <div 
      className={styles.dialog_wrapper} 
      onClick={onClose}
      style={{visibility: `${visible && 'visible' || 'hidden'}`}}>
      <div className={styles.dialog} onClick={e => e.stopPropagation()} style={{width: `${width || 300}px`}}>
        {
          title && <div className={styles.header}>
            {title}
          </div>
        }
        <div className={styles.content}>
          {
            children
          }
        </div>
      </div>
    </div>
  )
}

export default Dialog