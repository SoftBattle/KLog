import axios from 'axios'
// import { BaseResponse } from '../types'

const BS_URL = '/api'

const data = axios.create({
  baseURL: BS_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  withCredentials: true
})

const file = axios.create({
  baseURL: BS_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  withCredentials: true
})

data.interceptors.response.use(res => res.data, err => Promise.reject(err))

file.interceptors.response.use(res => res.data, err => Promise.reject(err))

export const get = async <T>(url: string) => {
  const res: T = await data.get(url)
  return res
}

export const post = async <T>(url: string, params?: object) => {
  console.log(params)
  const res: T = await data.post(url, params)
  return res
}

export const del = async <T>(url: string) => {
  const res: T = await data.delete(url)
  return res
}

export const put = async <T>(url: string, params?: object) => {
  console.log(params)
  const res: T = await data.put(url, params)
  return res
}

export const upload = async <T>(url: string, formdata?: object) => {
  // file or data
  const res: T = await data.post(url, formdata, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
  return res
}