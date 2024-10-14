import { chromium, Browser, BrowserContext, Page, test } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;

// Configuration avant l'exécution de tous les tests
test.beforeAll(async () => {
  // Lancer le navigateur Chromium
  browser = await chromium.launch({ headless: false }); // Mettre à true pour un mode sans tête
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.amazon.fr');

  // Connexion à Amazon
  await page.click('#nav-link-accountList');
  await page.fill('#ap_email', 'votre-email@example.com'); // Remplacer par vos identifiants de test
  await page.click('#continue');
  await page.fill('#ap_password', 'votre-mot-de-passe'); // Remplacer par vos identifiants de test
  await page.click('#signInSubmit');
});

// Nettoyage après l'exécution de tous les tests
test.afterAll(async () => {
  await page.close();
  await context.close();
  await browser.close();
});

export { page };
