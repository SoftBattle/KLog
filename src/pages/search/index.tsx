import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import Tab from '../../components/Tab'
import { PostInfo, UserInfo, PostsQueryParams } from '../../interface'
import { PostItem } from '../../components/MarkDown'
import UserItem from '../../components/UserItem'
import styles from './index.module.scss'
import api from '../../services'

const pageSize = 20
const sort = 'views'

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { keyword } = ctx.query
  const re = await api.post.queryPosts({
    pageIndex: 1,
    pageSize,
    keyword: keyword as string,
    sort
  })
  if(re.stat === 'ok') {
    const posts = re.data.posts
    const total= re.data.total
    return {
      props: {
        keyword,
        users: [],
        posts,
        total
      }
    }
  }
}

type SearchType = 'user' | 'post'

// 改用分页吧，触底刷新需要改进

const Search = (props: { 
  keyword: string
  posts: PostInfo[]
  users: UserInfo[]
  total: number
}) => {
  const [currentTab, setCurrentTab] = useState<SearchType>('post')
  const [users, setUsers] = useState<UserInfo[]>(props.users || [])
  const [posts, setPosts] = useState<PostInfo[]>(props.posts || [])
  const [pageIndex, setPageIndex] = useState(1)
  const [total, setTotal] = useState(props.total || 0)

  const getMore = async (type: SearchType) => {
    if(type === 'post') {
      const re = await api.post.queryPosts({
        pageIndex,
        pageSize,
        keyword: props.keyword,
        sort
      })
      if(re.stat === 'ok') {
        setPosts(posts.concat(re.data.posts))
        // setTotal(re.data.total)
      }
    } else {
      const re = await api.user.queryUsers({
        pageIndex,
        pageSize,
        keyword: props.keyword,
      })
      if(re.stat === 'ok') {
        setUsers(users.concat(re.data.users))
        // setTotal(re.data.total)
      }
    }
  }

  const getPosts = async (params: PostsQueryParams) => {
    const re = await api.post.queryPosts(params)
    if(re.stat === 'ok') {
      console.log(re.data.posts)
      setPosts(re.data.posts)
      setTotal(re.data.total)
      setPageIndex(1)
    }
  }

  const getUsers = async (params: {keyword: string, pageIndex: number, pageSize: number}) => {
    const re = await api.user.queryUsers(params)
    if(re.stat === 'ok') {
      console.log(re.data.users)
      setUsers(re.data.users)
      setTotal(re.data.total)
      setPageIndex(1)
    }
  }

  const [toBottom, setToBottom] = useState(false)

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

  const getList = () => {
    switch(currentTab) {
      case 'user':
        return users.map((user, idx) => <UserItem user={user} key={idx} />)
      default:
        return posts.map((post, idx) => <PostItem post={post} key={idx} />)
    }
  }

  useEffect(() => {
    // index改变，tab不变
    toBottom && getMore(currentTab)
  }, [pageIndex])

  return (
    <div className={styles.wrapper}>
      {/* search {keyword} */}
      <div className={styles.tab}>
        <Tab 
          tabs={[
            {
              name: 'post',
              content: <div>文章</div>,
              onClick: async () => {
                setCurrentTab('post')
                document.documentElement.scrollTop = 0
                await getPosts({pageIndex: 1, pageSize, keyword: props.keyword, sort})
              }
            },
            {
              name: 'user',
              content: <div>用户</div>,
              onClick: async () => {
                setCurrentTab('user')
                document.documentElement.scrollTop = 0
                await getUsers({pageIndex: 1, pageSize, keyword: props.keyword})
              }
            }
          ]} 
          currentTab={currentTab}
          ></Tab>
      </div>
      <div className={styles.list}>
        {
          // currentTab === 'post' ?
          //   posts.map((post, idx) => {
          //     return <PostItem post={post} key={idx} />
          //   }) : users.map((user, idx) => {
          //     return <UserItem user={user} key={idx} />
          //   })
          getList()
        }
      </div>
    </div>
  )
}

export default Search