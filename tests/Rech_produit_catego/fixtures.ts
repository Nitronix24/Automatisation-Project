import{test as base} from '@playwright/test'
import { RechPage } from './rech_page';

const test = base.extend({
    rech: async ({page}, use) => {
        await use(new RechPage(page));
    }
});
const expect = base.expect;
export { test, expect };
