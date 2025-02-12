const { setWorldConstructor, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const config = require('../../playwright.config');
const pageClasses = require('../pages'); 

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
  }
  
  initializePages() {
    pageClasses.forEach(pageClassObj => {
      const pageName = Object.keys(pageClassObj)[0];
      const PageClass = pageClassObj[pageName];

      if (PageClass && typeof PageClass === 'function') {
        this[pageName.toLowerCase()] = new PageClass(this.page)
      } else {
        
      }
    });
  }

  async init() {
    if (!this.browser) {
      this.browser = await chromium.launch(config.use);
      this.context = await this.browser.newContext({
        viewport: config.use.viewport
      });
      this.page = await this.context.newPage();
    }
  }

  async close() {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);

Before(async function () {
  await this.init(); 
  this.initializePages();
});

After(async function () {
  await this.close();
});