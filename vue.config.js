const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue2-test/'   // ✅ 重点！这里改成你的 GitHub 仓库名（也就是 Pages 的子路径）
    : '/'
})
