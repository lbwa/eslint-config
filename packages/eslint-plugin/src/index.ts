import { Linter, Rule } from 'eslint'
import { config as recommended } from './configs/recommended'

const plugin: Plugin = {
  /**
   * @description  the rules of @lbwa/eslint-plugin included
   * @usage
   * ```js
   * {
   *    plugins: ["@lbw"]
   * }
   * ```
   */
  rules: {
    // Only include all customizable rules from rules folder.
  },
  /**
   * @see https://eslint.org/docs/developer-guide/working-with-plugins#configs-in-plugins
   */
  configs: {
    /**
     * @usage
     * ```js
     * {
     *    extends: ['plugin:@lbwa/recommended']
     * }
     * ```
     */
    recommended
  }
}

module.exports = plugin

interface Plugin {
  rules: Record<string, Rule.RuleModule>
  configs: Record<string, Linter.Config>
}
