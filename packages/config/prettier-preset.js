module.exports = {
  bracketSpacing: true,
  bracketSameLine: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: 'es5',
  semi: true,
  printWidth: 110,
  arrowParens: 'always',
  importOrder: [
    // Mocks must be at the top as they contain vi.mock calls
    '(.*)/__mocks__/(.*)',
    '<THIRD_PARTY_MODULES>',
    '^@lib/(.*)$',
    '^@components/(.*)$',
    '^~/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    /**
     * **NOTE** tailwind plugin must come last!
     * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
     */
    'prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: ['apps/website/lib/utils/wordlist/wordlist.ts'],
      options: {
        quoteProps: 'consistent',
      },
    },
  ],
};
