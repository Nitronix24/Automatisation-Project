import { test, expect } from '@playwright/test';
import { CategoriesAndFilterPage } from './categoriesAndFilterPage';

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
  await page.locator('#sp-cc-rejectall-link').click();
  await page.locator('#nav-hamburger-menu').click();
  await page.locator('a[href="/cuisine-maison-%C3%A9lectrom%C3%A9nager/b/?ie=UTF8&node=57004031&ref_=nav_cs_home"]').click();
});


test('filter by brand and seller', async({ page }) => {
    const categoriesPage = new CategoriesAndFilterPage(page);
    
    await categoriesPage.grosElectromenagerClick();
    // Vérificatio
    await expect(page).toHaveURL('/gp/browse.html?node=57695031&ref_=nav_em__groselectro_0_2_15_14');
    

    await categoriesPage.filterByBrandAndSeller();
    
    const products = page.locator('.s-main-slot .s-result-item'); // Localiser les produits affichés
    const productCount = await products.count();
    
    for (let i = 0; i < productCount; i++) {
        const product = products.nth(i);
        
        // Vérifier que chaque produit appartient à la marque "Samsung"
        const brandText = await product.locator('.s-product-brand-name').textContent();
        expect(brandText).toContain('Samsung');
        
        // Vérifier que chaque produit est vendu par "Amazon.fr"
        const sellerText = await product.locator('.s-product-seller-name').textContent();
        expect(sellerText).toContain('Amazon.fr');
    }
});