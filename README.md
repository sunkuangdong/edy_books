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