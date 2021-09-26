import React, { CSSProperties, ReactNode } from 'react'
import styles from './index.module.scss'

const DropDown = ({items, style, collapsed, children}: {
  items: {
    content: ReactNode
    alt?: string
    onClick?: () => void
  }[]
  style?: CSSProperties
  collapsed: boolean
  children?: ReactNode
}) => {
  return (
    <div className={`${styles.dropdown} ${collapsed ? styles.collapsed : ''}`} style={style}>
      {
        children
      }
      <ul>
      {
        items.map((item, idx) => {
          return (
            <li 
              className={styles.dropdown_item}
              key={idx}
              title={item.alt}
              onClick={item.onClick}>
                {item.content}
              </li>
          )
        })
      }
      </ul>
    </div>
  )
}

export default DropDown