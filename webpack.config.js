const {argv} = require("yargs")
const {merge} = require("webpack-merge")
const glob = require("glob")
const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const HtmlAfterPlugin = require("./build/HtmlAfterPlugin")
const mode = argv.mode || "development"
const envConfig = require(`./build/webpack.${mode}.js`)
const files = glob.sync("./src/web/views/**/*.entry.js")

const entries = {}

const htmlPlugins = []

files.forEach(url => {
    if (/([a-zA-Z]+-[a-zA-Z]+)\.entry\.js/.test((url))) {
        const entryKey = RegExp.$1
        const [pagesName, template] = entryKey.split("-")
        htmlPlugins.push(new htmlWebpackPlugin({
                filename: `../views/${pagesName}/pages/${template}.html`,
                template: `./src/web/views/${pagesName}/pages/${template}.html`,
                chunks: [entryKey],
                inject: false, // 不会自动插入到页面模板里
            }
        ))
        entries[entryKey] = url
    }
})
const baseConfig = {
    mode,
    entry: entries, // 自动配置多入口文件
    output: {
        path: path.join(__dirname, "./dist/assets"),
        filename: "scripts/[name].[hash:5].bundle.js"
    },
    optimization: {
        runtimeChunk: "single",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        ...htmlPlugins,
        new HtmlAfterPlugin()
    ],
    resolve: {
        alias: {
            "@": path.resolve("./src/web")
        }
    }
}

module.exports = merge(baseConfig, envConfig)