
import { defineConfig } from 'vite'

/**@type {import('vitest/config').UserConfig} */
const sharedConfigs = require('config/vite.config');

module.exports = defineConfig({
  ...sharedConfigs,
  resolve: {},
});
