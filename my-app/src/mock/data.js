const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();


const data1 = require('./home/data1.js');
router.get('/api/homed', (ctx, next) => {
  ctx.body = data1;
})

const data2 = require('./home/data2.js');
router.get('/api/homed2', (ctx, next) => {
  let url = ctx.url;
  let request = ctx.request;
  let req_query = request.query;
  let reg_querystring = request.querystring;
  ctx.body = {
    url,
    req_query,
    reg_querystring,
  }
})

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3001, () => {
  console.log('starting at port 3001')
});

