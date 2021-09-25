import Mock from 'mockjs'
import './auth'
Mock.mock('/api/test', 'get', {
  'data': 'hello world!'
})