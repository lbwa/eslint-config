// @ts-check
/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['@lbwa/eslint-config-typescript', 'react-app', 'react-app/jest'],
  // eslint default parser
  // see https://eslint.org/docs/user-guide/configuring/plugins#specifying-parser
  // and https://github.com/eslint/espree
  parser: 'espree',
  overrides: [
    // see https://github.com/facebook/create-react-app/blob/v4.0.3/packages/eslint-config-react-app/index.js
    Object.assign({}, require('eslint-config-react-app').overrides[0], {
      files: ['**/*.ts?(x)'],
      // redeclare typescript parser for ts files since we have declared parser options in root field
      parser: '@typescript-eslint/parser'
    })
  ]
}
