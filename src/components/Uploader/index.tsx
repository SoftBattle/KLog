import { useState, useEffect, ChangeEvent, useRef } from 'react'
import message from '../Message'
import styles from './index.module.scss'
import { IconAdd } from '../Icons'

// 图片转base64,用于显示预览
function getBase64(img: File, callback: Function) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

// 选择图片验证
function beforeUpload(file: File) {
  const isJpgOrPng = file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('只能上传jpg或png图片！')
  }
  const isLt2M = file.size / 1024 / 1024 < 8
  if (!isLt2M) {
    message.error('图片必须小于 8MB!')
  }
  return isJpgOrPng && isLt2M
}

export default function ImageUpload(props: {
  upload: (files: File[]) => void, // 文件上传方法
  max?: number // 最大数量
  style: React.CSSProperties // 样式
  type: 'avatar' | 'banner'
  initialValue?: string // 初始banner路径
}) {
  const [imgUrl, setImgUrl] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const fileRef = useRef<HTMLInputElement>(null)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files as FileList
    const fs = []
    for(let i = 0; i < fileList?.length; i++) {
      fs.push(fileList[i])
    }
    if(fs.length > 0){
      getBase64(fs[0], (url: string) => {
        setImgUrl(url)
      })
      setFiles(fs)
    }
  }

  useEffect(() => {
    setImgUrl(props.initialValue || '')
  }, [props.initialValue])

  useEffect(() => {
    // files数组变化则开启上传动作
    if(files.length > 0 && beforeUpload(files[0])) {
      // 满足上传条件
      props.upload(files)
    }
  }, [files])
  
  return (
    <div className={`${props.type === 'banner' ? styles.upload : styles.upload + ' ' + styles.avatar}`} style={props.style}>
      {
        (imgUrl.length > 0) && <img src={imgUrl} className={styles.img} style={{width: '100%'}}/> || <svg className={`${styles.icon} ${styles.img}`} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23578" width="32" height="32"><path d="M982.7 758.4h-72.4V688c0-19.4-16.2-35.2-36.2-35.2-20 0-36.2 15.8-36.2 35.2v70.4h-72.4c-20 0-36.2 15.8-36.2 35.2s16.2 35.2 36.2 35.2h72.4v70.4c0 19.4 16.2 35.2 36.2 35.2 20 0 36.2-15.8 36.2-35.2v-70.4h72.4c20 0 36.2-15.8 36.2-35.2s-16.2-35.2-36.2-35.2zM729.2 336c0 19.4-16.2 35.2-36.2 35.2-20 0-36.2-15.8-36.2-35.2s16.2-35.2 36.2-35.2c20 0 36.2 15.8 36.2 35.2z m-144.8 0c0 58.2 48.7 105.6 108.6 105.6 59.9 0 108.6-47.4 108.6-105.6S752.9 230.4 693 230.4c-59.9 0-108.6 47.4-108.6 105.6z m159.3 248.1L617 491.8c-19.2-14-46-14-65.2 0l-111.5 81.3-148.7-115.7c-18.6-14.5-44.4-15.6-64.3-2.6L77.5 552.7V160H874v387.2c0 19.4 16.2 35.2 36.2 35.2 20 0 36.2-15.8 36.2-35.2V157c0-37.2-31.1-67.4-69.4-67.4H74.5c-38.3 0-69.4 30.3-69.4 67.4v639.5c0 37.2 31.1 67.4 69.4 67.4h546.1c20 0 36.2-15.8 36.2-35.2 0-19.4-16.2-35.2-36.2-35.2H77.5v-156l179.2-117.1 182.2 141.7L584.4 556l115.8 84.5c16.1 11.7 38.7 8.5 50.7-7 12-15.6 8.8-37.7-7.2-49.4z" p-id="23579"></path></svg>
      }
      <div className={styles.add} onClick={() => {
        fileRef.current?.click()}}>
        <IconAdd cn={styles.icon}></IconAdd>
        <span>点击上传图片</span>
      </div>
      <input 
        ref={fileRef}
        type="file" 
        name="file"
        // 目前只能上传一张图片
        // multiple={(props.max && props.max > 1) ? true : false}
        style={{width: '0px', height: '0px', visibility: 'hidden'}}
        accept={'.png, .jpg, .jpeg'} 
        onChange={handleChange} />
    </div>
  )
}
