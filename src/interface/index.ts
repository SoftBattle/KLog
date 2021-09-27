export interface BaseResponse {
  stat: string,
  msg?: string,
  data: any
}

export interface UserInfo {
  uid: string
  nickname: string
  avatar: string
}

export interface PostInfo {
  pid: string
  title: string
  subTitle: string
  banners: string[]
  views: number
  ctime: Date
  mtime: Date
  tags: string[]
  authour: UserInfo
}

export interface postDetail extends PostInfo {
  content: string
}

export interface AuthInfo {
  uid: string
  passwd: string
}