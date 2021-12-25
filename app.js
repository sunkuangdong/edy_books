const Koa = require('koa');
const config = require('./config/index')
// 路由入口
const initController = require('./controllers/index')

const app = new Koa();

// 路由初始化
initController(app)

// 监听本地3000端口
app.listen(config.port, () => {
    console.log(`server is running at http://localhost:${config.port}`);
})