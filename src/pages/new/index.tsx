import react, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Post } from '../../interface'
import api from '../../services'
import { Editor } from '../../components/MarkDown'
import Avatar from '../../components/Avatar'
import Button from '../../components/Button'
import { IconStar, IconComemnt, IconLike } from '../../components/Icons'
import message from '../../components/Message'
import TagGroup from '../../components/TagGroup'
import Uploader from '../../components/Uploader'
import styles from './index.module.scss'



const New = () => {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [banners, setBanners] = useState<string[]>([])

  const uploadBanner = async (files: File[]) => {
    const list = files?.map(file => {
      let formData = new FormData()
      formData.append('files', file)
      return api.file.uploadFile(formData)
    })
    const res = await Promise.all([...list])
    let banns: string[] = []
    res.forEach(re => {
      if(re.stat === 'ok') banns.push(re.data)
    })
    setBanners(banns);
    message.success('Images upload success!')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.title} title='请输入文章标题'>
          <input type="text" placeholder='输入文章标题...' value={title} onChange={e => setTitle(e.target.value)} />
          <span className={styles.tip}></span>
        </div>
        <div className={styles.contain} title='请输入文章描述'>
          <div className={styles.subTitle}>
            <textarea placeholder='输入文章描述...' value={subTitle} onChange={e => setSubTitle(e.target.value)} />
          </div>
          <div className={styles.banner} title='请上传banner图'>
            <Uploader upload={uploadBanner} type='banner' style={{width: '160px', height: '100px'}} />
          </div>
        </div>
        <div className={styles.tags} title='请输入标签'>
          <TagGroup tags={tags} onChange={setTags} />
        </div>
      </div>
      <Editor content={content} onChange={setContent}></Editor>
    </div>
  )
}

export default New