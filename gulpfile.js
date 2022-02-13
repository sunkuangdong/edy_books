const gulp = require('gulp');
// 监听文件变化
const watch = require('gulp-watch');
// 模块化转换
const babel = require('gulp-babel');
// 代码出错重新启动项目
const plumber = require('gulp-plumber');
// 流清洗
const rollup = require('gulp-rollup')
const replace = require('@rollup/plugin-replace')

const entry = './src/server/**/*.js'
const cleanEntry = './src/server/config/index.js'

// 开发环境任务
function buildDev() {
    return watch(entry, {ignoreInitial: false}, () => {
        gulp.src(entry)
            .pipe(plumber())
            .pipe(
                babel({
                    babelrc: false, // 不用根目录下的 .babelrc 文件
                    plugins: ["@babel/plugin-transform-modules-commonjs"]
                })
            )
            .pipe(gulp.dest("dist"))
    })
}

// 生产环境任务
function buildProd() {
    return gulp.src(entry)
        .pipe(
            babel({
                babelrc: false, // 不用根目录下的 .babelrc 文件
                ignore: [cleanEntry],
                plugins: ["@babel/plugin-transform-modules-commonjs"]
            })
        )
        .pipe(gulp.dest("dist"))
}

// 流清洗任务 treeshaking
function buildConfig() {
    return gulp.src(entry)
        .pipe(rollup({
            input: cleanEntry,
            output: {
                format: "cjs"
            },
            plugins: [
                replace({
                    'process.env.NODE_ENV': JSON.stringify('production')
                })
            ]
        }))
        .pipe(gulp.dest("dist"))
}

let build = gulp.series(buildDev)
if (process.env.NODE_ENV === 'production') {
    build = gulp.series(buildProd, buildConfig)
}
gulp.task('default', build)