import { test as baseTest } from '@playwright/test';
import { HomePage } from '../Page/Home';
import { CartPage } from '../Page/Cart';
import { ProductPage } from '../Page/Product';

// Créer une fixture qui initialise les pages de l'application
const test = baseTest.extend({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  }
});

export { test };  // Exporter la fixture customisée

