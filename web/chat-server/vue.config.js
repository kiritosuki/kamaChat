// const { defineConfig } = require('@vue/cli-service')
// const fs = require('fs')
// const path = require('path')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false,
//   devServer: {
//     host: '0.0.0.0',
//     // 此处开启 https,并加载本地证书（否则浏览器左上角会提示不安全）
//     https: {
//       // Win10本地部署
//       // cert: fs.readFileSync(path.join(__dirname, 'src/assets/cert/127.0.0.1+2.pem')),
//       // key: fs.readFileSync(path.join(__dirname, 'src/assets/cert/127.0.0.1+2-key.pem')),
//       // Ubuntu22.04云服务器部署
//       cert: fs.readFileSync(path.join("/etc/ssl/certs/server.crt")),
//       key: fs.readFileSync(path.join("/etc/ssl/private/server.key")),
//     },
//     // 注意： https的端口必须是443
//     port: 443,
//   }
//   // devServer: {
//   //   host: '0.0.0.0',
//   //   // 端口设为常见的开发用端口，避免与服务器默认的 HTTPS 端口冲突
//   //   port: 8080,
//   // }
// })

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: '0.0.0.0',
    port: 8088,      // 开发环境改回 8080 或其他非 443 端口
    https: false,    // 显式关闭 HTTPS
    // 此时你可以删掉 fs 和 path 的引用，因为不再需要读取证书文件了
  }
})