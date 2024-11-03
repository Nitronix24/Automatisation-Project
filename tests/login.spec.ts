
import { test} from "./login_object/fixtures";

test.beforeEach(async({page}) => {
    await page.goto('https://www.amazon.fr/');
    await page.getByLabel('Accepter').click();
  }
);

test('login', async ({ login }) => { 
    await login.login1();
});
//valide par le prof