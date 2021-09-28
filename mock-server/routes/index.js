const Router = require('koa-router')
const postRoute = require('./post')

const router = new Router()

router.use(postRoute.routes())

module.exports = router