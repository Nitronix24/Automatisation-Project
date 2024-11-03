import { Page ,Locator, expect } from "@playwright/test";

export class SignPage {
    readonly page: Page;
    readonly nom : Locator;
    readonly identificationButton:Locator;
    readonly CreateAccountButton:Locator;
    readonly emailLocator: Locator;
    readonly passwordLocator: Locator;
    readonly continuerButtonLocator: Locator;
    readonly confirmPasswordLocator: Locator;
    readonly homePage: Locator;
    constructor(page: Page) {
        this.page = page;
        this.identificationButton = page.getByRole('link', { name: 'Bonjour, Identifiez-vous' });
        this.CreateAccountButton = page.getByRole('link', { name: 'Créer votre compte Amazon' });
        this.nom=page.locator("#ap_customer_name");
        this.emailLocator = page.locator("#ap_email");
        this.passwordLocator=page.locator("#ap_password");
        this.confirmPasswordLocator=page.locator("#ap_password_check");
        this.continuerButtonLocator = page.getByLabel('Continuer Vérifier le numéro');
        this.homePage = page.locator('iframe[title="verification puzzle"]').contentFrame().getByText('Résoudre ce puzzle pour protéger votre compte Besoin d\'aide ?');     

    }
        async sign(){
            await this.identificationButton.click();
            await this.CreateAccountButton.click();
            await this.nom.fill('collins lemogo');
            await this.emailLocator.fill('benskotlemogo@gmail.com');
            await this.passwordLocator.fill('KAMNEn1234#');
            await this.confirmPasswordLocator.fill('KAMNEn1234#');
            await this.continuerButtonLocator.click();
            await expect(this.homePage).toBeVisible();

            
        }
    
        
        
    }
            
            
