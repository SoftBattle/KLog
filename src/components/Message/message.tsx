import React, { FC, ReactElement } from 'react'
import { IconInfo, IconDanger, IconSuccess, IconWarn } from '../Icons'
export type MessageType = 'info' | 'success' | 'danger' | 'warning'
import styles from './index.module.scss'

export interface MessageProps {
  text: string
  type: MessageType
}

const Message: FC<MessageProps> = (props: MessageProps) => {
  const { text, type } = props
  const cn = styles.icon
  const renderIcon = (messageType: MessageType): ReactElement => {
    let messageIcon: JSX.Element
    switch (messageType) {
      case 'success':
        messageIcon = <IconSuccess cn={cn} />
        break
      case 'danger':
        messageIcon = <IconDanger cn={cn} />
        break
      case 'warning':
        messageIcon = <IconWarn cn={cn} />
        break
      case 'info':
      default:
        messageIcon = <IconInfo cn={cn} />
        break
    }

    return messageIcon
  }

  return (
    <div className={styles.message} data-testid="test-message">
      <div className={styles.content}>
        <div className={styles.icon_container}>
          {renderIcon(type)}
        </div>
        <div className={styles.text}>
          {text}
        </div>
      </div>
    </div>
  )
}

export default Message
