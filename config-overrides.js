// const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
  // config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  config.module.rules[2].oneOf[1].options.babelrc = true;
  
  config.resolve.alias = {
    'assets': './src/assets',
    'pages': './src/pages',
    'components': './src/components',
    '@': './src'
  }

  return config;
};