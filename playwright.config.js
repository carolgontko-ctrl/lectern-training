const { defineConfig, devices } = require('@playwright/test');
const path = require('path');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  reporter: 'list',
  projects: [
    { name: 'Desktop Chrome', use: { viewport: { width: 1280, height: 800 } } },
    { name: 'iPhone 14',      use: { ...devices['iPhone 14'] } },
    { name: 'iPad Pro',       use: { ...devices['iPad Pro 11'] } },
    { name: 'Pixel 7',        use: { ...devices['Pixel 7'] } },
  ],
});
