// /tests/cartTests.spec.js
import { test, expect } from '@playwright/test';
import {HomePage} from '../Page/Home';
import {CartPage} from '../Page/Cart';

test.describe('Tests de gestion du panier', () => {
  let homePage;
  let cartPage;

  test.beforeEach(async ({ page }) => {
    const pages = await testFixtures({ page });
    homePage = pages.homePage;
    cartPage = pages.cartPage;
  });

  test('Ajouter un produit au panier', async ({ page }) => {
    await homePage.searchForProduct('écouteurs sans fil');
    await page.click('div.s-main-slot div.s-result-item h2 a'); // Cliquer sur le premier produit
    await page.click('input#add-to-cart-button'); // Ajouter au panier
    await page.waitForSelector('.a-size-medium-plus'); // Attendre le message de confirmation
    const confirmationMessage = await page.innerText('.a-size-medium-plus');
    expect(confirmationMessage).toContain('L\'article a été ajouté à votre panier');
  });

  test('Visualiser le contenu du panier', async () => {
    await homePage.searchForProduct('montre intelligente');
    await page.click('div.s-main-slot div.s-result-item h2 a'); // Cliquer sur le premier produit
    await page.click('input#add-to-cart-button'); // Ajouter au panier
    await homePage.goToCart(); // Aller au panier
    const cartTitle = await cartPage.getProductTitle(); // Vérifier le titre du panier
    expect(cartTitle).toContain('Shopping Cart');
  });

  test('Modifier la quantité d\'un produit dans le panier', async () => {
    await homePage.searchForProduct('livre');
    await page.click('div.s-main-slot div.s-result-item h2 a'); // Cliquer sur le premier produit
    await page.click('input#add-to-cart-button'); // Ajouter au panier
    await homePage.goToCart(); // Aller au panier
    await cartPage.updateProductQuantity('3'); // Changer la quantité à 3
    const updatedQuantity = await page.innerText('.a-dropdown-prompt'); // Vérifier la quantité mise à jour
    expect(updatedQuantity).toBe('3');
  });

  test('Supprimer un produit du panier', async () => {
    await homePage.searchForProduct('vêtements');
    await page.click('div.s-main-slot div.s-result-item h2 a'); // Cliquer sur le premier produit
    await page.click('input#add-to-cart-button'); // Ajouter au panier
    await homePage.goToCart(); // Aller au panier
    await cartPage.deleteProduct(); // Supprimer le produit
    const emptyCartMessage = await cartPage.verifyCartIsEmpty();
    expect(emptyCartMessage).toContain('Votre panier est vide');
  });

  test('Vider le panier', async () => {
    await homePage.searchForProduct('chaussures');
    await page.click('div.s-main-slot div.s-result-item h2 a'); // Cliquer sur le premier produit
    await page.click('input#add-to-cart-button'); // Ajouter au panier
    await homePage.goToCart(); // Aller au panier
    await page.click('input[name="submit.deleteItem"]'); // Vider le panier
    const emptyCartMessageAfterClearing = await cartPage.verifyCartIsEmpty();
    expect(emptyCartMessageAfterClearing).toContain('Votre panier est vide');
  });

  test('Essayer de commander sans article dans le panier', async () => {
    await homePage.goToCart(); // Aller au panier
    const emptyCartHeader = await cartPage.verifyCartIsEmpty();
    expect(emptyCartHeader).toContain('Votre panier est vide');
  });
});
