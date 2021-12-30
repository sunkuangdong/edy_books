// 学习 underscore 源码思想
// 1. 匿名函数自调用，产生局部作用域
(function () {
    // 2. 判断环境 global代表node self代表window
    let root = typeof self === 'object' && self.self === self && self ||
        typeof global === 'object' && global.global === global && global ||
        this || {}

    let _ = function (obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj
    }
    
})()