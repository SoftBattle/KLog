const Koa = require('Koa')
const router = require('./routes')

const koaBody = require('koa-body')

const app = new Koa()


app.use(
  koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 2097152,
    },
  }),
)

app.use(function(ctx, next) {
  ctx.set('Access-Control-Allow-Origin', ctx.headers.origin) // 不能为 *
  ctx.set('Access-Control-Allow-Credentials', 'true') // 允许携带cookie
  ctx.set('Access-Control-Allow-Headers', 'Content-Type,Accept,Content-Length,Accept-Encoding,x-requested-with,X-Custom-Header')
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,PUT,POST,DELETE,PATCH')
  ctx.set('Access-Control-Max-Age', 3600)
  if(ctx.method.toUpperCase === 'OPTIONS') {
    ctx.response.set('status', 200)
    return
  }
  next()
})

app.use(router.routes())

const port = 10000

app.listen(port, () => {
  console.log(`mock server is running at ${port}`)
})