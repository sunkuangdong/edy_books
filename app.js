const Koa = require('koa');
const config = require('./config/index')
// 路由入口
const initController = require('./controllers/index')

const render = require('koa-swig')
const co = require('co')

const app = new Koa();
// 路由初始化
initController(app)

// context - ctx
// 全局挂在 render 方法，实行模板渲染
// 渲染的时候会去 views 中查找
app.context.render = co.wrap(render({
    root: config.viewDir,
    // 生产环境不能有缓存
    cache: config.cache,
}))

// 监听本地3000端口
app.listen(config.port, () => {
    console.log(`server is running at http://localhost:${config.port}`);
})