import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',  // Directory where your tests are located
  reporter: [
    ['html', { open: 'always' }],  // Configure HTML report generation
    ['json', { outputFile: 'test-report.json' }]  // Adăugăm raportul JSON
  ],
  use: {
    headless: false,  // Run tests in headless mode (no browser UI)
    baseURL: 'https://www.lucanet.com/en/',  // Base URL for your tests
    video: 'on-first-retry',  // Record video on test failures
  },
});

