import{test as base} from '@playwright/test'
import { LoginLayoutPage } from './LoginLayoutPage';

const test = base.extend({
    login: async ({page}, use) => {
        await use(new LoginLayoutPage(page));
    }
});
const expect = base.expect;
export { test, expect };
