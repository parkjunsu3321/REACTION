module.exports = {
    devServer: {
        proxy: {
            '/api':{
                target: REACT_APP_WAITLIST_API_URL,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/store/db.php',
                },
            },
        },
    },
};