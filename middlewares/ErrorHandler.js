class ErrorHandler {
    static error(app, logger) {
        app.use(async (ctx, next) => {
            try {
                await next();
                if (ctx.status === 404) {
                    ctx.body = "有好的404页面"
                }
            } catch (error) {
                logger.error(error.message)
                ctx.body = "500 请求正在修复"
            }
        })
    }
}

module.exports = ErrorHandler