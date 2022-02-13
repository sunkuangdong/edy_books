import path from 'path'
// 公共配置
let config = {
    viewDir: path.join(__dirname, '../../', "web/views"), // 模板
    staticDir: path.join(__dirname, '../../', "web/assets") // 静态资源
};

if (false) {
    console.log(1)
}

// 开发环境下的配置
if (process.env.NODE_ENV !== 'development') {
    const devConfig = {
        port: 3033,
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

export default config