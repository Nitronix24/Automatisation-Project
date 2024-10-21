import { test, expect } from '@playwright/test';

test('ajouter une nouvelle adresse sur Amazon', async ({ page }) => {
  // Connexion et navigation vers la section des adresses
  await page.goto('https://www.amazon.fr');
  await page.click('#nav-link-accountList');
  await page.fill('#ap_email', 'votre-email@example.com');
  await page.click('#continue');
  await page.fill('#ap_password', 'votre-mot-de-passe');
  await page.click('#signInSubmit');
  await page.click('a[href*="address"]');

  // Ajouter une nouvelle adresse
  await page.click('a[data-action="add-address"]');
  await page.fill('#address-ui-widgets-enterAddressFullName', 'John Doe');
  await page.fill('#address-ui-widgets-enterAddressPhoneNumber', '0612345678');
  await page.fill('#address-ui-widgets-enterAddressPostalCode', '75001');
  await page.fill('#address-ui-widgets-enterAddressLine1', '1 Rue de la Paix');
  await page.fill('#address-ui-widgets-enterAddressCity', 'Paris');
  await page.click('#address-ui-widgets-form-submit-button');

  // Vérifier que la nouvelle adresse est présente
  const newAddress = await page.locator('.address-list-item').last();
  await expect(newAddress).toContainText('John Doe');
});
