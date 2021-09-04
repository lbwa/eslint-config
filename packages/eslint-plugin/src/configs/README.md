# Configurations

```ts
import { Linter } from 'eslint'

export const config: Linter.Config = {
  plugins: ['@lbwa'], // '@lbwa' is an alias of `@lbwa/eslint-plugin`, more info https://eslint.org/docs/user-guide/configuring/plugins#naming-convention
  rules: {
    // Convention: Only includes rules from rules folder.
  }
}
```

## References

- [eslint.org - Working with plugins](https://eslint.org/docs/developer-guide/working-with-plugins#configs-in-plugins)
- [eslint.org - Configuring plugins](https://eslint.org/docs/user-guide/configuring/plugins#configuring-plugins)
