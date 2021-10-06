const Router = require('koa-router')
const { posts, postDetails } = require('../data')
const { genOk, genErr } = require('../libs')

const router = new Router({
  prefix: '/api/user'
})

function getArrays(data, length) {
  const re = []
  for(let i = 0; i < length; i++) {
    re.push(data)
  }
  return re
}

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

router.post('/info', async ctx => {
  try {
    const { uid } = ctx.request.body
    ctx.body = genOk({
      uid: 'cmkk',
      nickname: 'cmKangkang',
      avatar: '/avatar/me.jpg',
      follow: false
    })
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

router.post('/follows', async ctx => {
  try {
    const { uid } = ctx.request.body
    ctx.body = genOk({
      users: [...getArrays({
        uid: 'cmyy',
        nickname: 'cmYY',
        avatar: '/avatar/me.jpg',
        follow: true
      }, 10)],
      total: 100
    })
  } catch (error) {
    ctx.body = genErr()
  }
})

router.post('/followers', async ctx => {
  try {
    const { uid } = ctx.request.body
    ctx.body = genOk({
      users: getArrays({
        uid: 'cmkk',
        nickname: 'cmKangkang',
        avatar: '/avatar/me.jpg',
        follow: false
      }, 10),
      total: 100
    })
  } catch (error) {
    ctx.body = genErr()
  }
})

router.post('/posts', async ctx => {
  try {
    const { uid } = ctx.request.body
    ctx.body = genOk({
      uposts: [...getArrays(posts[0], 5), ...getArrays(posts[1], 5)],
      total: 40
    })
  } catch (error) {
    ctx.body = genErr()
  }
})

router.post('/stars', async ctx => {
  try {
    ctx.body = genOk({
      posts: [...getArrays(posts[0], 5), ...getArrays(posts[1], 5)],
      total: 20
    })
  } catch (error) {
    ctx.body = genErr()
  }
})


module.exports = router