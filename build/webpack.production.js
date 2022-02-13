const path = require("path")
const CopyPlugin = require("copy-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin")
const minify = require('html-minifier').minify;
module.exports = {
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, '../src/web/views/layouts/layout.html'),
                    // 基于 output 的 path 路径
                    to: "../views/layouts/layout.html",
                    transform(content) {
                        return minify(content.toString("utf-8"));
                    }
                },
                {
                    from: path.join(__dirname, '../src/web/components'),
                    filter: url => {
                        return !/\.(js|css)$/.test(url);
                    },
                    // 基于 output 的 path 路径
                    to: "../components",
                    transform(content) {
                        return minify(content.toString("utf-8"), {
                            collapseWhitespace: true
                        });
                    }
                },
            ],
        }),
        new CompressionPlugin({
            algorithm: 'gzip', // 使用gzip压缩
            test: /\.js$|\.html$|\.css$/, // 匹配文件名
            filename: '[path][base].gz', // 压缩后的文件名(保持原文件名，后缀加.gz)
            minRatio: 0.8, // 压缩率小于1才会压缩
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
        })
    ],
}

