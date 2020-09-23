module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: " http://timeclock.loudandnoisy.com/api",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};
