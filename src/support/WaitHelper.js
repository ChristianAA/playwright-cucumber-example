class WaitHelper {
  constructor(page) {
    this.page = page;
  }

  async waitForElementToBeVisible(page, selector) {
    await page.waitForSelector(selector, { state: 'visible' });
  }
}

module.exports = { WaitHelper };