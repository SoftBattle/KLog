const Koa = require('koa')
const next = require('next')
const httpProxy = require('http-proxy')
// const handle = app.getRequestHandler()

const port = Number.parseInt(process.env.PORT) || 3000

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const proxy = httpProxy.createProxyServer({
  changeOrigin: true
})

app.prepare().then(() => {
  const server = new Koa()

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.response = false
    await next()
  })

  // server.use(async (ctx, next) => {
  //   if(ctx.url.startsWith('/api')) {
  //     proxy.web(ctx.req, ctx.res, {
  //       target: process.env.BACKEND
  //     })
  //   } else {
  //     handle(ctx.req, ctx.res)
  //   }
  //   await next()
  // })

  server.listen(port)
}).catch(err => {
  console.log(err)
})