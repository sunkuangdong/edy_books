const path = require('path')
// 公共配置
let config = {
    viewDir: path.join(__dirname, '../', "views")
};

// 开发环境下的配置
if (process.env.NODE_ENV !== 'production') {
    const devConfig = {
        port: 3000,
        cache: false,
    }
    config = {
        ...config,
        ...devConfig
    }
}

// 生产环境下的配置
if (process.env.NODE_ENV === 'production') {
    const devConfig = {
        port: 80,
        cache: 'memory',
    }
    config = {
        ...config,
        ...devConfig
    }
}

module.exports = config