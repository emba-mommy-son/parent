module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset', '@babel/preset-typescript'],
    plugins: [
      'react-native-reanimated/plugin',
      'nativewind/babel',
      ['@babel/plugin-transform-class-properties', { loose: true }],
      ['@babel/plugin-transform-private-methods', { loose: true }],
      ['@babel/plugin-transform-private-property-in-object', { loose: true }],
      [
        'module-resolver',
        {
          root: ['./src'], // 'src' 폴더를 루트로 설정
          alias: {
            '@': './src', // '@'로 절대 경로를 설정
          },
        },
      ],
    ],
  };
};
