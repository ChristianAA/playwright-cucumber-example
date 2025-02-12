const { Config } = require('./config');

class Navigator {
  constructor(page) {
    this.page = page;
  }

  async navigateToHomePage() {
    await this.page.goto(Config.BASE_URL);
  }
}

module.exports = { Navigator };