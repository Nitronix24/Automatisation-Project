import {test as base} from '@playwright/test'
import { VenteFlashPage } from './venteFlash';



const test = base.extend({
    VenteFlash: async ({page}, use) => {
        await use(new VenteFlashPage(page));
    }
});
const expect = base.expect;
export { test, expect };