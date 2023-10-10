const { defineConfig } = require('vitest/config');
const sharedConfigs = require('config/vitest.shared.config');

module.exports = defineConfig({
  ...sharedConfigs,
  plugins: [],
  test: {
    ...sharedConfigs.test,
    // environment: 'jsdom',
  },
});
