const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();


const data1 = require('./home/data1.js');
router.get('/api/homed', (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  ctx.set('Access-Control-Allow-Credentials', 'true');
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

const list = require('./home/list');
router.get('/api/list', (ctx,next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000'); //允许3000调用接口
  ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.body = list;
})

const dataTest1 = require('./home/data2');
router.get('/api/1', (ctx,next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.body = dataTest1;
})

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3001, () => {
  console.log('starting at port 3001')
});

