import { Locator,Page,expect } from "@playwright/test";
export class AjoutAdresse {
    readonly page: Page;
    readonly identificationButton:Locator
    readonly emailLocator: Locator;
    readonly passwordLocator: Locator;
    readonly continuerButtonLocator: Locator;
    readonly loginButtonLocator: Locator;
    readonly homePage: Locator;
    readonly bonjourButton: Locator;
    readonly adresseLocator: Locator;
    readonly ajoutAdresseButton: Locator;
    readonly numeroLocator: Locator;
    readonly adresse_1: Locator;
    readonly ajoutAdresseButtonLocator: Locator;
    readonly villeLocator: Locator;
    readonly adresse_enregistree: Locator;
    
    


    constructor(page: Page) {
        this.page = page;
        this.identificationButton = page.getByRole('link', { name: 'Bonjour, Identifiez-vous' });
        this.emailLocator = page.locator("#ap_email");
        this.continuerButtonLocator = page.getByLabel('Continuer');
        this.passwordLocator=page.locator("#ap_password");
        this.loginButtonLocator = page.getByLabel('S\'identifier');
        this.homePage = page.getByLabel('Amazon.fr', { exact: true });
        this.bonjourButton = page.getByRole('link', { name: 'Bonjour LEMOGO Compte et' });
        this.adresseLocator = page.getByRole('link', { name: 'Adresses Modifier les' });
        this.ajoutAdresseButton = page.getByRole('link', { name: 'Ajouter une adresse' });
        this.numeroLocator = page.locator("#address-ui-widgets-enterAddressPhoneNumber");
        this.adresse_1 = page.locator("#address-ui-widgets-enterAddressLine1");
        this.ajoutAdresseButtonLocator = page.getByLabel('Ajouter une adresse');
        this.villeLocator = page.locator("#address-ui-widgets-enterAddressCity");
        this.adresse_enregistree = page.locator('#yaab-alert-box div').filter({ hasText: 'Adresse enregistrée' });
        

        
    }


    async AjoutAdresse(){
        await this.identificationButton.click();
        await this.emailLocator.fill('collinskamnen@gmail.com');
        await this.continuerButtonLocator.click();
        await this.passwordLocator.fill('KAMNEn1234#');
        await this.loginButtonLocator.click();
        await expect(this.homePage).toBeVisible();
        await this.bonjourButton.click();
        await this.adresseLocator.click();
        await this.ajoutAdresseButton.click();
        await this.numeroLocator.fill('0744171597');
        await this.adresse_1.fill('13, Rue de Naples');
        await this.villeLocator.fill('Roubaix');
        await this.ajoutAdresseButtonLocator.click();
        await expect(this.adresse_enregistree).toBeVisible();
        
        

        

    }

}