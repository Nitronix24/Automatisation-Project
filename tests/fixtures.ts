import { test as baseTest } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import { ProductPage } from '../pages/ProductPage'; 
import { LargeAppliancesPage } from '../pages/LargeAppliancesPage';
import { CreateLayoutAdress } from '../pages/CreateLayoutAdress';
import { UpdateLayout } from '../pages/UpdateLayout';
import { VerifyLayout } from '../pages/VerifyLayout';
import { AcheterLivrePage } from '../pages/Achat_livre';
import { LoginLayoutPage } from '../pages/LoginLayoutPage';
import { SignPage } from '../pages/SignPage';


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
  },
  createAddress: async ({ page }, use) => {
    await use(new CreateLayoutAdress(page));
  },
  updateForms: async ({ page }, use) => {
    await use(new UpdateLayout(page));
  },
  Verify: async ({page}, use) => {
    await use(new VerifyLayout(page));
  },
  livre: async ({page}, use) => {
    await use(new AcheterLivrePage(page));
  },
  login: async ({page}, use) => {
    await use(new LoginLayoutPage(page));
  },
  sign: async ({page}, use) => {
    await use(new SignPage(page));
  }

});

export { test };  // Exporter la fixture customisée

