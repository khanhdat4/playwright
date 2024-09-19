import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'http://localhost:8000',
    headless: true,
  },
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'google chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: [['html', { outputFolder: 'test-results' }]],
});
