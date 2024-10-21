import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 60000, // Augmenter le timeout global à 60s pour tous les tests
  retries: 2, // Relancer jusqu'à 2 fois les tests qui échouent
  use: {
    headless: true, // Lancer les tests en mode headless
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure', //
    trace: 'retain-on-failure',
  },
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'on-failure' }],
  ],
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
