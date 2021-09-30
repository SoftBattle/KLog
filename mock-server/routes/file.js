const Router = require('koa-router')
const { genOk, genErr } = require('../libs')

// const { users } = require('../data')

const router = new Router({
  prefix: '/api/file'
})

module.exports = router