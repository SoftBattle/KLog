import React, { CSSProperties, ReactNode, useState, useEffect } from 'react'
import styles from './index.module.scss'
import { IconNext, IconPrev } from '../Icons'

const Pagination = ( props: {
  current: number
  pageSize?: number
  onChange: (current: number) => void // 页码改变回调
  showTotal?: boolean
  total: number
}) => {
  const total = props.total
  const pageSize = props.pageSize || 20
  // const [current, setCurrent] = useState(props.current)
  const current = props.current
  const onChange = props.onChange
  const listSize = 5
  const totalSize = Math.ceil(total / pageSize)
  // 开始渲染页
  const startPage = Math.ceil(current / listSize) * listSize - listSize + 1

  return (
      <div className={styles.wrapper}>
        <ul>
          <button 
            className={styles.btn}
            disabled={current === 1}
            onClick={() => {
              // prev
              // setCurrent(() => current - 1 > 0 ? current - 1 : current)
              onChange(current - 1 > 0 ? current - 1 : current)
            }}>
              <IconPrev cn={styles.icon}></IconPrev>
            </button>
          {
          (() => {
            let items = []
            for(let i = startPage; i <= totalSize && i < startPage + listSize; i++) {
              let cn = styles.item
              if(i === current) cn += ` ${styles.current}`
              const item = <li className={cn} onClick={() => onChange(i)} key={i}>{i}</li>
              items.push(item)
            }
            return items
          })()
          }
          <button 
            className={styles.btn}
            disabled={current === totalSize}
            onClick={() => {
              // prev
              // setCurrent(() => current + 1 > totalSize ? totalSize : current + 1)
              onChange(current + 1 > totalSize ? totalSize : current + 1)
            }}>
              <IconNext cn={styles.icon}></IconNext>
            </button>
        </ul>
      </div>
  )
}

export default Pagination