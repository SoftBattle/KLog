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

Mock.mock('/api/auth/regist', 'post', ops => {
  const { uid, passwd } = JSON.parse(ops.body)
  if(uid && passwd)
    return {
      stat: 'ok',
      data: {
        uid,
        nickname: '用户' + uid,
        avatar: '/avatar.svg',
        token: 'dedw211232dcsddedq'
      }
    }
  else return {
    stat: 'user_exist_err',
    msg: '用户已存在'
  }
})

Mock.mock('/api/auth/logout', 'post', ops => {
  return {
    stat: 'ok',
    msg: '登出成功'
  }
})