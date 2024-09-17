module.exports = {
  parserOptions: {
    requireConfigFile: false, 
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential'
  ]
};
