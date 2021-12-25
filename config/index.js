// 公共配置
let config = {};

// 开发环境下的配置
if (process.env.NODE_ENV !== 'production') {
    const devConfig = {
        port: 3000
    }
    config = {
        ...config,
        ...devConfig
    }
}

// 生产环境下的配置
if (process.env.NODE_ENV === 'production') {
    const devConfig = {
        port: 80
    }
    config = {
        ...config,
        ...devConfig
    }
}

module.exports = config