const { locator } = require('@qavajs/steps-playwright/po.js');

// QavaHomePage POM - enhanced with locators used by the whats_new_and_steps.feature
module.exports = class QavaHomePage {
    // root selector for the page
    selector = 'body';

    // Existing locators
    Header = locator('header h1');
    WritingTestsLink = locator('a.menu__link[href*="writing-tests"]');

    // "What's new in v2" link - flexible selectors to handle minor markup differences
    WhatsNewLink = locator('a:has-text("What\'s new in v2"), a:has-text("Whats new in v2"), a[href*="whats-new"], a[href*="whats-new-v2"]');

    // "Steps" dropdown trigger and menu
    StepsDropdown = locator('a:has-text("Steps"), button:has-text("Steps")');
    StepsDropdownMenu = locator('nav, .menu, .dropdown, ul.menu__list');

    // Expected package items inside Steps dropdown
    StepCore = locator('a:has-text("core")');
    StepApi = locator('a:has-text("api")');
    StepElement = locator('a:has-text("element")');
    StepAssert = locator('a:has-text("assert")');
    StepUtils = locator('a:has-text("utils")');

    // Return list of expected package locators in order
    expectedStepsLocators() {
        return [this.StepCore, this.StepApi, this.StepElement, this.StepAssert, this.StepUtils];
    }
}