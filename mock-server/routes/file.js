const Router = require('koa-router')
const { genOk, genErr } = require('../libs')

// const { users } = require('../data')

const router = new Router({
  prefix: '/api/file'
})

router.post('/upload', async ctx => {
  try {
    const file = Object.values(ctx.request.files)[0]
    ctx.body = genOk('/md/chart.png')
  } catch (error) {
    ctx.body = genErr()
  }
})

module.exports = router