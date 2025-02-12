class BasePage {
  constructor(page) {
    if (!page) {
      throw new Error("Page object is required");
    }
    this.page = page;
  }
}

module.exports = { BasePage };