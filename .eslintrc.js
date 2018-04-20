module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'no-console': 0,
    'no-unused-vars': ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }],
    'no-empty': ['error', { 'allowEmptyCatch': true }],
    'react/prop-types': 0,
  },
  globals: {
    chrome: true,
  },
}
