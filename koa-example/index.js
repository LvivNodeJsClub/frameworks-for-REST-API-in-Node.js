const Koa = require('koa');
const router = require('koa-router')();

router.get('/hello/:user', async ctx => ctx.body = `Hello ${ctx.params.user}!`);

router.get('/hello/', async ctx => ctx.body = `Hello ${ctx.query.user}!`);

const app = new Koa();
const port = 3001;

app.use(router.routes());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
