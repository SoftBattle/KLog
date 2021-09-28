import Mock from 'mockjs'

Mock.mock('/api/auth/login', 'post', ops => {
  const { body } = ops
  const { uid, passwd } = JSON.parse(body)
  if(uid === 'cmkk' && passwd ==  'r12345')
    return {
      stat: 'ok',
      data: {
        uid: 'cmkk',
        nickname: 'cmkangkang',
        avatar: '/avatar.svg',
        token: 'dedw211232dcsdcds'
      }
    }
  else return {
    stat: 'err',
    data: 'error'
  }
})