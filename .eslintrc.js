module.exports = {
   env: {
      browser: true,
      es6: true
   },
   extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
   parserOptions: {
      ecmaFeatures: {
         experimentalObjectRestSpread: true,
         jsx: true
      },
      sourceType: 'module'
   },
   plugins: ['prettier', 'react'],
   rules: {
      indent: ['error', 3, { SwitchCase: 1 }],
      'linebreak-style': ['error', 'windows'],
      quotes: ['error', 'single'],
      semi: ['error', 'always']
   }
};
