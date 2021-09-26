import React, { ReactNode } from 'react'
import styles from './index.module.scss'

const Dialog = ({ children, visible, width, onClose }: {
  children: ReactNode
  visible: boolean
  width?: number
  onClose: () => void // 在此处改变隐藏或显示，改变visible

}) => {
  return (
    <div 
      className={styles.dialog_wrapper} 
      onClick={onClose}
      style={{visibility: `${visible && 'visible' || 'hidden'}`}}>
      <div className={styles.dialog} style={{width: `${width || 300}px`}}>
        {
          children
        }
      </div>
    </div>
  )
}

export default Dialog