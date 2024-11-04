import { expect } from '@playwright/test';
import { test } from './fixtures';

test.beforeEach(async ({ page }) => {
    // Empêche le chargement des publicités et se rend sur la page d'accueil d'Amazon
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

test('Redirection vers Meilleures Ventes', async ({ homePage }) => {
    // Clique sur le bouton "Meilleures Ventes" et vérifie la redirection
    await homePage.clickBestSellers();
    
    // Vérifie que l'URL est correcte pour la section "Meilleures Ventes"
    expect(homePage.page.url()).toContain('bestsellers');
});

test('Redirection vers Ventes Flash', async ({ homePage }) => {
    // Clique sur le bouton "Ventes Flash" et vérifie la redirection
    await homePage.clickVenteFlash();
    
    // Vérifie que l'URL est correcte pour la section "Ventes Flash"
    expect(homePage.page.url()).toContain('deals');
});
