import{test as base} from '@playwright/test'
import { VerifyLayout } from './VerifyLayout';

const test = base.extend({
    Verify: async ({page}, use) => {
        await use(new VerifyLayout(page));
    }
});
const expect = base.expect;
export { test, expect };
