import{test} from "./ajout_adresse_object/fixtures";
test.beforeEach(async({page}) => {
    await page.goto('https://www.amazon.fr/');
    await page.getByLabel('Accepter').click();
  }
);
test('AjoutAdresse', async ({ ajout }) => { 
    await ajout.AjoutAdresse();
});
