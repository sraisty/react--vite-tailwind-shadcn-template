import js from '@eslint/js'
import eslintReact from '@eslint-react/eslint-plugin'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import tsparser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
  {ignores: ['dist', 'node_modules']},
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      eslintReact.configs['recommended-type-checked'],
    ],
    files: ['*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsparser, // ✅ Use TypeScript parser
      parserOptions: {
        // ✅ Point to TypeScript config
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ],
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/switch-exhaustiveness-check': 'warn',
      'object-shorthand': 'error',
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            arguments: false,
          },
        },
      ],
    },
  },
  // This turns off ESLint rules that conflict with Prettier
  eslintConfigPrettier
)
