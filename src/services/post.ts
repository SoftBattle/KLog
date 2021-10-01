import { get, post } from "../libs/reaquest"
import { BaseResponse, PostInfo, PostDetail, Post, PostsQueryParams } from "../interface"

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

export function newPost(params: Post) {
  return post<BaseResponse>(`/post/new`, params)
}