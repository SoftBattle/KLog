import { CSSProperties, ChangeEventHandler, Fragment, SyntheticEvent } from 'react';
import styles from './index.module.scss';

interface Props {
  // onChange函数，将参数传出
  value: string,
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  onBlur?: () => void
  onMouseOver?: () => void
  onKeyPress?: () => void
  onKeyDown?: () => void
  
  // 校验规则
  // rules?: Rule[],
  name?: string,
  label?: string,
  type: 'text' | 'password' | 'textarea',
  style?: CSSProperties,
  placeHolder?: string,
  disabled?: boolean
  rules?: {
    required?: true
    maxLength?: number,
    minLength?: number,
    pattren?: string,
  }
}

export default function Input(props: Props) {
  return (
    <div className={styles.container}>
      {
        props.label && <label className={styles.label} htmlFor={props.name}>{props.label}</label>
      }
      {
        props.type === 'textarea' 
        && <textarea 
          className={styles.textarea}
          name={props.name}
          placeholder={props.placeHolder}
          style={props.style} 
          value={props.value} 
          onChange={props.onChange}
          maxLength={props.rules?.maxLength}
          minLength={props.rules?.minLength}
          disabled={props.disabled || false}
          required={props.rules?.required}
          ></textarea> 
        || <input
          className={styles.input}
          name={props.name} 
          placeholder={props.placeHolder} 
          type={props.type} 
          style={props.style} 
          value={props.value} 
          onChange={props.onChange}  
          onBlur={props.onBlur}
          onMouseOver={props.onMouseOver}
          onKeyPress={props.onKeyPress}
          onKeyDown={props.onKeyDown}
          pattern={props.rules?.pattren}
          maxLength={props.rules?.maxLength}
          minLength={props.rules?.minLength}
          disabled={props.disabled || false}
          required={props.rules?.required}
        />
      }
    </div>
  )
}