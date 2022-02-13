const path = require("path")
const CopyPlugin = require("copy-webpack-plugin");
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
    ],
}

