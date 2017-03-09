module.exports = {
    entry: "app/cms/main",
    output: {
        path: __dirname,
        filename: "./dist/bundle_cms.js"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [{
            test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
        }]
    }
}