module.exports = {
  extends: [
    '@lbwa/eslint-config-universal',
    // see https://github.com/typescript-eslint/typescript-eslint/blob/v4.22.0/packages/eslint-plugin/src/configs/recommended.ts
    'plugin:@typescript-eslint/recommended',
    // see https://github.com/typescript-eslint/typescript-eslint/blob/v4.22.0/packages/eslint-plugin/src/configs/eslint-recommended.ts
    'plugin:@typescript-eslint/eslint-recommended',
    // see https://github.com/typescript-eslint/typescript-eslint/blob/v4.22.0/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parser: '@typescript-eslint/parser',
  // use @typescript-eslint/eslint-plugin
  plugins: ['@typescript-eslint'],
  rules: {
    // see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowBoolean: true, allowNumber: true, allowNullish: true }
    ],
    // see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': true,
        minimumDescriptionLength: 3
      }
    ],
    // see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false
      }
    ],
    // see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
    '@typescript-eslint/require-await': 'off',
    // see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true
      }
    ]
  }
}
