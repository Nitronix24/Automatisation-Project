import {Page, expect, Locator} from '@playwright/test';

export class AcheterLivrePage {
    readonly page: Page;
    readonly vendre_sur_amazon: Locator;
    readonly s_inscrire: Locator;
    readonly adresse_email: Locator;
    readonly continuer: Locator;
    readonly mot_de_passe: Locator;
    readonly suivant: Locator;
    readonly two_step_verification: Locator;
    readonly code_otp: Locator;

    
    constructor(page: Page) {
        this.page = page;
        this.vendre_sur_amazon = page.getByRole('link', { name: 'Vendre sur Amazon' });
        this.s_inscrire = page.locator('#AZFR_SOA_HP_SIGN_N').getByLabel('S\'inscrire');
        this.adresse_email = page.locator('#ap_email');
        this.continuer = page.getByLabel('Continuer');
        this.mot_de_passe = page.locator('#ap_password');
        this.suivant = page.getByLabel('Suivant');
       this.two_step_verification=page.getByLabel('Vérification en deux étapes');
        this.code_otp=page.getByLabel('Envoi du code OTP');

        
        


        
    }
    async acheterLivre() {
        await this.vendre_sur_amazon.click();
        await this.s_inscrire.click();
        await this.adresse_email.fill('collinskamnen@gmail.com');
        await this.continuer.click();
        await this.mot_de_passe.fill('KAMNEn1234#');
        await this.suivant.click();
        expect(await this.two_step_verification.isVisible())
       
        

        

}
}
