import { useState, useRef, useEffect } from 'react'
import { PostInfo } from '../interface'
import api from '../services'


/**
 * 
 * @param pageIndex 
 * @param pageSize 
 * @param sort 
 * @param keyword 
 * @returns {
 *  posts: 博客
 *  total: 总条数
 *  setRf: 刷新标志，为true时重新请求
 * }
 */
export function usePosts(pageIndex: number, pageSize: number, sort: 'ctime' | 'views', keyword = '') {
  
  const [posts, setPosts] = useState<PostInfo[]>()
  const [total, setTotal] = useState(0)
  const [rf, setRf] = useState(false)
  
  const getPosts = async () => {
    // 按照关键词获取文章
    const re = await api.post.queryPosts({ pageIndex, pageSize, sort, keyword })
    if(re.stat === 'ok') {
      const data = re.data
      setPosts(data.posts)
      setTotal(data.total)
    } else {
      alert('请求失败')
    }
    setRf(false)
  }

  useEffect(() => {
    rf && getPosts()
  }, [rf, pageIndex, pageSize, sort, keyword])

  return {
    posts,
    total,
    setRf
  }
}

export function useUserPosts(pageIndex: number, pageSize: number, sort: 'ctime' | 'views', keyword = '') {
  
}