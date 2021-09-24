import { get } from '../libs/reaquest'
import { BaseResponse } from '../types'

export function testGet() {
  return get<BaseResponse>('/test')
}