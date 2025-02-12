const {Then } = require('@cucumber/cucumber');

Then('the title of the page should be {string}', async function (expectedTitle) {
  await this.resultspage.assertTitle(expectedTitle);
});

Then('I should see search results', async function () {
  await this.resultspage.assertResults();
});