import Mock from 'mockjs'
import './auth'
import './file'
import './post'
import './user'
Mock.mock('/api/test', 'get', {
  'data': 'hello world!'
})

// export default Mock