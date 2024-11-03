import {Page, Locator, expect} from '@playwright/test';
export class RechPage {
    readonly page: Page;
    readonly menu: Locator;
    readonly afficher_tout: Locator;
    readonly cuisine_maison: Locator;
    readonly gros_electromenager: Locator;
    readonly lave_linge_seche_linge: Locator;
    readonly lave_linge_seche_linge1: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menu=page.getByLabel('Ouvrir le menu Toutes les cat');
        this.afficher_tout=page.getByRole('link', { name: 'Tout afficher' }).first();
        this.cuisine_maison=page.getByRole('link', { name: 'Cuisine et maison' });
        this.gros_electromenager=page.getByRole('link', { name: 'Gros électroménager' });
        this.lave_linge_seche_linge=page.getByRole('link', { name: 'Lave-linges et sèche-linges' });
        this.lave_linge_seche_linge1=page.getByRole('heading', { name: 'Les lave-linge et sèche-linge' });                       
    }
    async Rech1(){
        await this.menu.click();
        await this.afficher_tout.click();
        await this.cuisine_maison.click();
        await this.gros_electromenager.first().click({force:true});
        await this.lave_linge_seche_linge.click();
        await expect(this.lave_linge_seche_linge1).toBeVisible();
}
}