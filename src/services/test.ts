import { get } from '../libs/reaquest'
import { BaseResponse } from '../interface'

export function testGet() {
  return get<BaseResponse>('/test')
}