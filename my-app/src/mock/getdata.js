const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
router.get('/', function(ctx, next) {
  ctx.body="hello koa";
})
router.get('/newscontent', (ctx, next) => {
  let url = ctx.url;
  let request = ctx.request;
  let req_query = request.query;
  let req_querystring = request.querystring;

  let ctx_query = ctx.query;
  let ctx_querystring = ctx.querystring;
  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring,
  }
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000, () => {
  console.log('starting ar port 3000');
});