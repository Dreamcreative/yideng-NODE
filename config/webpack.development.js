const CopyPlugin = require('copy-webpack-plugin');
const { join, resolve } = require("path");
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
module.exports = {
    output: {
        filename: 'scripts/[name].bundle.js',
        publicPath: "/"
    },
    devServer: {
        quiet: true,
    },
    plugins: [
        new CopyPlugin([
            { from: join(__dirname, "../", "src/web/views/layouts/layout.html"), to: "../views/layouts/layout.html" },
        ]),
        new CopyPlugin([
            { from: join(__dirname, "../", "src/web/components"), to: '../components' },
        ], {
            ignore: ["*.js", "*.css", ".DS_Store"],
            copyUnmodified: true
        }),
        new WebpackBuildNotifierPlugin({
            title: "🏮 MX的SSR项目构建",
            logo: resolve("./logo.png"),
            suppressSuccess: true
        }),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: ['You application is running here http://localhost:3000'],
                notes: ['⚠️ 请及时注意后端和前端的编译入口']
            },
            clearConsole: true
        })
    ],
}