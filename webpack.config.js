module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    },
    watch: true,
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
            ]
        }]
    }
};