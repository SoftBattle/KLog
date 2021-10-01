import { CSSProperties, ChangeEventHandler, Fragment, SyntheticEvent } from 'react'
import styles from './index.module.scss'

interface Props {
  // onChange函数，将参数传出
  value: string,
  onChange?: ChangeEventHandler<HTMLTextAreaElement>,
  onBlur?: () => void
  // 校验规则
  // rules?: Rule[],
  name?: string,
  style?: CSSProperties,
  placeHolder?: string,
  disabled?: boolean,
  required?: boolean,
  rows?: number
}

export default function TextArea(props: Props) {
  return (
    <textarea 
      className={styles.textarea}
      name={props.name}
      placeholder={props.placeHolder}
      style={props.style} 
      value={props.value} 
      onChange={props.onChange}
      onBlur={props.onBlur}
      disabled={props.disabled || false}
      required={props.required}
      rows={props.rows || 5}
      ></textarea> 
  )
}