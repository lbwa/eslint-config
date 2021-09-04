// @ts-check
/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    // add all ECMACScript 2021 globals and automatically sets the ecmaVersion parser option to 12
    es2021: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    // include enable eslint-plugin-prettier,
    // see https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    // and https://github.com/prettier/eslint-plugin-prettier/blob/v3.3.1/eslint-plugin-prettier.js#L109-L117
    'plugin:prettier/recommended',
    // include enable eslint-plugin-jest
    // see https://github.com/jest-community/eslint-plugin-jest/tree/v24.3.6#recommended
    // and https://github.com/jest-community/eslint-plugin-jest/blob/v24.3.6/src/index.ts#L61-L65
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] }
    },
    jest: {
      version: 26
    }
  },
  rules: {
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',

    'no-debugger': process.env['NODE_ENV'] === 'production' ? 'error' : 'warn',
    'no-console': process.env['NODE_ENV'] === 'production' ? 'error' : 'warn',
    'no-var': 'error',
    'no-use-before-define': 'error',
    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message:
              'The default/named importation of lodash has been forbidden. Please use path import instead.'
          }
        ]
      }
    ]
  },
  overrides: [
    {
      files: ['**/__tests__/**', '**/*.{spec,test}.[jt]s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}
