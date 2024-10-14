import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 30000,
  retries: 2,
  use: {
    headless: true, // Mettre à false si vous voulez voir le navigateur pendant les tests
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: false
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ]
};

export default config;
