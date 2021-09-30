const Router = require('koa-router')
const postRoute = require('./post')
const authRoute = require('./auth')
const userRoute = require('./user')
const fileRoute = require('./file')

const router = new Router()

router.use((ctx, next) => {
  console.log(ctx.method, ctx.url, ctx.request.body || '')
  next()
})

router.use(authRoute.routes())

router.use(postRoute.routes())

router.use(userRoute.routes())

router.use(fileRoute.routes())

module.exports = router