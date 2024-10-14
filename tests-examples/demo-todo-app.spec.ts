import { test, expect, Page } from '@playwright/test';

// Avant chaque test, ouvrir la page
test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

const TODO_ITEMS = ['item 1', 'item 2', 'item 3'];

// Augmenter le timeout pour ce test particulier
test('complete all checkbox should update state when items are completed / cleared', async ({ page }) => {
  test.setTimeout(60000); // Timeout spécifique de 60 secondes pour ce test

  const toggleAll = page.locator('label[for="toggle-all"]');
  await toggleAll.check(); // Cochez la case pour marquer tout comme complet
  await expect(toggleAll).toBeChecked(); // Vérifier si la case est cochée
  await checkNumberOfCompletedTodosInLocalStorage(page, 3); // Vérification du stockage local
});

// Fonction de vérification du nombre de tâches complétées dans le stockage local
async function checkNumberOfCompletedTodosInLocalStorage(page: Page, expected: unknown) {
  const completedTodos = await page.evaluate(() => {
    return JSON.parse(localStorage.getItem('todos') || '[]').filter((todo: { completed: any; }) => todo.completed).length;
  });
  expect(completedTodos).toBe(expected);
}

// Exemple de test pour l'édition d'un élément
test('should allow me to edit an item', async ({ page }) => {
  test.setTimeout(60000); // Timeout spécifique de 60 secondes

  // Réessayer de charger la page en cas d'erreur
  await page.goto('https://demo.playwright.dev/todomvc');

  // Ajouter des items dans la liste TODO
  await page.fill('.new-todo', TODO_ITEMS[0]);
  await page.press('.new-todo', 'Enter');

  // Double-cliquer pour éditer
  await page.dblclick(`.todo-list li:has-text("${TODO_ITEMS[0]}")`);
  const input = page.locator('.todo-list li.editing .edit');
  await input.fill('edited item');
  await input.press('Enter');

  // Vérifier que l'item a bien été modifié
  await expect(page.locator('.todo-list li')).toHaveText('edited item');
});
