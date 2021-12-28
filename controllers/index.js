// 统一入口
// 统一入口将其他入口引入
import Router from '@koa/router'
import IndexController from './IndexController'
// 接口路由
import ApiController from './ApiController'

const router = new Router()
const IndexControllers = new IndexController()
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

export default initController;