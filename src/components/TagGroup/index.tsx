import React, { useState, useEffect, MouseEvent, useRef, CSSProperties, forwardRef, Ref } from 'react';
import message from '../Message'
import { TransitionGroup } from 'react-transition-group'
import Transition from '../Transition'
import { IconDelete, IconAdd } from '../Icons'
import Button from '../Button';
import styles from './index.module.scss'

interface TagProps {
  closable?: true,
  onClose?: (e: MouseEvent) => void,
  onClick?: () => void,
  children: any;
  style?: CSSProperties
}

const Tag = forwardRef((props: TagProps, ref: Ref<HTMLElement>) => {
  return (
    <span ref={ref} className={styles.tag} onClick={props.onClick} style={props.style}>
      {
        props.children
      }
      {
        props.closable && 
        <span className={styles.tag_btn} onClick={props.onClose}>
          <IconDelete cn={styles.icon}></IconDelete>
        </span>
      }
    </span>
  )
});

export default function EditableTagGroup(props: {tags: string[], onChange: (tags: string[]) => void, max?:16, min?: 1}) {
  const [tags, setTags] = useState<string[]>([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [val, setVal] = useState('');
  const handleDelete = (rmTag: string) => {
    const ts = tags.filter(t => t !== rmTag);
    setTags(ts);
  }
  const handleAdd = () => {
    const nTag = val;
    if(nTag.length < (props?.min || 1)) {
      message.info(`标签不得少于${props.min || 1}个字符!`);
      setInputVisible(false);
      return;
    }
    if(nTag.length > (props?.max || 16)) {
      message.info(`标签不得多于${props.max || 16}个字符!`);
      setInputVisible(false);
      return;
    }
    if(tags.includes(nTag)) {
      message.info('该标签已存在！');
      return;
    }
    const ts = tags.concat(nTag);
    setTags(ts);
    props.onChange(ts);
    setInputVisible(false);
    setVal('');
  }

  useEffect(() => {
    setTags(props.tags)
  }, [props.tags]);

  return (
    // <div className={styles.tag_group}>
    <TransitionGroup className={styles.tag_group}>
      {
        tags.map(tag => 
          <Transition
            key={tag}
            timeout={200}
            in
            animation='zoom-in-right'
          >
            <Tag 
              closable
              onClose={(e: MouseEvent) => {
                e.preventDefault();
                handleDelete(tag);
              }}
              >
              {tag}
            </Tag>
          </Transition>
        )
      }
      {
        inputVisible &&
        <input
          style={{width: '80px', padding: '0 6px'}}
          autoFocus
          className={styles.input} type='text' value={val} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value)}
          onBlur={handleAdd}
          onKeyPress={(e: React.KeyboardEvent) => {
            if(e.nativeEvent.keyCode === 13) {
              handleAdd();
            } else if(e.nativeEvent.keyCode === 27) {
              setInputVisible(false);
            }
          }}
          /> || 

        <Button
          // type='primary'
          style={{height: '24px', display: 'flex', alignItems: 'center', padding: '1px 6px'}}
          onClick={() => {
            setInputVisible(true)
          }}>
          <IconAdd cn={styles.icon}></IconAdd>
          <span>Add your tags</span>
        </Button>
        // <Tag 
        //   onClick={() => {
        //     setInputVisible(true)
        //   }} 
        //   style={{cursor: 'pointer'}}>
        //   <IconAdd cn={styles.icon}></IconAdd>
        //   {`  Add your tags`}
        // </Tag>
      }
    </TransitionGroup>
    // </div>
  )
}
