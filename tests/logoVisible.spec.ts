import { expect } from '@playwright/test';
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

test('Vérifier que le logo est visible sur la page d\'accueil', async ({ homePage }) => {
    // Vérifier la visibilité du logo
    const isVisible = await homePage.isLogoVisible();
    expect(isVisible).toBe(true); // Vérifie que le logo est visible

    // Clique sur le logo pour tester la redirection
    await homePage.clickLogo();

    // Vérifie que l'utilisateur est redirigé vers la page d'accueil
    expect(homePage.page.url()).toBe('https://www.amazon.fr/ref=nav_logo');
});

