import { Page, Locator, expect } from "@playwright/test";

export class CreateLayoutAdress {
    readonly page: Page;
    readonly accountMenu: Locator;
    readonly Addresses: Locator;
    readonly addAddressButton: Locator;
    readonly fullNameInput: Locator;
    readonly phoneNumberInput: Locator;
    readonly addressLine1Input: Locator;
    readonly postalCodeInput: Locator;
    readonly cityInput: Locator;
    readonly submitButton: Locator;
    readonly AdresseEnregistrée: Locator;
/////////////////////
    constructor(page: Page) {
        this.page = page;
        this.accountMenu = page.getByRole('link', { name: 'Compte et Listes' });
        this.Addresses = page.getByRole('link', { name: 'Adresses Modifier les' });
        this.addAddressButton = page.getByRole('link', { name: 'Ajouter une adresse' });
        this.fullNameInput = page.locator('#address-ui-widgets-enterAddressFullName');
        this.phoneNumberInput = page.locator('#address-ui-widgets-enterAddressPhoneNumber');
        this.addressLine1Input = page.locator('#address-ui-widgets-enterAddressLine1');
        this.postalCodeInput = page.locator('#address-ui-widgets-enterAddressPostalCode');
        this.cityInput = page.locator('#address-ui-widgets-enterAddressCity');
        this.submitButton = page.getByLabel('Ajouter une adresse')
        this.AdresseEnregistrée = page.getByRole('heading', { name: 'Adresse enregistrée' });
    }

    async createAddress() {
        await this.accountMenu.waitFor({ state: 'visible' });
        await this.accountMenu.click();
        await this.Addresses.waitFor({ state: 'visible' });
        await this.Addresses.click();
        await this.addAddressButton.waitFor({ state: 'visible' });
        await this.addAddressButton.click();
        await this.fullNameInput.fill('john doe');
        await this.phoneNumberInput.fill('675943749');
        await this.addressLine1Input.fill('2, Rue Saint-Florentin');
        await this.postalCodeInput.fill('75001');
        await this.cityInput.fill('paris');
        await this.submitButton.click();
        await expect(this.AdresseEnregistrée).toBeVisible();
    }
}
