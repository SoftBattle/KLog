import { CSSProperties, ReactNode } from 'react'
import styles from './index.module.scss'

export default function FormItem({ label, children, style }: {
  label?: string
  children: ReactNode
  style?: CSSProperties
}) {
  return (
    <div className={styles.item} style={style}>
      {
        label && <label>{label}</label>
      }
      {
        children
      }
    </div>
  )
}