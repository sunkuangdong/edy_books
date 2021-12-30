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
    // 节流函数
    // 节流的目的是降低频率
    _.throttle = function (func, time) {
        let first = true
        let timer = null;
        return function () {
            if (first) {
                func()
                first = false
            }
            if (!timer) {
                timer = setTimeout(() => {
                    func()
                    timer = null
                }, time)
            }
        }
    }

    _.each = function (arr, fn) {
        for (let i = 0; i < arr.length; i++) {
            fn(arr[i], i)
        }
        return arr
    }

    // _.mixin = function (obj) {
    //     _.each(_.functions(obj), function (name) {
    //         var func = _[name] = obj[name];
    //         _.prototype[name] = function () {
    //             var args = [this._wrapped];
    //             push.apply(args, arguments);
    //             return func.apply(_, args)
    //         };
    //     });
    //     return _;
    // };

    // _.functions = function (obj) {
    //     var names = [];
    //     for (var key in obj) {
    //         if (_.isFunction(obj[key])) names.push(key);
    //     }
    //     return names.sort();
    // };

    // _.isFunction = function (obj) {
    //     return typeof obj == 'function' || false;
    // };

    // _.mixin(_);

    // 挂载全局
    root._ = _
})()