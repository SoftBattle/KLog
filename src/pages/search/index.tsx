import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import Tab from '../../components/Tab'
import { PostInfo, UserInfo, PostsQueryParams } from '../../interface'
import { PostItem } from '../../components/MarkDown'
import UserItem from '../../components/UserItem'
import Pagination from '../../components/Pagination'
import styles from './index.module.scss'
import api from '../../services'
import { connect } from 'react-redux'
import { changeType, changeValue, SearchStore } from '../../store/search/actions'
import { Dispatch } from 'redux'

const pageSize = 20
const sort = 'views'

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { keyword, type='' } = ctx.query
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
  type: SearchType
  changeKeywordValue: Function
  changeSearchType: Function
  posts: PostInfo[]
  users: UserInfo[]
  total: number
}) => {
  // const [currentTab, setCurrentTab] = useState<SearchType>()
  const currentTab = props.type
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
    }
  }

  const getUsers = async (params: {keyword: string, pageIndex: number, pageSize: number}) => {
    const re = await api.user.queryUsers(params)
    if(re.stat === 'ok') {
      console.log(re.data.users)
      setUsers(re.data.users)
      setTotal(re.data.total)
    }
  }

  const getList = () => {
    switch(currentTab) {
      case 'user':
        return users.map((user, idx) => <UserItem user={user} key={idx} />)
      default:
        return posts.map((post, idx) => <PostItem post={post} key={idx} />)
    }
  }

  useEffect(() => {
    if(currentTab === 'user') {
      getUsers({pageIndex, pageSize, keyword: props.keyword})
    } else {
      getPosts({pageIndex, pageSize, keyword: props.keyword, sort})
    }
  }, [pageIndex, currentTab])

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
                // setCurrentTab('post')
                props.changeSearchType('post')
                document.documentElement.scrollTop = 0
                setPageIndex(1)
              }
            },
            {
              name: 'user',
              content: <div>用户</div>,
              onClick: async () => {
                // setCurrentTab('user')
                props.changeSearchType('user')
                document.documentElement.scrollTop = 0
                setPageIndex(1)
              }
            }
          ]} 
          currentTab={currentTab}
          ></Tab>
      </div>
      <div className={styles.list}>
        {
          getList()
        }
      </div>
      <div className={styles.pagi}>
        <Pagination current={pageIndex} total={total} pageSize={20} onChange={(current) => {
          setPageIndex(current)
          document.documentElement.scrollTop = 0
        }} />
      </div>
    </div>
  )
}

const mapStateToProps = ({ searchStore }: { searchStore: SearchStore }) => {
  return {
    keyword: searchStore?.value,
    type: searchStore?.type
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeKeywordValue: (data: string) => dispatch(changeValue(data)),
    changeSearchType: (data: SearchType) => dispatch(changeType(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)