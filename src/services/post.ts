import { post } from "../libs/reaquest"
import { BaseResponse, PostInfo, postDetail } from "../interface"

interface PostsQueryParams {
  pageIndex: number
  pageSize: number
  sort: 'ctime' | 'views'
  keyword: string
}

export function queryPosts(params: PostsQueryParams) {
  return post<BaseResponse>('/post/list', params)
}