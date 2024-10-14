

import { Page, Locator } from '@playwright/test';

export class CategoriesAndFilterPage {
    readonly page: Page;
    readonly gros_electromenager: Locator;
    readonly brandCheckbox: Locator;
    readonly sellerCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.gros_electromenager = page.locator('a[href="/gp/browse.html?node=57695031&ref_=nav_em__groselectro_0_2_15_14"]');
        this.brandCheckbox = page.locator('input[name="s-ref-checkbox-Samsung"]'); // Exemple pour la marque Samsung
        this.sellerCheckbox = page.locator('input[name="s-ref-checkbox-Amazon.fr"]'); // Exemple pour le vendeur Amazon.fr
    }

    async grosElectromenagerClick() {
        await this.gros_electromenager.click();
    }

    async filterByBrandAndSeller() {
        await this.brandCheckbox.check();
        await this.sellerCheckbox.check();
    }
}