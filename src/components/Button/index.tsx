import { CSSProperties } from 'react'
import styles from './index.module.scss'

interface Props {
  size?: 'mid' | 'min' | 'max', // full 代表宽占满一行
  func?: 'submit' | 'button' | 'reset',
  type?: 'primary' | 'danger', 
  children: any,
  style?: CSSProperties,
  onClick?: () => void,
  disabled?: boolean
  className?: string 
}

export default function Button(props: Props) {
  const getClassName = (type: 'primary' | 'danger' | '', size: 'mid' | 'min' | 'max', disabled = false) => {
    let className = styles.btn
    switch(type) {
      case 'primary': 
        className += ` ${styles.primary}` 
        break
      case 'danger': 
        className += ` ${styles.danger}`
        break
      default:
        break
    }
    switch(size) {
      case 'max':
        className += ` ${styles.max}`
        break
      case 'min':
        className += ` ${styles.min}`
        break
      default: 
        className += ` ${styles.mid}`
        break
    }
    if(disabled) {
      className += ` ${styles.disabled}`
    }
    return props?.className ? className + ' ' + props.className : className
  }
  return (
    <button 
      className={getClassName(props.type || '', props.size || 'mid', props.disabled)}
      type={props.func || 'button'}
      style={props.style}
      onClick={props.onClick}
      disabled={props.disabled}
      >
      {props.children}
    </button>
  )
}