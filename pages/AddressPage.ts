import { Page } from '@playwright/test';

export class AddressPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://www.amazon.fr/a/addresses');
  }

  async getAddresses() {
    return this.page.locator('#address-list li');
  }

  async addAddress(addressDetails: string) {
    await this.page.fill('#address-input', addressDetails);
    await this.page.click('#add-address-button');
  }

  async deleteAddress(addressID: string) {
    await this.page.click(`#delete-address-${addressID}`);
  }
}
