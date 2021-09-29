const Koa = require('koa')
const next = require('next')

const port = Number.parseInt(process.env.PORT) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

const { createProxyMiddleware } = require('http-proxy-middleware')
const k2c = require('koa2-connect')
const proxy =require('koa2-proxy-middleware')

const options = {
  targets: {
    '/api/(.)*': {
      target: 'https://www.fastmock.site/mock/f562ac6331e9ce629481f1800031a442/api',
      changeOrigin: true,
      // pathRewrite: {
      //   '^/api': '/api', 
      // }
    }
  }
}

const apiProxy = createProxyMiddleware({
  target: process.env.BACKEND || 'https://www.fastmock.site/mock/f562ac6331e9ce629481f1800031a442/api',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api'
  }
})

app.prepare().then(() => {
  const server = new Koa()

  // server.use(async (ctx, next) => {
  //   if(ctx.url.startsWith('/api')) {
  //     ctx.respond = false
  //     await k2c(apiProxy)(ctx, next)
  //   } else {
  //     await handle(ctx.req, ctx.res)
  //     ctx.response = false
  //     await next()
  //   }
  // })

  server.use(proxy(options))

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.response = false
    await next()
  })

  server.listen(port)
}).catch(err => {
  console.log(err)
})