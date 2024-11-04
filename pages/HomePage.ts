import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchBox: Locator;
    readonly searchButton: Locator;
    readonly cartLink: Locator;
    readonly language: Locator;
    readonly change_language: Locator;
    readonly hamburger_menu: Locator;
    readonly viewMore: Locator;
    readonly kitchen_and_house: Locator;
    readonly gros_electromenager: Locator;

    constructor(page : Page) {
        this.page = page;
        this.searchBox = page.locator('//*[@id="twotabsearchtextbox"]');
        this.searchButton = page.locator('//*[@id="nav-search-submit-button"]');
        this.cartLink = page.locator('//*[@id="nav-cart-count-container"]');
        this.language = page.locator('#icp-nav-flyout');
        this.change_language = page.locator('#icp-language-translation-hint');
        this.hamburger_menu = page.locator('#nav-hamburger-menu');
        this.viewMore = page.getByRole('link', { name: 'Tout afficher', class: 'hmenu-compressed-btn' });
        this.kitchen_and_house = page.getByRole('link', { name: 'Cuisine et maison' });
        this.gros_electromenager = page.locator('a[href="/gp/browse.html?node=57695031&ref_=nav_em__groselectro_0_2_15_14"]:visible');

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
}