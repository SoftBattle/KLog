const Router = require('koa-router')
const { posts, postDetails } = require('../data')
const { genOk, genErr } = require('../libs')

const router = new Router({
  prefix: '/api/user'
})

router.post('/follow', async ctx => {
  try {
    const token = ctx.cookies.get('token')
    console.log(token)
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

router.post('/search', async ctx => {
  try {
    const { keyword } = ctx.request.body
    ctx.body = genOk({
      users: [
        {
          uid: 'cmkk',
          nickname: 'cmKangkang',
          avatar: '/avatar/me.jpg',
          follow: false
        },
        {
          uid: keyword,
          nickname: 'cm' + keyword,
          avatar: '/avatar/me.jpg',
          follow: true
        },
        {
          uid: 'cmkk',
          nickname: 'cmKangkang',
          avatar: '/avatar/me.jpg',
          follow: false
        },
        {
          uid: keyword,
          nickname: 'cm' + keyword,
          avatar: '/avatar/me.jpg',
          follow: true
        },
        {
          uid: 'cmkk',
          nickname: 'cmKangkang',
          avatar: '/avatar/me.jpg',
          follow: false
        },
        {
          uid: keyword,
          nickname: 'cm' + keyword,
          avatar: '/avatar/me.jpg',
          follow: true
        },
        {
          uid: 'cmkk',
          nickname: 'cmKangkang',
          avatar: '/avatar/me.jpg',
          follow: false
        },
        {
          uid: keyword,
          nickname: 'cm' + keyword,
          avatar: '/avatar/me.jpg',
          follow: true
        },
        {
          uid: 'cmkk',
          nickname: 'cmKangkang',
          avatar: '/avatar/me.jpg',
          follow: false
        },
        {
          uid: keyword,
          nickname: 'cm' + keyword,
          avatar: '/avatar/me.jpg',
          follow: true
        },
      ],
      total: 100
    })
  } catch (error) {
    ctx.body = genErr()
  }
})

module.exports = router