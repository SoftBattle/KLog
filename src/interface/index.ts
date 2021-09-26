export interface BaseResponse {
  stat: string,
  msg?: string,
  data: any
}

export interface postInfo {}

export interface postDetail {}

export interface UserInfo {}

export interface AuthInfo {
  uid: string
  passwd: string
}