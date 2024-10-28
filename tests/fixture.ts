import { test as baseTest } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LargeAppliancesPage } from '../pages/LargeAppliancesPage';

// Créer une fixture qui initialise les pages de l'application
const test = baseTest.extend({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  largeAppliancesPage: async ({ page }, use) => {
    const largeAppliancesPage = new LargeAppliancesPage(page);
    await use(largeAppliancesPage);
  }
});

export { test };  // Exporter la fixture customisée