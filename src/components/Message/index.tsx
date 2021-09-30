import ReactDOM from 'react-dom'
import styles from './index.module.scss'
import { useState, useEffect } from 'react'
import { TransitionGroup } from 'react-transition-group'
import Transition from '../Transition'
import Message, { MessageType } from './message'

export interface MessageApi {
  info: (text: string, duration?: number) => void;
  success: (text: string, duration?: number) => void;
  warning: (text: string, duration?: number) => void;
  error: (text: string, duration?: number) => void;
}

export interface Notice {
  text: string
  key: string
  type: MessageType
  duration?: number
}

let seed = 0
const now = Date.now()
const getUuid = (): string => {
  const id = seed
  seed += 1
  return `MESSAGE_${now}_${id}`
}

let add: (notice: Notice) => void

export const MessageContainer = () => {
  const [notices, setNotices] = useState<Notice[]>([])
  const timeout = 2
  const maxCount = 10

  const remove = (notice: Notice) => {
    const { key } = notice
    setNotices((prevNotices) => (
      prevNotices.filter(({ key: itemKey }) => key !== itemKey)
    ))
  }

  add = (notice: Notice) => {
    setNotices((prevNotices) => [...prevNotices, notice])
    setTimeout(() => {
      remove(notice)
    }, (notice.duration || timeout) * 1000)
  }

  useEffect(() => {
    if (notices.length > maxCount) {
      const [firstNotice] = notices
      remove(firstNotice)
    }
  }, [notices])

  return (
    <div className="message-container">
      <TransitionGroup>
        {
          notices.map(({ text, key, type }) => (
            <Transition
              timeout={200}
              in
              animation='slide-in-top'
              key={key}
            >
              <Message type={type} text={text} key={key} />
            </Transition>
          ))
        }
      </TransitionGroup>
    </div>
  )
}

if(typeof window !== 'undefined') {
  const messageWrapper = styles.wrapper

  let el = document.getElementById(messageWrapper)

  if(!el) {
    el = document.createElement('div')
    el.className = messageWrapper
    el.id = messageWrapper
    document.body.append(el)
  }

  ReactDOM.render(
    <MessageContainer></MessageContainer>,
    el
  )
}

const api: MessageApi = {
  info: (text, duration) => {
    add({
      text,
      key: getUuid(),
      type: 'info',
      duration
    })
  },
  success: (text, duration) => {
    add({
      text,
      key: getUuid(),
      type: 'success',
      duration
    })
  },
  warning: (text, duration) => {
    add({
      text,
      key: getUuid(),
      type: 'warning',
      duration
    })
  },
  error: (text, duration) => {
    add({
      text,
      key: getUuid(),
      type: 'danger',
      duration
    })
  }
}

export default api