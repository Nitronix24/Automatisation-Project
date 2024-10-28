import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchBox: Locator;
    readonly searchButton: Locator;
    readonly cartLink: Locator;
    readonly language: Locator;
    readonly change_language: Locator;
    readonly hamburger_menu: Locator;
    readonly kitchen_and_house: Locator;
    readonly gros_electromenager: Locator;

    constructor(page) {
        this.page = page;
        this.searchBox = page.locator('//*[@id="twotabsearchtextbox"]');
        this.searchButton = page.locator('//*[@id="nav-search-submit-button"]');
        this.cartLink = page.locator('//*[@id="nav-cart-count-container"]');
        this.language = page.locator('#icp-nav-flyout');
        this.change_language = page.locator('#icp-language-translation-hint');
        this.hamburger_menu = page.locator('#nav-hamburger-menu')
        this.kitchen_and_house = page.locator('a[href="/cuisine-maison-%C3%A9lectrom%C3%A9nager/b/?ie=UTF8&node=57004031&ref_=nav_cs_home"]');
        this.gros_electromenager = page.getByRole('link', { name: 'Gros électroménager' })

        }
        
    async searchForProduct(productName) {
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

    async KitchenAndHouseClick(){
        await this.kitchen_and_house.click();
    }

    async grosElectromenagerClick() {
        await this.gros_electromenager.click();
    }
}