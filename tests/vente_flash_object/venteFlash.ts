import { Page,Locator } from "playwright";
import { expect } from "playwright/test";
export class VenteFlashPage {
    readonly page: Page;
    readonly venteFlash: Locator;
    readonly filreBubble: Locator;
    readonly tt: Locator;
    readonly paw: Locator;

    
    

    constructor(page: Page) {   
        this.page = page;
        this.venteFlash = page.getByRole('link', { name: 'Ventes Flash' ,exact: true })
        this.filreBubble = page.getByTestId('filter-bubble-deals-collection-lightning-deals');
        this.tt = page.getByTestId('B0CSPM6GGF').getByTestId('product-card-link')
        this.paw = page.getByRole('heading', { name: 'Paw Patrol - Pat Patrouille' })



    }
    async verify1() {
       await this.venteFlash.click();
       await this.filreBubble.click();
       await this.tt.click();
       expect( await this.paw).toBeVisible();
       

        





       
       
    }
}