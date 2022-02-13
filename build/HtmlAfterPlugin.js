const HtmlWebpackPlugin = require('html-webpack-plugin');
const pluginName = 'HtmlAfterPlugin';

const assethelp = (data) => {
    let js = []
    let css = [];
    for (let item of data.js) {
        js.push(`<script src="${item}"></script>`)
    }
    for (let item of data.css) {
        css.push(`<script src="${item}"></script>`)
    }
    return {js, css}
}

class HtmlAfterPlugin {
    constructor() {
        this.jsArr = []
        this.cssArr = []
    }

    apply(compiler) {
        compiler.hooks.compilation.tap(pluginName, (compilation) => {
            HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync(
                pluginName,
                (data, cb) => {
                    const {js, css} = assethelp(data.assets);
                    this.jsArr = js
                    this.cssArr = css
                    cb(null, data)
                }
            )
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
                pluginName,
                (data, cb) => {
                    // console.log("data", data)
                    let _html = data.html
                    _html = _html.replace("<!-- injectjs -->", this.jsArr.join(""))
                        .replace(/@layouts/g, "../../layouts")
                        .replace(/@components/g, "../../../components")
                    data.html = _html
                    cb(null, data)
                }
            )
        });
    }
}

module.exports = HtmlAfterPlugin;