import { chromium, Page } from '@playwright/test';

let page: Page;

beforeAll(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();
});

afterAll(async () => {
  await page.close();
});

function afterAll(arg0: () => Promise<void>) {
    (async () => {
        try {
            await arg0();
        } catch (error) {
            console.error('Error in afterAll:', error);
        }
    })();
}

export { page };

function beforeAll(arg0: () => Promise<void>) {
    (async () => {
        try {
            await arg0();
        } catch (error) {
            console.error('Error in beforeAll:', error);
        }
    })();
}
    // Removed duplicate function implementation

