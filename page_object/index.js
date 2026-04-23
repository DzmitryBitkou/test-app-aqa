const { locator } = require("@qavajs/steps-playwright/po.js");
const QavaHomePage = require("./QavaHomePage");

// Application-level Page Object registry
module.exports = class App {
  QavaHomePage = locator.as(QavaHomePage);

}
