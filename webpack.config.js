const {argv} = require("yargs")
const {merge} = require("webpack-merge")
const glob = require("glob")
const path = require("path")
const mode = argv.mode || "development"
const envConfig = require(`./build/webpack.${mode}.js`)
const files = glob.sync("./src/web/views/**/*.entry.js")

const entries = {}

files.forEach(url => {
    if (/([a-zA-Z]+-[a-zA-Z]+)\.entry\.js/.test((url))) {
        entries[RegExp.$1] = url
    }
})
const baseConfig = {
    mode,
    entry: entries, // 自动配置多入口文件
    output: {
        path: path.join(__dirname, "./dist/assets"),
        filename: "scripts/[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"]
            }
        ]
    }
}

module.exports = merge(baseConfig, envConfig)