const Router = require('koa-router')
const { postInfoList, postDetailList, calendar, tokens, users } = require('../data')
const { genOk, genErr } = require('../libs')

const router = new Router({
  prefix: '/api/user'
})

function getArrays(data, length) {
  const re = []
  for(let i = 0; i < length; i++) {
    re.push(data)
  }
  return re
}

router.post('/follow', async ctx => {
  try {
    const token = ctx.cookies.get('token')
    console.log(token)
    ctx.body = genOk()
  } catch (error) {
    ctx.body = genErr()
  }
})

router.post('/unfollow', async ctx => {
  try {
    ctx.body = genOk()
  } catch (error) {
    ctx.body = genErr()
  }
})

router.post('/info', async ctx => {
  try {
    const { uid } = ctx.request.body
    if(!uid) {
      ctx.body = genErr('Bad_Request', '用户ID不能为空')
    } else if (users.findIndex(u => u.uid === uid) < 0) {
      ctx.body = genErr('User_Not_Exist', '用户不存在')
    } else {
      ctx.body = genOk(users.find(u => u.uid === uid))
    }
  } catch (error) {
    ctx.body = genErr('Internal_Server_Error')
  }
})

router.post('/search', async ctx => {
  try {
    const { keyword, pageSize = 10, pageIndex = 1 } = ctx.request.body
    const list = users.filter(user => user.uid.includes(keyword) || user.nickname.includes(keyword))
    genOk({
      posts: list.slice(pageSize * (pageIndex - 1), pageSize),
      total: list.length
    })
  } catch (error) {
    ctx.body = genErr()
  }
})

router.post('/follows', async ctx => {
  try {
    const { uid } = ctx.request.body
    if(uid === 'cmkk') ctx.body = genOk({
      users: [users[1]],
      total: 1
    })
    else ctx.body = genOk({
      users: [users[0]],
      total: 1
    })
  } catch (error) {
    ctx.body = genErr()
  }
})

router.post('/followers', async ctx => {
  try {
    const { uid } = ctx.request.body
    if(uid === 'cmkk') ctx.body = genOk({
      users: [users[1]],
      total: 1
    })
    else ctx.body = genOk({
      users: [users[0]],
      total: 1
    })
  } catch (error) {
    ctx.body = genErr()
  }
})

router.post('/posts', async ctx => {
  try {
    const { uid, pageSize = 10, pageIndex = 1 } = ctx.request.body
    const list = postInfoList.filter(post => post.author.uid === uid)
    ctx.body = genOk({
      posts: list.slice(pageSize * (pageIndex - 1), pageSize),
      total: list.length
    })
  } catch (error) {
    ctx.body = genErr()
  }
})

router.post('/stars', async ctx => {
  try {
    const { uid, pageSize = 10, pageIndex = 1 } = ctx.request.body
    const list = postDetailList.filter(({ author, star }) => star)
    ctx.body = genOk({
      posts: list.slice(pageSize * (pageIndex - 1), pageSize),
      total: list.length
    })
  } catch (error) {
    ctx.body = genErr()
  }
})

router.put('/avatar', async ctx => {
  try {
    const { avatar } = ctx.request.body
    ctx.body = genOk()
  } catch (error) {
    ctx.body = genErr()
  }
})

router.put('/nickname', async ctx => {
  try {
    const { nickname } = ctx.request.body
    ctx.body = genOk()
  } catch (error) {
    ctx.body = genErr()
  }
})

router.put('/passwd', async ctx => {
  try {
    const { newPasswd, oldPasswd } = ctx.request.body
    ctx.body = genOk()
  } catch (error) {
    ctx.body = genErr()
  }
})

router.post('/act', async ctx => {
  try {
    const { uid } = ctx.request.body
    ctx.body = genOk(
      {
        list: calendar,
        year: '2021'
      }
    )
  } catch (error) {
    ctx.body = genErr()
  }
})


module.exports = router