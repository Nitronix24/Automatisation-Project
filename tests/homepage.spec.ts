const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test.describe('Vérification de la page d\'accueil', () => {
    let page;
    let homePage;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        homePage = new HomePage(page);
        await homePage.navigate();
    });

    test('Vérifier la présence du logo', async () => {
        const logoVisible = await homePage.isLogoVisible();
        expect(logoVisible).toBe(true); // Vérifie que le logo est visible

        await homePage.clickLogo(); // Clique sur le logo

        // Vérifie que l'utilisateur est redirigé vers la page d'accueil
        expect(page.url()).toBe(homePage.homePageUrl);
    });

    test.afterAll(async () => {
        await page.close(); // Ferme la page après le test
    });
});
