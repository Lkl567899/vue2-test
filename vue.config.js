const { defineConfig } = require('@vue/cli-service')

// 在 Vercel 上部署时，资源应使用根路径 '/'。
// 本配置：当检测到 Vercel 环境变量时使用 '/'，
// 否则在 production 构建时使用 GitHub Pages 的 '/vue2-test/' 子路径。
const isVercel = !!process.env.VERCEL

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: isVercel
    ? '/'
    : (process.env.NODE_ENV === 'production' ? '/vue2-test/' : '/')
})
