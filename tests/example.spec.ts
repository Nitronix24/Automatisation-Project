import { test, expect } from '@playwright/test'; 

test('Formulaire Basic', async ({page}) => {
  const emailField = page.locator('#exampleInputEmail1')
  await emailField.fill("test@test.com")
  await page.locator('#exampleInputPassword1').fill("password")
  await expect(emailField).toHaveValue('test@test.com')
  await page.getByRole('checkbox', {name: "Check me out"}).check({force: true})
  await page.locator('nb-card').filter({ hasText: 'Basic formEmail' }).getByRole('button').click()
 });
