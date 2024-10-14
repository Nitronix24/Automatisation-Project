// const { chromium } = require('playwright');

// let browser;
// let context;

// module.exports = {
//     globalSetup: async () => {
//         browser = await chromium.launch();
//         context = await browser.newContext();
//         return context;
//     },
//     globalTeardown: async () => {
//         await browser.close();
//     },
//     getContext: () => context,
// };
