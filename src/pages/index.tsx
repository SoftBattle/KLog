import React, { Fragment, useState, useEffect, useRef } from 'react'
import Tab from '../components/Tab'
import { PostItem } from '../components/MarkDown'
// import { usePosts } from '../hooks'
import styles from './index.module.scss'
import { GetServerSideProps } from 'next'
import { PostInfo } from '../interface'
import api from '../services'
import { useRequest } from 'ahooks'

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

// 触底刷新机制需要完善

const Index = (props) => {
  const [currentTab, setCurrentTab] = useState<TabType>('Latest')
  const [pageIndex, setPageIndex] = useState(1)
  const pageSize = 10
  const [posts, setPosts] = useState<PostInfo[]>(props.posts || [])
  const [toBottom, setToBottom] = useState(false)
  // const [total, setTotal] = useState(props.total || 0)

  async function request(pageIndex: number, pageSize: number, sort: 'ctime' | 'views') {
    const re = await api.post.queryPosts({pageIndex, pageSize, keyword: '', sort})
    if(re.stat === 'ok') {
      // setTotal(t => re.data?.total || t)
      if(posts.length < re.data.total) {
        setPosts(ps => [...ps, ...re.data.posts])
        setPageIndex(idx => idx + 1)
      }
    }
  }

  useEffect(() => {
    const sortType = SORTMap[currentTab] as ('ctime' | 'views')
    (pageIndex > 1 && toBottom) && request(pageIndex, pageSize, sortType)
  }, [toBottom])

  useEffect(() => {
    const handleScroll = (e) => {
      const clientHeight = document.documentElement.clientHeight
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      if(Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
        setToBottom(true)
      } else {
        setToBottom(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const getPostsList = () => posts.map((post, index) => {
    return <PostItem post={post} key={index} />
  })

  return (
    <Fragment>
      <div className={styles.show}>
        {/* 欢迎展示区 */}
        <div className={styles.slogan}>
          <span>We are </span>
          <span>talking here...</span>
        </div>
      </div>

      <div className={styles.page_tab}>
        {/* tab菜单区 */}
        <Tab 
          tabs={[
            {
              name: 'Latest',
              content: <div>最新</div>,
              onClick: async () => {
                setPosts([])
                setCurrentTab('Latest')
                document.documentElement.scrollTop = 0
                // console.log(pageIndex)
                setPageIndex(1)
                const sortType = SORTMap['Latest'] as ('ctime' | 'views')
                request(1, pageSize, sortType)
              }
            },
            {
              name: 'Popular',
              content: <div>最热</div>,
              onClick: async () => {
                setCurrentTab('Popular')
                setPosts([])
                document.documentElement.scrollTop = 0
                setPageIndex(1)
                const sortType = SORTMap['Popular'] as ('ctime' | 'views')
                request(1, pageSize, sortType)
              }
            }
          ]} 
          currentTab={currentTab}
          ></Tab>
      </div>

      <div className={styles.posts}>
        {/* post显示区 */}
        {
          getPostsList()
        }
      </div>
    </Fragment>
  )
}

export default Index