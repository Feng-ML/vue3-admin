const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  devServer: {
    port: 8848,
  },

  css:{
    loaderOptions:{
      sass: {
        additionalData: `@import "@/assets/style/index.scss";`
      }
    }
  }
})
