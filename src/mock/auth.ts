import Mock from 'mockjs'

Mock.mock('/api/auth/login', 'post', ops => {
  const { body } = ops
  const { uid, passwd } = body
  if(uid === 'cmkk' && passwd ==  'r12345')
    return {
      stat: 'ok',
      data: '21hbdhewbdk121213'
    }
  else return {
    stat: 'err',
    data: 'error'
  }
})