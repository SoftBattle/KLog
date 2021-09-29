const Router = require('koa-router')
const postRoute = require('./post')
const authRoute = require('./auth')

const router = new Router()

router.use((ctx, next) => {
  console.log(ctx.method, ctx.url, ctx.request.body || '')
  next()
})

router.use(authRoute.routes())

router.use(postRoute.routes())

module.exports = router