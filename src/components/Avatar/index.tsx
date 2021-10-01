import { CSSProperties } from 'react'
import styles from './index.module.scss'

interface Props {
  size?: number, // full 代表宽占满一行
  type?: 'circle' | 'square', 
  style?: CSSProperties,
  imgSrc: string
}

export default function Avatar({ size, type, style, imgSrc } : Props) {
  return (
    <div 
      className={`${styles.avatar} ${type === 'circle' ? styles.circle : ''}`}
      style={{width: `${size || 30}px`, height: `${size || 30}px`, ...style}}
      >
      <img src={imgSrc} alt=" " />
    </div>
  )
}