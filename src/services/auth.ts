import { post } from "../libs/reaquest"
import { BaseResponse, AuthInfo } from "../interface";

// 1. 登录
export function userLogin(params: AuthInfo) {
  return post<BaseResponse>('/auth/login', params)
}

export function userRegist(params: AuthInfo) {
  return post<BaseResponse>('/auth/regist', params)
}

export function userLogout() {
  return post<BaseResponse>('/auth/logout')
}