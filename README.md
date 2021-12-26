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
```