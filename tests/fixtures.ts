import { test as baseTest } from '@playwright/test';
import { HomePage } from '../Page/Home'; 
import { CartPage } from '../Page/Cart';

// Créer une fixture qui initialise HomePage et CartPage
const test = baseTest.extend({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
});

export { test };  // Exporter la fixture customisée

