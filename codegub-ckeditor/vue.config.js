const path = require('path');
module.exports = {
    outputDir: 'docs',
    publicPath: process.env.NODE_ENV === 'production' ? '/CodeDevStore/' : '/',
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'packages'),
                components: path.resolve(__dirname, 'packages/components'),
                Vue: path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.common.js')
            }
        }
    }
};
