// 统一入口
// 统一入口将其他入口引入
import Router from '@koa/router'
import IndexController from './IndexController'
// 接口路由
import ApiController from './ApiController'
import BooksController from './BooksController'

const router = new Router()
const IndexControllers = new IndexController()
const ApiControllers = new ApiController()
const booksController = new BooksController()

function initController(app) {
    // 每个页面路由路由做的事情抽离出去
    router.get('/', IndexControllers.actionIndex)
    router.get('/books/list', booksController.actionBooksListPage)

    // 用路由模拟后台接口
    router.get('/api/getDateList', ApiControllers.actionDateList)

    // 能够丰富请求头
    app
        .use(router.routes())
        .use(router.allowedMethods())
}

export default initController;