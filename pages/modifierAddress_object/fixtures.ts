import { test as base } from '@playwright/test';
import { UpdateLayout } from './UpdateLayout';

const test = base.extend({
    updateForms: async ({ page }, use) => {
        await use(new UpdateLayout(page));

    }
});

const expect = base.expect;
export { test, expect };