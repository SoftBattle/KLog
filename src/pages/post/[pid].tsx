import React, { useEffect, useState, Fragment } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { PostDetail } from '../../interface'
import api from '../../services'
import { Viewer } from '../../components/MarkDown'
import Avatar from '../../components/Avatar'
import Button from '../../components/Button'
import styles from './index.module.scss'
import { timeFormater } from '../../utils/formater'

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const re = await api.post.queryPostDetail(params.pid as string)
  let post: PostDetail
  if(re.stat === 'ok') {
    post = re.data
    return {
      props: {
        post
      },
      // revalidate: 1
    }
  }
  else {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }
}


const Post = ({ post }: {
  post: PostDetail
}) => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <Avatar imgSrc={post.author.avatar} size={40} type='circle'></Avatar>
          </div>
          <div className={styles.info}>
            <div className={styles.nickname}>
              {post.author.nickname}
            </div>
            <div>
              <time>{timeFormater(post.ctime)}</time>
              <span>{post.views} views</span>
            </div>
          </div>
          <div className={styles.follow}>
            <Button size='max' onClick={() => {}} >关注</Button>
          </div>
        </div>

        <div className={styles.post}>
          {
            post.banners.length > 0 && <div className={styles.banner}>
              <img src={post.banners[0]} alt="banner" />
            </div>
          }
          <Viewer content={post.content}></Viewer>
        </div>
      </div>
    </Fragment>
  )
}

export default Post