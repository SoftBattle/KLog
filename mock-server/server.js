const Koa = require('Koa')
const router = require('./routes')

const app = new Koa()

app.use(function(ctx, next) {
  ctx.set('Access-Control-Allow-Origin', ctx.headers.origin); // 不能为 *
  ctx.set('Access-Control-Allow-Headers', 'content-type');
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,PUT,POST,DELETE,PATCH');
  ctx.set('Access-Control-Allow-Credentials', 'true'); // 允许携带cookie
  next();
})

app.use(router.routes())

const port = 10000

app.listen(port, () => {
  console.log(`mock server is running at ${port}`)
})