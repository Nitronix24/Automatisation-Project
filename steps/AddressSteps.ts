import { Given, When, Then } from '@cucumber/cucumber';
import { AddressPage } from '../pages/AddressPage';
import { expect } from '@playwright/test';
import { page } from '../fixtures/AmazonTestFixture';

let addressPage: AddressPage;

Given('l\'utilisateur est connecté à son compte Amazon', async () => {
  await page.goto('https://www.amazon.fr');
  // Ajouter le code pour simuler la connexion utilisateur
});

When('l\'utilisateur accède à la page {string}', async (pageName: string) => {
  addressPage = new AddressPage(page);
  if (pageName === 'Mes adresses') {
    await addressPage.open();
  }
});

Then('l\'utilisateur voit une liste des adresses de livraison disponibles', async () => {
  const addresses = await addressPage.getAddresses();
  expect(await addresses.count()).toBeGreaterThan(0);
});
