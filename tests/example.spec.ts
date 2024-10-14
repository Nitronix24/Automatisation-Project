import { test, expect } from '@playwright/test';

test('simple test', async ({ page }) => {
  await page.goto('https://www.amazon.fr');
  expect(await page.title()).toBe('Amazon.fr : livres, DVD, jeux vidéo, musique, high-tech, informatique, jouets, chaussures, vêtements, sport, maison, beauté, alimentation');
});
