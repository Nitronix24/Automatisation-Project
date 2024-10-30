import { Locator, Page } from '@playwright/test';


export class CartPage {
    readonly page: Page;
    readonly productTitle: Locator;
    readonly emptyCartMessage: Locator;
    readonly deleteButton: Locator;
    readonly passCommandButton: Locator;

    constructor(page) {
      this.page = page;
      this.productTitle = page.locator('//*[@class="a-text-normal"]');
      this.emptyCartMessage = page.locator('//*[@id="sc-empty-cart"]');
      this.deleteButton = page.locator('//*[@value="Supprimer"]');
      this.passCommandButton = page.locator('//*[@name="proceedToRetailCheckout"]');
    }

    async getProductTitle() {
      return await this.productTitle.innerText();
    }   

    async getEmptyCartMessage() {
      return await this.emptyCartMessage.innerText();
    }
    
  }
  