module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        '@typescript-eslint/no-empty-interface': 'off', // 允许空接口
        '@typescript-eslint/no-unused-vars': 'off', // 未使用变量
        '@typescript-eslint/prefer-function-type': 'off', // 允许interface定义函数
        '@typescript-eslint/no-implicit-any-catch': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unused-vars': 'off',
    'react-perf/jsx-no-new-function-as-prop': 'off',
    'react-perf/jsx-no-new-object-as-prop': 'off',
    'max-params': 'off',
  },
};
