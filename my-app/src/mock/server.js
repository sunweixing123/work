const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

router.get('/home', function(ctx, next) {
  ctx.body = 'hello koa';
});

router.get('/new', function(ctx, next) {
  ctx.body = '新闻'
});
// app.use(async(ctx) => {
//   ctx.body = 'hello koa'
// })

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000,() => {
  console.log('starting at port 3000')
});