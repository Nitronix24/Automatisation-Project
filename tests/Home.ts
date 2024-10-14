import {Page, expect} from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchBox: string;
    readonly searchButton: string;
    readonly cartLink: string;

    constructor(page) {
        this.page = page;
        this.searchBox = 'input[id="twotabsearchtextbox"]';
        this.searchButton = 'input[id="nav-search-submit-button]';
        this.cartLink = 'input[id="nav-cart-count-container"]';
      }
    
      async searchForProduct(productName) {
        await this.page.fill(this.searchBox, productName);
        await this.page.click(this.searchButton);
      }
    
      async goToCart() {
        await this.page.click(this.cartLink);
      }
    }
