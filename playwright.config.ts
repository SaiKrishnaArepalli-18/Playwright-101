const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './test',
  timeout : 600000,
  projects: [
    {
      name: 'Chromium-Windows',
      use: { browserName: 'chromium' },
      retries: 1,
    },
    {
      name: 'Firefox-macOS',
      use: { browserName: 'firefox' },
      retries: 1,
    }
  ]
});