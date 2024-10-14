import { test, expect } from '@playwright/test';

test('vérifier les adresses de livraison sur Amazon', async ({ page }) => {
  // Étape 1 : Aller sur la page d'accueil d'Amazon.fr
  await page.goto('https://www.amazon.fr');

  // Étape 2 : Connexion au compte utilisateur (assurez-vous que vous avez les bonnes informations de connexion)
  await page.click('#nav-link-accountList'); // Cliquer sur le lien pour accéder à la connexion
  await page.fill('#ap_email', 'votre-email@example.com'); // Entrer l'adresse e-mail
  await page.click('#continue'); // Cliquer sur le bouton Continuer
  await page.fill('#ap_password', 'votre-mot-de-passe'); // Entrer le mot de passe
  await page.click('#signInSubmit'); // Cliquer sur le bouton de connexion

  // Étape 3 : Aller à la section "Mes adresses"
  await page.click('a[href*="address"]'); // Naviguer vers la page des adresses (assurez-vous que le sélecteur est correct)
  
  // Étape 4 : Vérifier que la page des adresses s'affiche
  await expect(page).toHaveURL(/.*your-account\/address/); // Vérifiez que l'URL est bien celle des adresses

  // Étape 5 : Vérifier s'il y a des adresses de livraison déjà enregistrées
  const addressList = await page.locator('.address-list-item'); // Sélecteur pour les adresses de livraison
  const addressCount = await addressList.count(); // Compter le nombre d'adresses

  expect(addressCount).toBeGreaterThan(0); // Assurez-vous qu'il y a au moins une adresse de livraison

  // Étape 6 : Ajouter une nouvelle adresse (si nécessaire)
  // Vous pouvez étendre le test en ajoutant de nouvelles adresses, en modifiant ou en supprimant des adresses.
});
