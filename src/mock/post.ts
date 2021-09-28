import Mock from 'mockjs'

// 0. 请求文章列表
Mock.mock('/api/post/list', 'post', ops => {
  const { body } = ops
  const { pageSize, pageIndex, sort, keyword } = JSON.parse(body)
  return {
    stat: 'ok',
    msg: '数据获取成功',
    data: {
      posts: [
        {
          pid: 'jiwjisw',
          author: {
            uid: 'cmkk', // 作者id
            nickname: 'cmkangkang', // 作者昵称
          },
          title: '我扽你的喝奶哦不呢我就反胃',
          subTitle: 'dewdfewfewfwe dfwefdwe few ',
          banners: ['/favicon.png', 'dhwyudhw.png'],
          tags: ['js'],
          views: 100,
          ctime: 114218327832,
          mtime: 114356676767
        },
        {
          pid: 'jiwjisw',
          author: {
            uid: 'cmkk', // 作者id
            nickname: 'cmkangkang', // 作者昵称
          },
          title: 'readme',
          subTitle: '说明 cehjw0fcujwe cvewj9ver9ow vewru9vwerujr cvweujf0p9wn vwh8jvw8emcjwe0jfwe vcnwri90evjr vdfnjsifvjws fwe9ojf0we9 vcjrwevjker0p deqwdfeqw cewde fdfe fewfw fewfwe effrbxc dcewfwe effwfwe erfwer',
          banners: [],
          tags: ['js', 'dedek', 'djuqw'],
          views: 100,
          ctime: 114218327832,
          mtime: 114356676767
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        }
      ],
      total: 1
    }
  }
})