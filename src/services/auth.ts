import { post } from "../libs/reaquest"
import { BaseResponse, UserInfo } from "../types";

interface AuthInfo {
  uid: string
  passwd: string
}

// 1. 登录
export function userLogin(params: AuthInfo) {
  return post<BaseResponse>('/auth/login', params)
}