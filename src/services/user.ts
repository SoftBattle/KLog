import { post } from "../libs/reaquest"
import { BaseResponse, PostInfo, postDetail } from "../interface"

interface UserPostsQueryParams {
  uid: string
  pageIndex: number
  pageSize: number
  sort: 'ctime' | 'views'
  keyword: string
}

export function queryUserPosts(params: UserPostsQueryParams) {
  return post<BaseResponse>('/post/user/posts', params)
}