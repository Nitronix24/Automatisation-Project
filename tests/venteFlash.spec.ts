import { test } from "./vente_flash_object/fixtures";

test.setTimeout(60000);
test.beforeEach(async({page}) => {
    await page.goto('https://www.amazon.fr/');
    await page.getByLabel('Accepter').click();
  }
);
test('venteFlashproduit', async ({ VenteFlash }) => {
    await VenteFlash.verify1();
});