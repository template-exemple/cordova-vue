// Webpack config
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./src/bootstrap.js",
    output: {
        path: "./www",
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /index\.html$/, loader: "file-loader?name=index.html" },
            { test: /\.vue$/, loader: "vue-loader" },
            { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' }) },
            { test: /\.less$/, loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!less-loader' }) },
            { test: /\.tpl$/, loader: "html-loader" },
            { test: /\.(jpg|png|gif|ico)$/, loader: "file-loader?name=[path][name].[ext]" }
        ]
    },
    plugins: [ new ExtractTextPlugin("style.css") ],
    resolve: {
        alias: { 'vue$': 'vue/dist/vue.js' }
    }
};
