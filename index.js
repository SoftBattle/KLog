const http = require('http')
const httpProxy = require('http-proxy')
const next = require('next')

const port = Number.parseInt(process.env.PORT) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})

const handle = app.getRequestHandler()
const proxy = httpProxy.createProxyServer({
  changeOrigin: true
})

app
  .prepare()
  .then(() => {
    const server = http.createServer((req, res) => {
      if(req.url.startsWith('/api')) {
        proxy.web(req, res, {
          // target: 'https://www.fastmock.site/mock/f562ac6331e9ce629481f1800031a442',
          target: 'http://localhost:10000'
        })
      } else {
        handle(req, res)
      }
    })

    server.listen(port)
  })
  .catch(err => {
    console.trace(err)
  })