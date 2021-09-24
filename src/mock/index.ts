import Mock from 'mockjs'

Mock.mock('/api/test', 'get', {
  'data': 'hello world!'
})