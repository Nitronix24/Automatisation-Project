import { test, expect } from '@playwright/test';

test('supprimer une adresse sur Amazon', async ({ page }) => {
  // Connexion et navigation vers la section des adresses
  await page.goto('https://www.amazon.fr');
  await page.click('#nav-link-accountList');
  await page.fill('#ap_email', 'votre-email@example.com');
  await page.click('#continue');
  await page.fill('#ap_password', 'votre-mot-de-passe');
  await page.click('#signInSubmit');
  await page.click('a[href*="address"]');

  // Supprimer la première adresse
  const firstAddress = page.locator('.address-list-item').first();
  await firstAddress.click('a[data-action="delete-address"]');

  // Vérifier que l'adresse a bien été supprimée
  await expect(firstAddress).not.toBeVisible();
});
