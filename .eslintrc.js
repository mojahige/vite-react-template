module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  plugins: ['react', '@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {},
};
