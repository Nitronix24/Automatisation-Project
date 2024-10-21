import { Locator, Page } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly addToCartButton: Locator; // Locator pour le bouton d'ajout au panier

    constructor(page: Page) {
        this.page = page;
        // Sélecteurs à adapter en fonction de la structure de la page produit
        this.addToCartButton = page.locator('input#add-to-cart-button'); // Bouton "Ajouter au panier"
    }
}
