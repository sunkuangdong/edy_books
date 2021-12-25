// 统一入口
// 统一入口将其他入口引入
const Router = require('@koa/router')
const router = new Router()
const IndexController = require('./IndexController')
const IndexControllers = new IndexController()

// 接口路由
const ApiController = require('./ApiController')
const ApiControllers = new ApiController()

function initController(app) {
    // router.get('/', (ctx, next) => {
    //     ctx.body = "hello 2"
    // })

    // 每个路由做的事情抽离出去
    router.get('/', IndexControllers.actionIndex)

    // 用路由模拟后台接口
    router.get('/api/getDateList', ApiControllers.actionDateList)

    // 能够丰富请求头
    app
        .use(router.routes())
        .use(router.allowedMethods())
}

module.exports = initController;