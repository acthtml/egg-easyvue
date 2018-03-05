const path = require('path');

module.exports = appInfo => {
  return {
    easyvue: {
      // 站点spa根目录
      siteRoot: '/app',
      // 开启热更新模式，建议只在开发模式下开启。
      enableHMR: false,
      // vue ssr renderOptions.template's path
      // https://ssr.vuejs.org/zh/api.html#renderer-options
      template: path.join(appInfo.baseDir, 'app/web/views/app.template.html'),
      // vue ssr renderOptions.clientManifest's path
      // https://ssr.vuejs.org/zh/api.html#renderer-options
      clientManifest: path.join(appInfo.baseDir, 'public/static/vue-ssr-client-manifest.json'),
      // vue ssr serverBundle's path
      // https://ssr.vuejs.org/zh/api.html#webpack-plugins
      // 这地址不用设置，跟webpack server config的输出产物的地址有关，建议输出到下面这个
      // 默认地址。
      // serverBundle: path.join(appInfo.baseDir, 'app/view/vue-ssr-server-bundle.json')
    }
  }
}
