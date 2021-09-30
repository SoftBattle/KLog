const Router = require('koa-router')
const { posts, postDetails } = require('../data')
const { genOk, genErr } = require('../libs')

const router = new Router({
  prefix: '/api/user'
})

router.post('/follow', async ctx => {
  try {
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

module.exports = router