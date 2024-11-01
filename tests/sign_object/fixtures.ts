import{test as base} from '@playwright/test'
import { SignPage } from './SignPage';

const test = base.extend({
    sign: async ({page}, use) => {
        await use(new SignPage(page));
    }
});
const expect = base.expect;
export { test, expect };
