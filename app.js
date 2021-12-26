const Koa = require('koa');
const config = require('./config/index')
// 路由入口
const initController = require('./controllers/index')

// 模板渲染
const render = require('koa-swig')
const co = require('co')
// 静态资源服务
const staticSever = require('koa-static')

// 路由处理
const {
    historyApiFallback
} = require('koa2-connect-history-api-fallback');

const app = new Koa();

// whiteList 白名单机制
// 白名单是有些路由不会被重定向
// index 是当切换路由的时候给你重定向到什么位置
app.use(historyApiFallback({
    index: "/",
    whiteList: ['/api']
}))

// 指定我们的静态资源文件，查找静态资源会去assets目录下
app.use(staticSever(config.staticDir));

// 路由初始化
initController(app)




// context - ctx
// 全局挂在 render 方法，实行模板渲染
// 渲染的时候会去 views 中查找
// console.log("config.viewDir:", config.viewDir)
app.context.render = co.wrap(render({
    root: config.viewDir,
    // 生产环境不能有缓存
    cache: config.cache,
}))

// 监听本地3000端口
app.listen(config.port, () => {
    console.log(`server is running at http://localhost:${config.port}`);
})