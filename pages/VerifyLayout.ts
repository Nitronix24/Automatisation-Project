import { Page, Locator, expect } from "@playwright/test";

export class VerifyLayout {
    readonly page: Page;
    readonly accountMenu: Locator;
    readonly Addresses: Locator;
    readonly VosAdresses: Locator;
/////////////////////
    constructor(page: Page) {
        this.page = page;
        this.accountMenu = page.getByRole('link', { name: 'Compte et Listes' });
        this.Addresses = page.getByRole('link', { name: 'Adresses Modifier les' });
        this.VosAdresses = page.getByRole('heading', { name: 'Vos adresses' });
    }

    async verify() {
        await this.accountMenu.waitFor({ state: 'visible' });
        await this.accountMenu.click();
        await this.Addresses.waitFor({ state: 'visible' });
        await this.Addresses.click();
        await expect(this.VosAdresses).toBeVisible();
    }
}
