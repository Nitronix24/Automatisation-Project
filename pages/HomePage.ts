import {Locator, Page,expect} from '@playwright/test'

class HomePage {

    readonly page: Page;
    readonly logo: Locator;
    readonly nav_search: Locator;
    readonly best_sellers: Locator;
    readonly vente_flash: Locator;
    readonly homePageUrl: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator('#nav-logo'); // Sélecteur pour le logo
        this.nav_search = page.locator('#twotabsearchtextbox'); // Sélecteur pour la barre de recherche
        this.best_sellers = page.locator('#nav_cs_bestsellers'); // Sélecteur pour le bouton meilleurs ventes
        this.vente_flash = page.locator('#nav_cs_gb'); // Sélecteur pour le bouton ventes flash
    }


    async isLogoVisible() {
        return await this.logo.isVisible();
    }

    async clickLogo() {
        await this.logo.click();
    }

    async clickBestSellers() {
        await this.best_sellers.click();
    }

    async clickVenteFlash() {
        await this.vente_flash.click();
    }
}

module.exports = HomePage;
