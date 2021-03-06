import React, { useEffect, useState, Fragment } from 'react'
import { GetServerSideProps, GetStaticPaths, GetStaticProps, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import { PostDetail } from '../../interface'
import api from '../../services'
import { Viewer } from '../../components/MarkDown'
import Avatar from '../../components/Avatar'
import Button from '../../components/Button'
import { IconStar, IconComemnt, IconLike } from '../../components/Icons'
import message from '../../components/Message'
import styles from './index.module.scss'
import { timeFormater } from '../../utils/formater'

// export const getStaticPaths: GetStaticPaths = () => {
//   return {
//     paths: [],
//     fallback: true
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const re = await api.post.queryPostDetail(params.pid as string)
//   let post: PostDetail
//   if(re.stat === 'ok') {
//     post = re.data
//     return {
//       props: {
//         post
//       },
//       revalidate: 1
//     }
//   }
//   else {
//     return {
//       redirect: {
//         destination: '/404',
//         permanent: false
//       }
//     }
//   }
// }

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { pid } = ctx.params
  const re = await api.post.queryPostDetail(pid as string)
  let post: PostDetail
  if(re.stat === 'ok') {
    post = re.data
    return {
      props: {
        pid,
        post
      },
    }
  } else {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }
}


const Post = (props: {
  post: PostDetail
  pid: string
}) => {
  const [post, setPost] = useState<PostDetail>(props.post)
  
  // 刷新数据
  const refreshPost = async () => {
    const re = await api.post.queryPostDetail(props.pid)
    if(re.stat === 'ok') {
      setPost(re.data)
      console.log(re.data)
    } else {
      // 提示错误信息
    }
  }

  // 收藏或反取消
  const starOrUnstar = async () => {
    const star = props.post.star
    if(star) {
      // unstar action
      const re = await api.post.unstarPost({pid: props.pid})
      if(re.stat === 'ok') {
        // 提示收藏信息
        message.success('Unfollow success!')
        // 成功时刷新数据
        await refreshPost()
      } else {
        message.error('Unfollow failed.')
      }
    } else {
      const re = await api.post.starPost({pid: props.pid})
      if(re.stat === 'ok') {
        message.success('Unfollow success!')
        // star action
        await refreshPost()
      } else {
        // 提示收藏信息
        message.error('Unfollow failed.')
      }
    }
  }

  // 关注
  const followOrUnfollow = async () => {
    const follow = post.author.follow
    if(follow) {
      // 执行取关操作
      const re = await api.user.unfollowAuthor({uid: post.author.uid})
      if(re.stat === 'ok') {
        message.success('Unfollow success!')
        await refreshPost()
      } else {
        message.error('Unfollow failed.')
        await refreshPost()
      }
    } else {
      // 执行关注操作
      const re = await api.user.followAuthor({uid: post.author.uid})
      if(re.stat === 'ok') {
        message.success('Follow success!')
      } else {
        message.error('Follow failed.')
      }
    }
  }

  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div className={styles.user}>
          <Link href={`/space/${post.author.uid}`}>
            <div className={styles.avatar}>
              <Avatar imgSrc={post.author.avatar} size={40} type='circle'></Avatar>
            </div>
          </Link>
          <div className={styles.info}>
            <Link href={`/space/${post.author.uid}`}>
              <div className={styles.nickname}>
                {post.author.nickname}
              </div>
            </Link>
            <div>
              <time>{timeFormater(post.ctime)}</time>
              <span>{post.views} views</span>
              <span title='post tags'>
                {
                  post.tags.join(' · ')
                }
              </span>
            </div>
            <div className={styles.tags}></div>
          </div>
          <div className={styles.follow}>
            <Button size='max' onClick={() => {
              followOrUnfollow()
            }}>follow</Button>
          </div>
        </div>

        <div className={styles.post}>
          <div className={styles.toolbar}>
            <div 
              title='star this post'
              className={styles.btn} onClick={() => {
              starOrUnstar()
            }}>
              <IconStar cn={`${styles.icon} ${post.star ? styles.full : ''}`} />
            </div>
            <div className={styles.btn}>
              <IconComemnt cn={styles.icon} />
            </div>
            <div className={styles.btn}>
              <IconLike cn={styles.icon} />
            </div>
          </div>
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