## 项目工程搭建
koa生态
koa-router
koa-static

## 环境区分
#### 端口区分
```
线上环境有线上环境的端口
测试环境有测试环境的端口

在package scripts中进行配置 NODE_ENV，这样在node全局就可以知道当前运行的是什么环境
在config/index.js中判断当前配置是什么环境，然后进行配置
```
#### sever 服务自动重启
```
使用 nodemon， 之前我们yarn start运行的是node app.js。现在是 nodemon app.js

nodemon 开发环境使用，线上环境使用 PM2
```

## 路由
#### 编写路由
```
koa-router
@koa/router
在使用的时候注意版本，要考虑版本兼容问题

index.js 路由入口，每个路由做的事情抽离出去
```

#### 渲染页面
```
引入渲染引擎：koa-swig 配合 co

```

#### 静态资源服务器
```
koa-static 启动一个静态资源服务器
```

#### 路由进行重新定向：解决切换路由后无法访问静态资源问题
```
koa2-connect-history-api-fallback

1. 这里我们会请求/about路由
2. 然后会请求后端的/about 如果后端没有就404
3. 然后 historyApiFallback 将请求重定向到根路由
4. 页面url /about Vue router 跳转到 /about 页面
```

#### 模板冲突
```
vue 的插值表达式和 koa-swig 的冲突
可以重新定义 koa-swig 模板, app 的render中定义：varControls (必须是两个)
```

#### babel
```
解决浏览器不支持ES6语法的情况
使用System进行模块导入导出，但是浏览器不支持，根目录下创建.babelrc，自动会去这里查找配置项
运行yarn build
```

#### 完善MVC
```
module
    - 对数据进行处理
    - BFF 中间层，后端连接用10个接口，我们只用了两个，这样我们就可以进行处理
    - 从 module 排检之后在返回给前端

controllers
    - module 文件里定义请求接口
    - controllers 文件里请求接口数据
```
#### 完善项目工程化
```
测试

模块化改造
    - ES6 语法
    - @babel/preset-env 插件集合，将ES6 ES5等统一了
    - package.json中 --exec 是执行一条命令 执行后面引号内的命令
    - 'babel-node ./app.js' 用 babel-node 对ESModule模块化进行编译

错误日志记录库：log4 js
    - yarn add log4js
    - 日志时间
    - 日志级别
    - 日志分类

之前做了一个简单的错误捕获：ErrorHandler
    - 在app.js中将我们的logger传递进去
    - 用logger.error(error.message)来捕获我们的错误并且生成日志
```

## 测试
#### 工具： Playwright mocha
```
Playwright 进行页面测试： e2e测试
    - 安装： yarn add playwright -D
    - 链接： https://www.npmjs.com/package/playwright
    - Playwright 会进行截图每一步，然后保存在你的文件下
mocha 进行接口测试
    - 安装： yarn add mocha -D
    - 链接： https://www.npmjs.com/package/mocha
```

#### 生成目录的工具 tree-cli