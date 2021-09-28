import React, { Fragment, useState, useEffect } from 'react'
import Tab from '../components/Tab'
import { PostItem } from '../components/MarkDown'
// import { usePosts } from '../hooks'
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
  const re = await api.post.queryPosts({pageIndex: 1, pageSize: 20, keyword: '', sort: 'ctime'})
  let posts: PostInfo[] = []
  if(re.stat === 'ok') {
    posts = re.data.posts
  }

  return {
    props: {
      posts
    }
  }
}

const Index = (props) => {
  const [currentTab, setCurrentTab] = useState<TabType>('Latest')
  const [pageIndex, setPageIndex] = useState(1)
  const pageSize = 10
  const [posts, setPosts] = useState<PostInfo[]>(props.posts || [])
  const [toBottom, setToBottom] = useState(false)

  useEffect(() => {
    async function request(pageIndex: number, pageSize: number, sort: 'ctime' | 'views') {
      const re = await api.post.queryPosts({pageIndex, pageSize, keyword: '', sort})
      if(re.stat === 'ok') {
        setPosts(posts.concat(re.data.posts))
      }
    }
    const sortType = SORTMap[currentTab] as ('ctime' | 'views')
    toBottom && request(pageIndex, pageSize, sortType)
  }, [toBottom, currentTab, pageIndex])

  useEffect(() => {
    const handleScroll = (e) => {
      const clientHeight = document.documentElement.clientHeight
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      if(scrollHeight - scrollTop - clientHeight <= 16) {
        setToBottom(true)
        setPageIndex(pageIndex + 1)
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
              onClick: () => {
                setCurrentTab('Latest')
                setPosts([])
                document.documentElement.scrollTop = 0
              }
            },
            {
              name: 'Popular',
              content: <div>最热</div>,
              onClick: () => {
                setCurrentTab('Popular')
                setPosts([])
                document.documentElement.scrollTop = 0
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