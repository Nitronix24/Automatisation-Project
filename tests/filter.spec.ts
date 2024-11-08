import { test } from './fixtures';

test.beforeEach(async ({ page }) => {
    await page.route('**/*', route => {
        const url = route.request().url();
        if (url.includes('amazon-adsystem.com')) {
            route.abort();
        } else {
            route.continue();
        }
    });

    await page.goto('https://www.amazon.fr');
    await page.waitForSelector('#sp-cc-rejectall-link', { state: 'visible' });
    await page.locator('#sp-cc-rejectall-link').click();
});

test('filter by brand and seller', async ({page, homePage, largeAppliancesPage }) => {

    await homePage.hamburgerMenuClick();

    await homePage.viewMoreClick();

    await homePage.KitchenAndHouseClick();

    await homePage.grosElectromenagerClick();

    await largeAppliancesPage.filterByBrand();

    await largeAppliancesPage.seeMoreSellerClick();

    await largeAppliancesPage.filterBySeller();
});

test('filter by product', async ({page, homePage, largeAppliancesPage }) => {

    await homePage.hamburgerMenuClick();

    await homePage.viewMoreClick();

    await homePage.KitchenAndHouseClick();
    
    await homePage.grosElectromenagerClick();

    await largeAppliancesPage.seeWashingMachineClick();

});
