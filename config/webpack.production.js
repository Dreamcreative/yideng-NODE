const CopyPlugin = require('copy-webpack-plugin');
const { join } = require("path");
const minify = require("html-minifier").minify;
module.exports = {
    output: {
        filename: 'scripts/[name].[contenthash:5].bundle.js',
        publicPath: "/"
    },
    plugins: [
        new CopyPlugin([
            { from: join(__dirname, "../", "src/web/views/layouts/layout.html"), to: "../views/layouts/layout.html" },
        ]),
        new CopyPlugin([
            {
                from: join(__dirname, "../", "src/web/components"),
                to: '../components',
                transform(content) {
                    const result = minify(content.toString("utf-8"), {
                        collapseWhitespace: true
                    });
                    return result;
                }
            },
        ], {
            ignore: ["*.js", "*.css", ".DS_Store"],
        })
    ],
}