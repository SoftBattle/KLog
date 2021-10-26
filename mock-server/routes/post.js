const Router = require('koa-router')
const { posts, postDetails } = require('../data')
const postInfoList = require('../data/info')
const { genOk, genErr } = require('../libs')

function getArrays(data, length) {
  const re = []
  for(let i = 0; i < length; i++) {
    re.push(data)
  }
  return re
}

const router = new Router({
  prefix: '/api/post'
})

router.post('/list', async ctx => {
  try {
    const {pageIndex = 1, pageSize = 20} = ctx.request.body
    const list = postInfoList.splice(pageSize * (pageIndex - 1), pageSize)
    ctx.body = {
      stat: 'ok',
      msg: '数据获取成功',
      data: {
        posts: list,
        total: postInfoList.length
      }
    }
  } catch(err) {
    ctx.body= {
      stat: 'err'
    }
  }
})

router.get('/:pid', async ctx => {
  try {
    const pid = ctx.params.pid
    switch(pid) {
      case 'tep1': 
        ctx.body = genOk({
          ...posts[0],
          content: postDetails[0],
          star: false
        })
        break
      case 'tep2':
        ctx.body = genOk({
          ...posts[1],
          content: postDetails[2],
          star: true
        })
        break
      default:
        ctx.body = genOk({
          ...posts[0],
          content: postDetails[1],
          star: false
        })
        break
    }
  } catch (error) {
    
  }
})

router.post('/star', async ctx => {
  try {
    const { pid } = ctx.request.body
    ctx.body = genOk()
  } catch (error) {
    ctx.body = genErr()
  }
})

router.post('/unstar', async ctx => {
  try {
    const { pid } = ctx.request.body
    ctx.body = genOk()
  } catch (error) {
    ctx.body = genErr()    
  }
})

router.post('/new', async ctx => {
  try {
    const { title, content } = ctx.request.body
    console.log(title, content)
    ctx.body = genOk()
  } catch (error) {
    ctx.body = genErr()    
  }
})

module.exports = router