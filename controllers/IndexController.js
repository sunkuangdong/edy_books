// 首页路由处理
const Controller = require('./controllers')

// 继承 Controller 类
class IndexController extends Controller {
    constructor() {
        super()
    }

    // 利用全局 ctx render 进行渲染
    async actionIndex(ctx) {
        // throw new Error("自定义错误")
        ctx.body = await ctx.render("index", {
            message: "服务端输入数据"
        });
    }
}

module.exports = IndexController