const Router = require('koa-router')
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
    console.log(ctx.url)
    ctx.body = {
      stat: 'ok',
      msg: '数据获取成功',
      data: {
        posts: getArrays({
          pid: 'jiwjisw',
          author: {
            uid: 'cmkk', // 作者id
            nickname: 'cmkangkang', // 作者昵称
          },
          title: 'readme',
          subTitle: '说明',
          banners: ['msms.png', 'dhwyudhw.png'],
          tags: ['js'],
          view: 100,
          ctime: 114218327832,
          mtime: 114356676767
        }, 10),
        total: 1
      }
    }
  } catch(err) {
    ctx.body= {
      stat: 'err'
    }
  }
})

module.exports = router