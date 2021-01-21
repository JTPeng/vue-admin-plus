const { resolve } = require('path')
module.exports = {
  alias: {
    // 键必须以斜线开始和结束
    '/@/': resolve(__dirname, './src'),
  },
  // 在生产中服务时的基本公共路径, 默认 '/'
  base: '/',
  // 自动打开浏览器
  open: true,
  // 端口号
  port: 8888,
  // 是否开启https
  https: false,
  // 服务端渲染
  ssr: false,
  // 代理
  proxy: {
    // 如果是 /xxx 打头，则访问地址如下
    // '/xxx': {
    //   target: 'http://xxx.xxx.xxx/',
    //   changeOrigin: true,
    //   // rewrite: path => path.replace(/^\/xxx/, '')
    // }
  },
  // 引入第三方配置
  optimizeDeps: {
    include: [],
  },
}
