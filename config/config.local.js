module.exports = appInfo => {
  const {baseDir} = appInfo;
  const env = 'local';

  return {
    development: {
      ignoreDirs: ['app/web']
    },
    // https://github.com/hubcarl/egg-webpack
    webpack: {
      port: Number(process.env.PORT || 7001) + 1,
      // proxy: true
      webpackConfigList: []
    },
    easyvue: {
      // 开启热更新
      enableHMR: true
    }
  }
}
