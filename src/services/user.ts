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

export function queryUsers(params: {keyword: string, pageIndex: number, pageSize: number}) {
  return post<BaseResponse>('/user/search', params)
}

export function getUserInfo(params: { uid: string }) {
  return post<BaseResponse>('/user/info', params)
}

export function queryUserStars(params: UserPostsQueryParams) {
  return post<BaseResponse>('/user/stars', params)
}

export function queryUserFollows(params: UserPostsQueryParams) {
  return post<BaseResponse>('/user/follows', params)
}

export function queryUserFollowers(params: UserPostsQueryParams) {
  return post<BaseResponse>('/user/followers', params)
}