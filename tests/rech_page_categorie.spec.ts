import {test} from "./Rech_produit_catego/fixtures";
test.beforeEach(async({page}) => {
    await page.goto('https://www.amazon.fr/');
    await page.getByLabel('Accepter').click();
  }
);
test('rech_page_categorie', async ({ rech }) => { 
    await rech.Rech1();
});