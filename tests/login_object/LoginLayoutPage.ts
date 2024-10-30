import { Page,Locator,expect } from "@playwright/test";

export class LoginLayoutPage {
    readonly page: Page;
    readonly identificationButton:Locator
    readonly emailLocator: Locator;
    readonly passwordLocator: Locator;
    readonly continuerButtonLocator: Locator;
    readonly loginButtonLocator: Locator;
    readonly homePage: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.identificationButton = page.getByRole('link', { name: 'Bonjour, Identifiez-vous' });
        this.emailLocator = page.locator("#ap_email");
        this.continuerButtonLocator = page.getByLabel('Continuer');
        this.passwordLocator=page.locator("#ap_password");
        this.loginButtonLocator = page.getByLabel('S\'identifier');
        this.homePage = page.getByLabel('Amazon.fr', { exact: true });
        
    }
        async login1(){
            
            await this.identificationButton.click();
            await this.emailLocator.fill('collinskamnen@gmail.com');
            await this.continuerButtonLocator.click();
            await this.passwordLocator.fill('KAMNEn1234#');
            await this.loginButtonLocator.click();
            await expect(this.homePage).toBeVisible();
            
            
        }
        
}




        
    