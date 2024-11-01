import { test as base } from '@playwright/test';
import { CreateLayoutAdress } from './CreateLayoutAdress';

const test = base.extend({
    createAddress: async ({ page }, use) => {
        await use(new CreateLayoutAdress(page));
    }
});

const expect = base.expect;
export { test, expect };