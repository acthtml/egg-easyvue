# egg-easyvue

eggjs的vue ssr方案。借助egg-view-vue和egg-webpack实现vue spa ssr方案。

使用参考[egg-vue-spa-ssr-boilderplate](https://github.com/acthtml/egg-vue-spa-ssr-boilerplate)。

## 支持：

- vue spa ssr
- 静态资源构建
- hmr

## 依赖

- [egg-view-vue](https://github.com/eggjs/egg-view-vue) eggjs的vue服务端渲染插件
- [egg-webpack](https://github.com/hubcarl/egg-webpack) eggjs的webpack开发服务器插
  件，支持内存编译至内存，并支持热更新。
- [webpack-tool](https://github.com/hubcarl/webpack-tool) webpack编译工具

## 项目目录架构

```
- app
  - view
    - vue-ssr-server-bundle.json // webpack生成的server bundle json
  - web // 前端vue工程项目
    - common
    - components
    - containers
    - views
      - home
        - home.vue
      - app.template.html
      - app.vue
    - app.js
    - entry_client.js
    - entry_server.js
- config
- public
  - static // webpack 构建生成的静态资源文件夹
```

## 配置

```js
// ${app.baseDir}/config/plugin.js
module.exports = {
  vue: {
    enable: true,
    package: 'egg-view-vue'
  },
  webpack: {
    enable: true,
    package: 'egg-webpack'
  }
}

// ${app.baseDir}/config/config.default.js
exports.easyvue = {
  // 开启热更新模式，开发模式下默认开启
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

// https://github.com/hubcarl/egg-webpack
exports.webpack = {
  // port: 9000,
  // proxy: true,
  webpackConfigList: [webpackClientConfig, webpackServerConfig]
}
```
