const { Given, When } = require('@cucumber/cucumber');
const { Navigator } = require('../support/Navigator');

Given('I am on the DuckDuckGo homepage', async function () {
  const navigator = new Navigator(this.page);
  await navigator.navigateToHomePage();
  await this.searchpage.assertSearchPage();
});

When('I search for {string}', async function (searchQuery) {
  await this.searchpage.search(searchQuery);
});