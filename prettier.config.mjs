// prettier.config.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: true,
  semi: false,
  trailingComma: 'es5',
  printWidth: 80,
  tabWidth: 2,
  bracketSpacing: false,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/index.css',
  // tailwindConfig: './styles/tailwind.config.js',
}

export default config
