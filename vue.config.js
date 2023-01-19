module.exports = {
    configureWebpack: config => {
        delete config.devtool
        delete config.output.libraryExport
    },
    chainWebpack: config => {
        config.externals({
            axios: true
        })
    },
    publicPath: process.env.NODE_ENV === "production" ? "/wantipDeftdev/test-line/" : "/",
}
