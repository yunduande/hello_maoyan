// vue脚手架创建的项目的配置文件

module.exports = {
  devServer: {
    // 正向代理配置

    // 1. 字符串方式
    // proxy: "你要代理的网站的域名地址"
    proxy: 'http://m.maoyan.com'

    // localhost:8080 -> localhost:8080/ajax/movieOnInfoList?token= -> 这个接口地址找不到 -> 所以正在代理的配置就生效了 -> http://m.maoyan.com/ajax/movieOnInfoList?token=

    // 2. 对象的方式
  }
}
