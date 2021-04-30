# @lbwa/eslint-config

An opinionated eslint config.

```js
// .eslintrc.js
module.exports = {
  extends: ['@lbwa']
}
```

- [@lbwa/eslint-config-react](https://github.com/lbwa/eslint-config/tree/main/packages/react)
- [@lbwa/eslint-config-typescript](https://github.com/lbwa/eslint-config/tree/main/packages/typescript)
- [@lbwa/eslint-config-universal](https://github.com/lbwa/eslint-config/tree/main/packages/universal)

## FAQ

- Q: How we use global variables with default [no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals) rule?

  A: To use them, explicitly reference them, e.g. `window.name` or `window.status`.<sup>[ref](https://github.com/facebook/create-react-app/blob/v4.0.3/packages/eslint-config-react-app/index.js#L19-L24)</sup>

## License

MIT © [Liu Bowen](https://github.com/lbwa)
