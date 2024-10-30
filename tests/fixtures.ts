import { test as baseTest } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';
import { ProductPage } from '../Pages/ProductPage';
import { LargeAppliancesPage } from '../Pages/LargeAppliancesPage';

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
  },
  largeAppliancesPage: async ({ page }, use) => {
    const largeAppliancesPage = new LargeAppliancesPage(page);
    await use(largeAppliancesPage);
  }

});

export { test };  // Exporter la fixture customisée

