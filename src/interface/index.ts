export interface BaseResponse {
  stat: string,
  msg?: string,
  data: any
}

export interface UserInfo {
  uid: string
  nickname: string
  avatar: string
  follow: boolean
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
  author: UserInfo
}

export interface PostDetail extends PostInfo {
  content: string,
  star: boolean
}

export interface Post {
  title: string,
  subTitle: string
  banners: string[]
  tags: string[]
  content: string
}

export interface AuthInfo {
  uid: string
  passwd: string
}