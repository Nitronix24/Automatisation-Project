import { test,} from "./verifierAddress_object/fixtures";


test.beforeEach(async ({ page }) => {
    // Naviguer vers Amazon.fr et se connecter
    await page.goto('https://www.amazon.fr/');

    await page.getByLabel('Accepter').click();
    await page.getByRole('link', { name: 'Bonjour, Identifiez-vous' }).click();
    await page.getByLabel('Adresse e-mail ou numéro de t').fill('joeplaywright9@gmail.com');
    await page.getByLabel('Continuer').click();
    await page.getByLabel('Mot de passe').fill('Joedoe@!');
    await page.getByLabel('S\'identifier').click();
});

test('verify address', async ({ Verify }) => {
    await Verify.verify();
});