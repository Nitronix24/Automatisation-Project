import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly cookieButton: Locator;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly cartLink: Locator;

  readonly language: Locator;
  readonly change_language: Locator;
  readonly hamburger_menu: Locator;
  readonly kitchen_and_house: Locator;
  readonly gros_electromenager: Locator;

  readonly logo: Locator;
  readonly nav_search: Locator;
  readonly best_sellers: Locator;
  readonly vente_flash: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cookieButton = page.locator('//*[@id="sp-cc-rejectall-link"]'); // Sélecteur pour le bouton de refus des cookies
    this.searchBox = page.locator('//*[@id="twotabsearchtextbox"]'); // Sélecteur pour la barre de recherche
    this.searchButton = page.locator('//*[@id="nav-search-submit-button"]'); // Sélecteur pour le bouton de recherche
    this.cartLink = page.locator('//*[@id="nav-cart-count-container"]'); // Sélecteur pour le bouton du panier

    this.language = page.locator('#icp-nav-flyout');
    this.change_language = page.locator('#icp-language-translation-hint');
    this.hamburger_menu = page.locator('#nav-hamburger-menu')
    this.kitchen_and_house = page.locator('a[href="/cuisine-maison-%C3%A9lectrom%C3%A9nager/b/?ie=UTF8&node=57004031&ref_=nav_cs_home"]');
    this.gros_electromenager = page.getByRole('link', { name: 'Gros électroménager' })

    this.logo = page.locator('#nav-logo'); // Sélecteur pour le logo
    this.nav_search = page.locator('#twotabsearchtextbox'); // Sélecteur pour la barre de recherche
    this.best_sellers = page.locator('#nav_cs_bestsellers'); // Sélecteur pour le bouton meilleurs ventes
    this.vente_flash = page.locator('#nav_cs_gb'); // Sélecteur pour le bouton ventes flash
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
  async KitchenAndHouseClick(){
    await this.kitchen_and_house.click();
  }
  async grosElectromenagerClick() {
    await this.gros_electromenager.click();
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
