const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
    ctx.body = 'hello world'
})

// 监听本地3000端口
app.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
})