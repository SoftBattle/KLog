const Router = require('koa-router')
const { genOk, genErr } = require('../libs')
const { users, tokens } = require('../data')

const router = new Router({
  prefix: '/api/auth'
})

router.post('/login', async ctx => {
  try {
    const { uid, passwd } = ctx.request.body
    let usr
    let flag = false
    for(let i = 0; i < users.length; i++) {
      const user = users[i]
      if(user.uid === uid && user.passwd === passwd) {
        usr = {
          uid: user.uid,
          nickname: user.nickname,
          avatar: user.avatar,
          token: tokens.find(tk => tk.uid === uid)
        }
        flag = true
      }
    }
    if(flag) {
      console.log(usr)
      ctx.cookies.set('token', usr.token)
      ctx.body = genOk(usr)
    } else {
      ctx.body = genErr()
    }
  } catch (error) {
    ctx.body = genErr()
  }
})

router.post('/regist', async ctx => {
  try {
    const { uid, passwd } = ctx.request.body
    let usr = {
      uid: uid,
      nickname: '用户' + uid,
      avatar: '',
      token: 'hduyewdgqw23167147hdebfew'
    }
    ctx.body = genOk(usr)
  } catch (error) {
    ctx.body = genErr()
  }
})

router.post('/logout', async ctx => {
  try {
    ctx.body = genOk()
  } catch (error) {
    ctx.body = genErr()
  }
})

module.exports = router