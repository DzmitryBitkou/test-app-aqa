// step_definitions/qavajs.steps.js
// Custom steps (kept minimal). The generated feature uses QavaJS built-in steps
// for common actions like visibility checks and clicks. This file provides
// a small helper step as an example and also exports helper functions.

const { Then } = require('@cucumber/cucumber');
const QavaHomePage = require('../page_object/QavaHomePage');

Then('I print the home page header', async function() {
    const headerText = await this.browser.getText(QavaHomePage.Header);
    console.log('Home page header:', headerText);
});

// Additional helper step to assert Steps dropdown contains expected packages
Then('the dropdown should display the following packages:', async function(table) {
    // table is a cucumber data table object. Convert to expected array
    const expected = table.raw().map(r => r[0].trim());

    // Ensure dropdown is visible/open - try clicking trigger
    await this.browser.click(QavaHomePage.StepsDropdown, { timeout: 5000 });

    // Collect visible package texts
    const locators = QavaHomePage.expectedStepsLocators();
    const visibleTexts = [];
    for (const loc of locators) {
        try {
            const txt = await this.browser.getText(loc);
            visibleTexts.push(txt.trim());
        } catch (e) {
            // if not found, push empty to indicate missing
            visibleTexts.push('');
        }
    }

    // Simple comparison by array equality
    const matches = expected.length === visibleTexts.length && expected.every((v, i) => v === visibleTexts[i]);
    if (!matches) {
        throw new Error('Steps dropdown package list is missing or incomplete');
    }
});