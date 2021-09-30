import { post } from "../libs/reaquest"
import { BaseResponse, PostInfo, PostDetail } from "../interface"

interface UserPostsQueryParams {
  uid: string
  pageIndex: number
  pageSize: number
  sort: 'ctime' | 'views'
  keyword: string
}

export function queryUserPosts(params: UserPostsQueryParams) {
  return post<BaseResponse>('/user/posts', params)
}

export function followAuthor(params: {uid: string}) {
  return post<BaseResponse>('/user/follow', params)
}

export function unfollowAuthor(params: {uid: string}) {
  return post<BaseResponse>('/user/unfollow', params)
}