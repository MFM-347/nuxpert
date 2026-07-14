// @ts-check
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import oxlint from 'eslint-plugin-oxlint'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  ...oxlint.configs['flat/recommended'],
  eslintPluginUnicorn.configs.recommended,
  eslintPluginBetterTailwindcss.configs.recommended,
  {
    settings: {
      'better-tailwindcss': {
        entryPoint: 'app/main.css',
      },
    },

    rules: {
      'unicorn/no-abusive-eslint-disable': 'warn',
      'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/name-replacements': 'off'
    },
  },
)
