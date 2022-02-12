import Koa from 'koa';
import config from './config'
// 路由入口
import initController from './controllers'

// 模板渲染
import render from 'koa-swig'
import co from 'co'
// 静态资源服务
import staticSever from 'koa-static'

// 路由处理
import historyApiFallback from 'koa2-connect-history-api-fallback'

// 自己的错误处理中间件
import ErrorHandler from "./middlewares/ErrorHandler"

// 错误日志
import log4js from "log4js"
log4js.configure({
    appenders: {
        globalError: {
            type: "file",
            filename: "./logs/error.log"
        },
        infoError: {
            type: "file",
            filename: "./logs/info.log"
        }
    },
    categories: {
        default: {
            appenders: ["globalError"],
            level: "error"
        },
        info: {
            appenders: ["infoError"],
            level: "info"
        }
    }
});
const logger = log4js.getLogger("error");
const loggerInfo = log4js.getLogger("info");
loggerInfo.info("Cheese is Comté.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");

const app = new Koa();

// whiteList 白名单机制
// 白名单是有些路由不会被重定向
// index 是当切换路由的时候给你重定向到什么位置
app.use(historyApiFallback({
    index: "/",
    whiteList: ["/books", '/api']
}))

// 指定我们的静态资源文件，查找静态资源会去assets目录下
app.use(staticSever(config.staticDir));

ErrorHandler.error(app, logger)
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
    // 更改 koa-swig 配置
    varControls: ["[[", "]]"]
}))

// 监听本地3000端口
app.listen(config.port, () => {
    console.log(`server is running at http://localhost:${config.port}`);
})