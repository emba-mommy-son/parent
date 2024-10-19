// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'prettier'],
  plugins: ['simple-import-sort', 'prettier'],
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    'react/no-unstable-nested-components': 'off',
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'warn',
    'import/no-unresolved': 0,
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/namespace': 'off',
  },
};
