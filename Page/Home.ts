import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchBox: Locator;
    readonly searchButton: Locator;
    readonly cartLink: Locator;

    constructor(page) {
        this.page = page;
        this.searchBox = page.locator('//*[@id="twotabsearchtextbox"]');
        this.searchButton = page.locator('//*[@id="nav-search-submit-button]');
        this.cartLink = page.locator('//*[@id="nav-cart-count-container"]');
      }
    
      async searchForProduct(productName) {
        await this.searchBox.fill(productName);
        await this.searchButton.click();
      }
    
      async goToCart() {
        await this.cartLink.click();
      }
    }
