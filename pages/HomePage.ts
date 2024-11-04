import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchBox: Locator;
    readonly cookieButton: Locator;
    readonly searchButton: Locator;
    readonly cartLink: Locator;
    readonly language: Locator;
    readonly change_language: Locator;
    readonly hamburger_menu: Locator;
    readonly viewMore: Locator;
    readonly kitchen_and_house: Locator;
    readonly gros_electromenager: Locator;
    readonly logo: Locator;
    readonly best_sellers: Locator;
    readonly vente_flash: Locator;

    constructor(page : Page) {
        this.page = page;
        this.cookieButton = page.locator('//*[@id="sp-cc-rejectall-link"]'); // Sélecteur pour le bouton de refus des cookies
        this.searchBox = page.locator('//*[@id="twotabsearchtextbox"]');
        this.searchButton = page.locator('//*[@id="nav-search-submit-button"]');
        this.cartLink = page.locator('//*[@id="nav-cart-count-container"]');
        this.language = page.locator('#icp-nav-flyout');
        this.change_language = page.locator('#icp-language-translation-hint');
        this.hamburger_menu = page.locator('#nav-hamburger-menu');
        this.viewMore = page.getByRole('link', { name: 'Tout afficher' })
        this.kitchen_and_house = page.getByRole('link', { name: 'Cuisine et maison', exact:true });
        this.gros_electromenager = page.locator('a[href="/gp/browse.html?node=57695031&ref_=nav_em__groselectro_0_2_15_14"]:visible');
        this.logo = page.locator('#nav-logo-sprites');
        this.best_sellers = page.getByLabel('navigation').getByRole('link', { name: 'Meilleures ventes' }); // Sélecteur pour le bouton meilleurs ventes
        this.vente_flash = page.getByRole('link', { name: 'Ventes Flash' }); // Sélecteur pour le bouton ventes flash

        }
        
    async searchForProduct(productName: string) {
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }
    
    async goToCart() {
        await this.cartLink.click();
    }

    async languageClick(){
        await this.language.click();
    }

    async changeLanguageClick(){
        await this.change_language.click();
    }

    async hamburgerMenuClick(){
        await this.hamburger_menu.click();
    }

    async viewMoreClick(){
        await this.viewMore.first().click();
    }

    async KitchenAndHouseClick(){
        await this.kitchen_and_house.click();
    }

    async grosElectromenagerClick() {
        await this.gros_electromenager.first().click({ force: true });

    }
    
    async isLogoVisible() {
        return await this.logo.isVisible();
    }

    async clickLogo(){
        await this.logo.click();
    }

    async clickBestSellers(){
        await this.best_sellers.click();
    }

    async clickVenteFlash(){
        await this.vente_flash.click();
    }
}
