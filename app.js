const Koa = require('koa');
const config = require('./config/index')

const app = new Koa();

app.use(ctx => {
    ctx.body = 'hello world'
})

// 监听本地3000端口
app.listen(config.port, () => {
    console.log(`server is running at http://localhost:${config.port}`);
})