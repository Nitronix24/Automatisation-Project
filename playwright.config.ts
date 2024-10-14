import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 60000, // Augmenter le timeout global à 60s pour tous les tests
  retries: 2, // Relancer jusqu'à 2 fois les tests qui échouent
  use: {
    headless: true, // Lancer les tests en mode headless
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
      workers: 1, // Limiter le nombre de threads à 1 pour éviter les erreurs dans Firefox
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ]
};

export default config;
