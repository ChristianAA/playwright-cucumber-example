const { BasePage } = require('./BasePage');
const { WaitHelper } = require('../support/WaitHelper');
const { expect } = require('@playwright/test');

class ResultsPage extends BasePage {

  constructor(page) {
    super(page);
    this.resultsContainer = "[data-testid='mainline'] [data-testid='result']";
  }

  async assertTitle(expectedTitle) {
    const title = await this.page.title();
    expect(title).toContain(expectedTitle);
  }

  async assertResults() {
    const waitHelper = new WaitHelper(this.page);
    await waitHelper.waitForElementToBeVisible(this.page, this.resultsContainer);
  }
}

module.exports = { ResultsPage };