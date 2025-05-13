import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '.e2e',
  reporter:[
    ['html'],
    ['./tests/custom-slack-report.ts', ]
  ],
  use:{
    trace: 'on-first-retry',
  },
  projects:[
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'] },
    },
  ],
  
  });

