// 首页路由处理
const Controller = require('./controllers')

// 继承 Controller 类
class IndexController extends Controller {
    constructor() {
        super()
    }

    actionIndex(ctx) {
        ctx.body = "actionIndex"
    }
}

module.exports = IndexController