import react, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { Post, PostDetail } from '../../interface'
import api from '../../services'
import { Editor } from '../../components/MarkDown'
import Button from '../../components/Button'
import message from '../../components/Message'
import TagGroup from '../../components/TagGroup'
import Uploader from '../../components/Uploader'
import Dialog from '../../components/Dialog'
import { FormItem, TextArea } from '../../components/Form'
import styles from './index.module.scss'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { pid } = ctx.params
  let post: PostDetail = {} as PostDetail
  const re = await api.post.queryPostDetail(pid as string)
  if(re.stat === 'ok') {
    post = re.data
    return {
      props: {
        pid,
        post: {
          title: post.title,
          subTitle: post.subTitle,
          banners: post.banners,
          tags: post.tags,
          content: post.content
        } 
      }
    }
  } else {

  }
  
}

const Edit = ({pid, post}: {
  pid: string
  post: Post
}) => {
  const [content, setContent] = useState<string>(post.content)
  const [title, setTitle] = useState<string>(post.title)
  const [subTitle, setSubTitle] = useState<string>(post.subTitle)
  const [tags, setTags] = useState<string[]>(post.tags)
  const [banners, setBanners] = useState<string[]>(post.banners)
  const [dialogVisible, setDialogVisible] = useState(false)
  const router = useRouter()

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

  const updatePost = async () => {
    if(title.length === 0) {
      message.info('请输入标题！')
      return
    }
    if(content.length < 10) {
      message.info('正文内容不得少于10个字符！')
    }
    const re = await api.post.newPost({
      title,
      subTitle,
      content,
      tags,
      banners
    })
    if(re.stat === 'ok') {
      message.success('发布成功！')
      router.back()
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <input title='请输入文章标题' type="text" placeholder='输入文章标题...' value={title} onChange={e => setTitle(e.target.value)} />
        <div className={styles.btn}>
          <Button
            type='primary'
            onClick={() => {
              // newPost()
              setDialogVisible(true)
            }}
            >更 新</Button>
          <Dialog title={'更新文章'} width={500} onClose={() => {setDialogVisible(false)}} visible={dialogVisible}>
            <FormItem label='输入标签:' style={{marginTop: '0'}}>
              <TagGroup tags={tags} onChange={setTags} />
            </FormItem>
            <FormItem label='上传封面:'>
              <Uploader upload={uploadBanner} initialValue={post.banners[0]} type='banner' style={{width: '160px', height: '100px'}} />
            </FormItem>
            <FormItem label='编辑摘要:'>
              <TextArea value={subTitle} onChange={e => setSubTitle(e.target.value)} required></TextArea>
            </FormItem>
            <FormItem style={{display: 'flex', justifyContent: 'flex-end'}}>
              <Button onClick={() => setDialogVisible(false)} className={styles.btn}>取消</Button>
              <Button onClick={() => {
                updatePost()
              }} type='primary'>确定并更新</Button>
            </FormItem>
          </Dialog>
        </div>
      </div>
      <Editor content={content} onChange={setContent}></Editor>
    </div>
  )
}

export default Edit