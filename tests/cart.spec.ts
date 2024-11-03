import { test } from './fixtures';  // Importer les fixtures depuis fixtures.js
import { expect } from '@playwright/test';

test.describe('Tests de gestion du panier', () => {

  test.beforeEach(async ({ page}) => {
    // Accéder à la page d'accueil d'Amazon avant chaque test
    await page.goto('https://www.amazon.fr');
  });

  test('Ajouter un produit au panier', async ({ page, homePage, cartPage, productPage }) => {
    await homePage.cookieButton.click(); // Fermer la bannière de cookies
    await homePage.searchForProduct('écouteurs sans fil'); // Recherche du produit
    await page.click('div.s-main-slot div.s-result-item h2 a'); // Cliquer sur le premier produit
    await productPage.addToCartButton.click() ; // Ajouter au panier
    await page.waitForSelector('.a-size-medium-plus'); // Attendre le message de confirmation d'ajout
    const confirmationMessage = await page.innerText('.a-size-medium-plus'); // Récupérer le texte de confirmation
    expect(confirmationMessage).toContain('Ajouté au panier'); // Vérifier que le produit est bien ajouté au panier
    
    await homePage.goToCart(); // Aller au panier
    const cartTitle = await cartPage.getProductTitle(); // Vérifier le titre du panier
    expect(cartTitle).not.toBeNull();
  });


  test('Utilisateur supprime un produit de son panier', async ({ page, homePage, cartPage, productPage }) => {
    await homePage.cookieButton.click(); // Fermer la bannière de cookies
    await homePage.searchForProduct('écouteurs sans fil'); // Recherche de vêtements
    await page.click('div.s-main-slot div.s-result-item h2 a'); // Cliquer sur le premier produit
    await productPage.addToCartButton.click() ; // Ajouter au panier
    await page.waitForSelector('.a-size-medium-plus'); // Attendre que le produit soit ajouté

    await homePage.goToCart(); // Aller au panier
    await cartPage.deleteButton.click(); // Cliquer sur le bouton "Supprimer"

    const emptyCartMessage = await cartPage.emptyCartMessage.innerText(); // Vérifier le message de panier vide
    expect(emptyCartMessage).toMatch(/Votre panier Amazon est vide/i);
  });

  
  test('Utilisateur n\'a pas d\'article dans le panier', async ({homePage, cartPage}) => {
    await homePage.cookieButton.click(); // Fermer la bannière de cookies
    await homePage.goToCart(); // Aller au panier

    const emptyCartMessage = await cartPage.emptyCartMessage.innerText(); // Vérifier le message de panier vide
    expect(emptyCartMessage).toMatch(/Votre panier Amazon est vide/i);

    const checkoutButton = cartPage.passCommandButton; // Vérifier que le bouton de commande est désactivé
    expect(await checkoutButton.isHidden()).toBe(true); // Vérifie que le bouton est caché
  });


});
