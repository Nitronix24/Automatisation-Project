import { Page, Locator, expect } from "@playwright/test";

export class UpdateLayout {
    readonly page: Page;
    readonly accountMenu: Locator;
    readonly Addresses: Locator;
    readonly addressEditButton: Locator;
    readonly fullNameInput: Locator;
    readonly phoneNumberInput: Locator;
    readonly addressLine1Input: Locator;
    readonly postalCodeInput: Locator;
    readonly cityInput: Locator;
    readonly submitButton: Locator;
    readonly AdresseEnregistrée: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountMenu = page.getByRole('link', { name: 'Compte et Listes' });
        this.Addresses = page.getByRole('link', { name: 'Adresses Modifier les' });
        this.addressEditButton = page.locator('#ya-myab-address-edit-btn-1');
        this.fullNameInput = page.locator('#address-ui-widgets-enterAddressFullName');
        this.phoneNumberInput = page.locator('#address-ui-widgets-enterAddressPhoneNumber');
        this.addressLine1Input = page.locator('#address-ui-widgets-enterAddressLine1');
        this.postalCodeInput = page.locator('#address-ui-widgets-enterAddressPostalCode');
        this.cityInput = page.locator('#address-ui-widgets-enterAddressCity');
        this.submitButton = page.getByLabel('Mettre à jour l\'adresse')
        this.AdresseEnregistrée = page.getByRole('heading', { name: 'Adresse enregistrée' });
    }

    async updateForms() {
        await this.accountMenu.waitFor({ state: 'visible' });
        await this.accountMenu.click();
        await this.Addresses.click();
        await this.addressEditButton.waitFor({ state: 'visible' });
        await this.addressEditButton.click();
        await this.fullNameInput.fill('John Doe');
        await this.phoneNumberInput.fill('675943749');
        await this.addressLine1Input.fill(' 3, Rue Saint-Florentin');
        await this.postalCodeInput.fill('75008');
        await this.cityInput.fill('Paris');
        await this.submitButton.click();
        await expect(this.AdresseEnregistrée).toBeVisible();
    }
}