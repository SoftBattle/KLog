import React, { CSSProperties, ReactNode } from 'react'
import styles from './index.module.scss'

const Tab = ({ tabs, currentTab }: {
  tabs: {
    name: string
    content: ReactNode
    onClick?: () => void
  }[]
  currentTab: string
}) => {
  return (
    <div className={styles.tab_wrapper}>
      <ul className={styles.tabs}>
        {tabs.map((tab, idx) => {
          return (
            <li className={`${styles.item} ${currentTab === tab.name ? styles.current : ''}`} onClick={tab.onClick} key={idx}>
              { tab.content }
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Tab