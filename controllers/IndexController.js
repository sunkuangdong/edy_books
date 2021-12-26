// 首页路由处理
const Controller = require('./controllers')

// 继承 Controller 类
class IndexController extends Controller {
    constructor() {
        super()
    }

    // 利用全局 ctx render 进行渲染
    async actionIndex(ctx) {
        ctx.body = await ctx.render("index")
    }
}

module.exports = IndexController