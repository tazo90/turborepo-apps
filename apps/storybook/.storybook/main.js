module.exports = {
  stories: [
    // "../intro.stories.mdx",
    // "../../../packages/ui/components/**/*.stories.mdx",
    // "../../../packages/features/**/*.stories.mdx",
    '../../../packages/ui/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: { reactDocgen: false },
};
