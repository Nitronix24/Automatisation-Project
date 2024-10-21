import { test} from './fixtures';  // Importer les fixtures depuis fixtures.js
import { expect } from '@playwright/test';

test.describe('Tests de gestion du panier', () => {

  test.beforeEach(async ({ page, homePage }) => {
    // Accéder à la page d'accueil d'Amazon avant chaque test
    await page.goto('https://www.amazon.fr');
  });

  test('Ajouter un produit au panier', async ({ page, homePage, cartPage }) => {
    await page.locator('#sp-cc-rejectall-link').click(); // Fermer la bannière de cookies
    await homePage.searchForProduct('écouteurs sans fil'); // Recherche du produit
    await page.click('div.s-main-slot div.s-result-item h2 a'); // Cliquer sur le premier produit
    await page.click('input#add-to-cart-button'); // Ajouter au panier
    await page.waitForSelector('.a-size-medium-plus'); // Attendre le message de confirmation d'ajout
    const confirmationMessage = await page.innerText('.a-size-medium-plus'); // Récupérer le texte de confirmation
    expect(confirmationMessage).toContain('Ajouté au panier'); // Vérifier que le produit est bien ajouté au panier
    
    await homePage.goToCart(); // Aller au panier
    const cartTitle = await cartPage.getProductTitle(); // Vérifier le titre du panier
    expect(cartTitle).not.toBeNull();
  });
});
