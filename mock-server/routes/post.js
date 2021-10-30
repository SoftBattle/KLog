const Router = require('koa-router')
const { postInfoList, postDetailList } = require('../data')
const { genOk, genErr } = require('../libs')

const router = new Router({
  prefix: '/api/post',
})

router.post('/list', async (ctx) => {
  try {
    const {
      keyword = '',
      pageIndex = 1,
      pageSize = 10,
      sort = 'ctime',
    } = ctx.request.body
    const list = postInfoList.filter((post) => {
      const temp = Object.values(post)
      return temp.some((k) => {
        return typeof k === 'string' && k.includes(keyword)
      })
    })
    const length = list.length
    if(sort !== 'ctime') {
      list.sort((a, b) => a.views - b.views)
    }
    ctx.body = genOk({
      posts: list.splice(pageSize * (pageIndex - 1), pageSize),
      total: length,
    })
  } catch (err) {
    ctx.body = genErr()
  }
})

router.get('/:pid', async (ctx) => {
  try {
    const pid = ctx.params.pid
    const data = postDetailList.find((post) => post.pid === pid)
    if (!!data) ctx.body = genOk(data)
    else {
      throw new Error('post not found')
    }
  } catch (error) {
    console.log(error)
  }
})

router.post('/star', async (ctx) => {
  try {
    const { pid } = ctx.request.body
    ctx.body = genOk()
  } catch (error) {
    ctx.body = genErr()
  }
})

router.post('/unstar', async (ctx) => {
  try {
    const { pid } = ctx.request.body
    ctx.body = genOk()
  } catch (error) {
    ctx.body = genErr()
  }
})

router.post('/new', async (ctx) => {
  try {
    const token = ctx.cookies.get('token')
    if (!token) ctx.body = genErr('User_Not_Login')
    else {
      const { title, content } = ctx.request.body
      console.log(title, content)
      ctx.body = genOk()
    }
  } catch (error) {
    ctx.body = genErr()
  }
})

module.exports = router
