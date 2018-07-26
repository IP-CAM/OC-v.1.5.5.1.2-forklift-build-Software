const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    //devtool: "source-map",
    entry: {
        app: "./components/App.js"
    },
    output: {
        path: __dirname + "/build",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["es2015", "react", "stage-0"],
                            plugins: ['transform-runtime']
                        }
                    }
                ]
            }
        ]
    },

    //watch: true,
    plugins: [
        new UglifyJSPlugin(),
        new webpack.ProvidePlugin({
            $: "./jquery/jquery.js",
            jQuery: "./jquery/jquery.js"
        })
    ]
};

