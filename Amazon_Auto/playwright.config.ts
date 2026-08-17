// playwright.config.ts

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Folder where test files are present
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Retry failed tests
  retries: 1,

  // Number of workers (parallel execution)
  workers: 1,

  // Reporter type
  reporter: [
    ['html'],
    ['list']
  ],

  // Global settings for all tests
  use: {

    // Base URL of application
    baseURL: 'https://example.com',

    // Browser launch options
    headless: false,

    // Screenshot on failure
    screenshot: 'only-on-failure',

    // Video recording
    video: 'retain-on-failure',

    // Trace for debugging
    trace: 'on-first-retry',

    // Browser viewport size
    viewport: { width: 600, height: 720 },

    // Ignore HTTPS errors
    ignoreHTTPSErrors: true,

    // Action timeout
    actionTimeout: 15000,

    // Navigation timeout
    navigationTimeout: 40000,

    launchOptions: {
    args: ['--start-maximized']
  }
  },
  // Test timeout
  timeout: 40000,

  // Expect timeout
  expect: {
    timeout: 5000,
  },

  

  // Multiple browser execution
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
    
  ],
});