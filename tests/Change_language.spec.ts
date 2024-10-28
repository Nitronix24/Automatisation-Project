import { test } from './fixture';

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

test('change language', async ({page, homePage }) => {

    await homePage.languageClick();

    await homePage.changeLanguageClick();

    await page.waitForTimeout(5000);
});
