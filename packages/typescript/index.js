module.exports = {
  extends: ['@lbwa/eslint-config-universal'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        // see https://github.com/typescript-eslint/typescript-eslint/blob/v4.22.0/packages/eslint-plugin/src/configs/recommended.ts
        'plugin:@typescript-eslint/recommended',
        // see https://github.com/typescript-eslint/typescript-eslint/blob/v4.22.0/packages/eslint-plugin/src/configs/eslint-recommended.ts
        'plugin:@typescript-eslint/eslint-recommended',
        // see https://github.com/typescript-eslint/typescript-eslint/blob/v4.22.0/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        // see https://github.com/benmosher/eslint-plugin-import#typescript
        'plugin:import/typescript'
      ],
      // https://github.com/typescript-eslint/typescript-eslint/tree/v4.22.0/packages/parser
      parser: '@typescript-eslint/parser',
      parserOptions: {
        // Relative paths are interpreted relative to the current working directory if tsconfigRootDir is not set.
        // see https://github.com/typescript-eslint/typescript-eslint/issues/540#issuecomment-493778387
        // see https://github.com/typescript-eslint/typescript-eslint/issues/1681#issuecomment-595327139
        project: ['./tsconfig.json', './packages/*/tsconfig.json']
      },
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
        ],
        // see https://github.com/typescript-eslint/typescript-eslint/blob/v4.22.0/packages/eslint-plugin/docs/rules/no-use-before-define.md
        // note you must disable the base rule as it can report incorrect errors
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { ignoreTypeReferences: true }
        ]
      }
    }
  ]
}
