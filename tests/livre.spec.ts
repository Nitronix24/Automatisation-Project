import { test } from "./fixtures";

test.beforeEach(async({page}) => {
    await page.goto('https://www.amazon.fr/');
    await page.getByLabel('Accepter').click();
  }
);

test('Achat_livre', async ({ livre }) => { 
    await livre.acheterLivre();
});
