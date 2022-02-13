const path = require("path")
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, '../src/web/views/layouts/layout.html'),
                    // 基于 output 的 path 路径
                    to: "../views/layouts/layout.html"
                },
                {
                    from: path.join(__dirname, '../src/web/components'),
                    filter: url => {
                        return !/\.(js|css)$/.test(url);
                    },
                    // 基于 output 的 path 路径
                    to: "../components"
                },
            ],
        }),
    ],
}

module.exports = merge(baseConfig, envConfig)