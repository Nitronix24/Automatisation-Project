import {test as base} from '@playwright/test'
import { AcheterLivrePage } from './Achat_livre';
const test = base.extend({
    livre: async ({page}, use) => {
        await use(new AcheterLivrePage(page));
    }
});
const expect = base.expect;
export { test, expect };
