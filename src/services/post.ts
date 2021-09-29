import { get, post } from "../libs/reaquest"
import { BaseResponse, PostInfo, PostDetail } from "../interface"

interface PostsQueryParams {
  pageIndex: number
  pageSize: number
  sort: 'ctime' | 'views'
  keyword: string
}

export function queryPosts(params: PostsQueryParams) {
  return post<BaseResponse>('/post/list', params)
}

export function queryPostDetail(pid: string) {
  return get<BaseResponse>(`/post/${pid}`)
}

export function starPost(params: {pid: string}) {
  return post<BaseResponse>(`/post/star`, params)
}

export function unstarPost(params: {pid: string}) {
  return post<BaseResponse>(`/post/unstar`, params)
}