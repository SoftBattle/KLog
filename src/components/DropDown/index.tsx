import React, { CSSProperties, ReactNode } from 'react'
import styles from './index.module.scss'

const DropDown = ({items, style, collapsed, children}: {
  items: {
    label: string
    alt?: string
    onClick: () => void
  }[]
  style?: CSSProperties
  collapsed: boolean
  children?: ReactNode
}) => {
  return (
    <div className={`${styles.dropdown} ${collapsed ? styles.collapsed : ''}`} style={style}>
      {
        items.map((item, idx) => {
          return (
            <li 
              className={styles.dropdown_item}
              key={idx}
              title={item.alt}
              onClick={item.onClick}>
                {item.label}
              </li>
          )
        })
      }
      {
        children
      }
    </div>
  )
}

export default DropDown