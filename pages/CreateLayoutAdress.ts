import { Page, Locator, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';

// Liste d'adresses françaises avec leurs villes et codes postaux
const addressesWithDetails: { address: string; city: string; postalCode: string }[] = [
    { address: '2, Rue Saint-Florentin', city: 'Paris', postalCode: '75001' },
    { address: '10, Rue de la République', city: 'Lyon', postalCode: '69001' },
    { address: '12, Rue de la Liberté', city: 'Marseille', postalCode: '13001' },
    { address: '5, Boulevard du Palais', city: 'Toulouse', postalCode: '31000' },
    { address: '23, Avenue Jean Médecin', city: 'Nice', postalCode: '06000' },
    { address: '45, Rue de la Gare', city: 'Nantes', postalCode: '44000' },
    { address: '78, Rue du Faubourg', city: 'Strasbourg', postalCode: '67000' },
    { address: '88, Boulevard de l’Observatoire', city: 'Montpellier', postalCode: '34000' },
    { address: '56, Rue Faidherbe', city: 'Lille', postalCode: '59000' },
    { address: '15, Rue de la Paix', city: 'Paris', postalCode: '75002' },
    { address: '20, Rue de la République', city: 'Marseille', postalCode: '13002' },
    { address: '30, Boulevard de la Liberté', city: 'Lille', postalCode: '59000' },
    { address: '40, Avenue des Champs-Élysées', city: 'Paris', postalCode: '75008' },
    { address: '50, Rue de la Gare', city: 'Strasbourg', postalCode: '67000' },
];

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
        this.submitButton = page.getByLabel('Ajouter une adresse');
        this.AdresseEnregistrée = page.getByRole('heading', { name: 'Adresse enregistrée' });
    }

    async createAddress() {
        await this.accountMenu.waitFor({ state: 'visible' });
        await this.accountMenu.click();
        await this.Addresses.waitFor({ state: 'visible' });
        await this.Addresses.click();
        await this.addAddressButton.waitFor({ state: 'visible' });
        await this.addAddressButton.click();

        // Choisir une adresse, une ville et un code postal au hasard
        const randomAddressDetail = faker.helpers.arrayElement(addressesWithDetails);
        
        // Utilisation de Faker pour générer des données aléatoires
        const fullName = faker.person.fullName();
        const phoneNumber = faker.phone.number({ style: 'national' }); // Générer un numéro de téléphone au format national
        const addressLine1 = randomAddressDetail.address; // Adresse correspondante
        const postalCode = randomAddressDetail.postalCode; // Code postal correspondant
        const city = randomAddressDetail.city; // Ville correspondante

        // Attendre que les champs soient visibles
        await this.fullNameInput.waitFor({ state: 'visible' });
        await this.phoneNumberInput.waitFor({ state: 'visible' });
        await this.addressLine1Input.waitFor({ state: 'visible' });
        await this.postalCodeInput.waitFor({ state: 'visible' });
        await this.cityInput.waitFor({ state: 'visible' });

        // Remplir les champs avec des données générées par Faker
        await this.fullNameInput.fill(fullName);
        await this.phoneNumberInput.fill(phoneNumber);
        await this.addressLine1Input.fill(addressLine1);
        await this.postalCodeInput.fill(postalCode); // Utiliser le code postal correspondant
        await this.cityInput.fill(city); // Utiliser la ville correspondante

        // Soumettre le formulaire
        await this.submitButton.click();

        // Vérifier que l'adresse a été enregistrée
        await expect(this.AdresseEnregistrée).toBeVisible();
    }
}
