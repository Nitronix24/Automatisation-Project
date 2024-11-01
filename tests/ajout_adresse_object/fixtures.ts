import{test as base} from '@playwright/test'
import { AjoutAdresse } from './ajou_adresse';

const test = base.extend({
    ajout: async ({page}, use) => {
        await use(new AjoutAdresse(page));
    }
});
const expect = base.expect;
export { test, expect };
