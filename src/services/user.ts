import { post, put } from "../libs/reaquest"
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

export function updateUserNickname(params: { nickname: string }) {
  return put<BaseResponse>('/user/nickname', params)
}

export function updateUserAvatar(params: { avatar: string }) {
  return put<BaseResponse>('/user/avatar', params)
}

export function updateUserPasswd(params: { newPasswd: string, oldPasswd: string }) {
  return put<BaseResponse>('/user/passwd', params)
}

export function getUserActivity(params: { uid: string }) {
  return post<BaseResponse>('/user/act', params)
}