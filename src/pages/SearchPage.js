const { BasePage } = require('./BasePage');
const { WaitHelper } = require('../support/WaitHelper');

class SearchPage extends BasePage {
  constructor(page) {
    super(page);
    this.searchButton = "#searchbox_homepage [type='submit']"
    this.searchInput = '#searchbox_input';
  }

  async assertSearchPage() {
    const waitHelper = new WaitHelper(this.page);
    await waitHelper.waitForElementToBeVisible(this.page, this.searchButton);
  }

  async search(query) {
    await this.page.fill(this.searchInput, query);
    await this.page.click(this.searchButton);
  }
}

module.exports = { SearchPage };