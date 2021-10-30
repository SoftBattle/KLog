import React, { Fragment, useState, useEffect, useRef, useCallback } from 'react'
import Tab from '../components/Tab'
import { PostItem } from '../components/MarkDown'
import { useDebounce } from 'ahooks'
import styles from './index.module.scss'
import { GetServerSideProps } from 'next'
import { PostInfo } from '../interface'
import api from '../services'

type TabType = 'Latest' | 'Popular'

const SORTMap = {
  'Latest': 'ctime',
  'Popular': 'views'
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const re = await api.post.queryPosts({pageIndex: 1, pageSize: 10, keyword: '', sort: 'ctime'})
  let posts: PostInfo[] = []
  let total: number
  if(re.stat === 'ok') {
    posts = re.data.posts
    total = re.data.total || 0
  }
  return {
    props: {
      posts,
      total
    }
  }
}

const Index = (props) => {
  const [currentTab, setCurrentTab] = useState<TabType>('Latest')
  const [pageIndex, setPageIndex] = useState(1)
  const pageSize = 10
  const [posts, setPosts] = useState<PostInfo[]>(props.posts || [])
  const total = props.total

  const loadMore = useCallback(async () => {
    if(posts.length >= total) return
    const re = await api.post.queryPosts({pageIndex: pageIndex + 1, pageSize, keyword: '', sort: SORTMap[currentTab] as 'ctime' | 'views'})
    if(re.stat === 'ok') {
      if(posts.length < re.data.total) {
        setPosts(ps => [...ps, ...re.data.posts])
        setPageIndex(idx => idx + 1)
      }
    }
  }, [pageIndex])

  useEffect(() => {
    const init = async () => {
      const re = await api.post.queryPosts({pageIndex: 1, pageSize, keyword: '', sort: SORTMap[currentTab] as 'ctime' | 'views' })
      if(re.stat === 'ok') {
        setPosts(ps => [...re.data.posts])
      }
    }
    init()
  }, [currentTab])

  useEffect(() => {
    const handleScroll = (e) => {
      const clientHeight = document.documentElement.clientHeight
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      if(Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
        loadMore()
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [loadMore])

  const getPostsList = () => posts.map((post, index) => {
    return <PostItem post={post} key={index} />
  })

  return (
    <Fragment>
      <div className={styles.show}>
        <div className={styles.slogan}>
          <span>We are </span>
          <span>talking here...</span>
        </div>
      </div>

      <div className={styles.page_tab}>
        <Tab 
          tabs={[
            {
              name: 'Latest',
              content: <div>最新</div>,
              onClick: async () => {
                setCurrentTab('Latest')
                document.documentElement.scrollTop = 0
                setPageIndex(1)
              }
            },
            {
              name: 'Popular',
              content: <div>最热</div>,
              onClick: async () => {
                setCurrentTab('Popular')
                document.documentElement.scrollTop = 0
                setPageIndex(1)
              }
            }
          ]} 
          currentTab={currentTab}
          ></Tab>
      </div>

      <div className={styles.posts}>
        {
          getPostsList()
        }
      </div>
    </Fragment>
  )
}

export default Index