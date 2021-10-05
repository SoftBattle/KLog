import React, { CSSProperties, ReactNode, useState, useEffect } from 'react'
import styles from './index.module.scss'

const Pagination = ( props: {
  current: number
  pageSize?: number
  onChange?: (current: number) => void // 页码改变回调
  showTotal?: boolean
  total: number
}) => {
  const total = props.total
  const pageSize = props.pageSize || 20
  const [current, setCurrent] = useState(props.current)
  const listSize = 5
  const totalSize = Math.ceil(total / pageSize)
  // 开始渲染页
  const startPage = Math.ceil(current / listSize) * listSize - listSize + 1
  
  useEffect(() => {
    props.onChange && props.onChange(current)
    console.log(total, current, startPage)
  }, [current])

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <ul>
          <button 
            className={styles.btn}
            disabled={current === 1}
            onClick={() => {
              // prev
              setCurrent(() => current - 1 > 0 ? current - 1 : current)
              
            }}>prev</button>
          {
          (() => {
            let items = []
            for(let i = startPage; i <= totalSize && i < startPage + listSize; i++) {
              let cn = styles.item
              if(i === current) cn += ` ${styles.current}`
              const item = <li className={cn} onClick={() => setCurrent(i)}>{i}</li>
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
              setCurrent(() => current + 1 > totalSize ? totalSize : current + 1)
            }}>next</button>
        </ul>
        
      </div>
    </div>
  )
}

export default Pagination