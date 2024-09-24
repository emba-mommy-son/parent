// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset', '@babel/preset-typescript'],
    plugins: [
      'nativewind/babel',
      ['@babel/plugin-transform-class-properties', { loose: true }],
      ['@babel/plugin-transform-private-methods', { loose: true }],
      ['@babel/plugin-transform-private-property-in-object', { loose: true }],
    ],
  };
};
