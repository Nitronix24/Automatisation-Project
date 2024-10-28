    import { Page, Locator } from '@playwright/test';

    export class LargeAppliancesPage {
        readonly page: Page;
        readonly brandCheckbox: Locator;
        readonly seeMoreSeller: Locator;
        readonly sellerCheckbox: Locator;
        readonly seeWashingMachine : Locator;

        constructor(page: Page) {
            this.page = page;
           
            this.brandCheckbox = page.getByRole('link', { name: 'Bosch', exact: true });
            this.seeMoreSeller = page.getByLabel('Voir plus, Vendeur');
            this.sellerCheckbox = page.getByRole('link', { name: 'DOMO EXPERT', exact: true });
            this.seeWashingMachine = page.locator('a[href="/b?node=1387423031&ref=sr_nr_n_5"]');
        }

        async filterByBrand() {
            await this.brandCheckbox.check();
        }

        async seeMoreSellerClick() {
            await this.seeMoreSeller.click();
        }

        async filterBySeller() {
            await this.sellerCheckbox.check();
        }

        async seeWashingMachineClick() {
            await this.seeWashingMachine.click();
        }
    }
