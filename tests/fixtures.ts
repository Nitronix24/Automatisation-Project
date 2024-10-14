import { test, expect} from '@playwright/test';
import { HomePage } from '../Page/Home';
import { CartPage } from '../Page/Cart';

test.beforeEach(async ({ page }) => {
  // Initialiser les pages
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  
  // Accéder à la page d'accueil d'Amazon
  await page.goto('https://www.amazon.com');
  
  // Retourner les pages pour les tests
  return { homePage, cartPage };
});





test.afterEach(async ({ page }) => {
  // Étapes de nettoyage si nécessaire
  await page.close();
});


const expect = base.expect;
export { test, expect };
