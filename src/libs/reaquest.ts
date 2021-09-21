import axios from 'axios'
// import { BaseResponse } from '../types'

const BS_URL = ''

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
    'Content-Type': 'application/json;charset=UTF-8'
  },
  withCredentials: true
})

data.interceptors.response.use(res => res.data, err => Promise.reject(err))

file.interceptors.response.use(res => res.data, err => Promise.reject(err))