import { test, expect } from '@playwright/test';
import { page } from '../fixtures/AmazonTestFixture';  // Import de la fixture

test('ajouter une nouvelle adresse sur Amazon', async () => {
  // Aller à la section des adresses après connexion
  await page.click('a[href*="address"]');
  await expect(page).toHaveURL(/.*your-account\/address/);

  // Ajouter une nouvelle adresse
  await page.click('a[data-action="add-address"]');
  await page.fill('#address-ui-widgets-enterAddressFullName', 'John Doe');
  await page.fill('#address-ui-widgets-enterAddressPhoneNumber', '0612345678');
  await page.fill('#address-ui-widgets-enterAddressPostalCode', '75001');
  await page.fill('#address-ui-widgets-enterAddressLine1', '1 Rue de la Paix');
  await page.fill('#address-ui-widgets-enterAddressCity', 'Paris');
  await page.click('#address-ui-widgets-form-submit-button');

  // Vérification que la nouvelle adresse est bien ajoutée
  const newAddress = await page.locator('.address-list-item').last();
  await expect(newAddress).toContainText('John Doe');
});
